const express =require("express");
const mongoose = require("mongoose");
const app = express();

// Conectare parola si user
const uri ="mongodb+srv://jimmy:<MxVrgA7M7LZyaNol>@cluster0.qdrk1be.mongodb.net/?retryWrites=true&w=majority"

//Legare 

async function connect() {
  try{
    await mongoose.connect(uri)
    console.log("Connected to MongoDB")

  } catch(error) {
    console.error(error);
  }
  
//Port 8000 
}
app.listen(8000, () => {
  console.log("Server started on port 8000")
});




