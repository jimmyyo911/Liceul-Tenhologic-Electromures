const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

router.post('/', (req, res) => {
  const { email, password } = req.body;

  // Gaseste adresa de mail
  User.findOne({ email }).then(user => {
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Verifica parola
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

      // Creeaza JWT
      const payload = {
        id: user.id,
        name: user.name,
        email: user.email
      };

      // Token de inregistrare
      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            success: true,
            token: 'Bearer ' + token
          });
        }
      );
    });
  });
});

module.exports = router;