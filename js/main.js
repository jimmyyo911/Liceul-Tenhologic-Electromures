/* =============================== Slide meniu y ascuns =============================== */

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


/* ======== Meniu vazut ======== */
/* Daca constanta exista atunci -> meniu se vede */

if(navToggle){
  navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
  })
}

/* ======== Meniu ascuns ======== */
/* Validam daca constanta exista -> meniu ascuns */

if(navClose){
  navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
  })
  
}

/* =============== Ascunde meniul=============== */
const navLink = document.querySelectorAll('.nav_link')

function linkAction () {
  const navMenu = document.getElementById('nav-menu')
  //Cand se apasa schimba fiecare element in parte
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


