'use strict';

window.onload = function(){

    let myForm = document.getElementById('myForm');
    myForm.addEventListener('click', function(event){
        event.preventDefault();
    })


    let luni8 = document.querySelector('.luni-8');
    let luni9 = document.querySelector('.luni-9');
    let luni10 = document.querySelector('.luni-10');
    let luni11 = document.querySelector('.luni-11');
    let luni12 = document.querySelector('.luni-12');
    let luni13 = document.querySelector('.luni-13');
    let luni14 = document.querySelector('.luni-14');
    let luni15 = document.querySelector('.luni-15');

    let marti8 = document.querySelector('.marti-8');
    let marti9 = document.querySelector('.marti-9');
    let marti10 = document.querySelector('.marti-10');
    let marti11 = document.querySelector('.marti-11');
    let marti12 = document.querySelector('.marti-12');
    let marti13 = document.querySelector('.marti-13');
    let marti14 = document.querySelector('.marti-14');
    let marti15 = document.querySelector('.marti-15');

    let miercuri8 = document.querySelector('.miercuri-8');
    let miercuri9 = document.querySelector('.miercuri-9');
    let miercuri10 = document.querySelector('.miercuri-10');
    let miercuri11 = document.querySelector('.miercuri-11');
    let miercuri12 = document.querySelector('.miercuri-12');
    let miercuri13 = document.querySelector('.miercuri-13');
    let miercuri14 = document.querySelector('.miercuri-14');
    let miercuri15 = document.querySelector('.miercuri-15');

    let joi8 = document.querySelector('.joi-8');
    let joi9 = document.querySelector('.joi-9');
    let joi10 = document.querySelector('.joi-10');
    let joi11 = document.querySelector('.joi-11');
    let joi12 = document.querySelector('.joi-12');
    let joi13 = document.querySelector('.joi-13');
    let joi14 = document.querySelector('.joi-14');
    let joi15 = document.querySelector('.joi-15');

    let vineri8 = document.querySelector('.vineri-8');
    let vineri9 = document.querySelector('.vineri-9');
    let vineri10 = document.querySelector('.vineri-10');
    let vineri11 = document.querySelector('.vineri-11');
    let vineri12 = document.querySelector('.vineri-12');
    let vineri13 = document.querySelector('.vineri-13');
    let vineri14 = document.querySelector('.vineri-14');
    let vineri15 = document.querySelector('.vineri-15');

    let clasaSelectata = document.getElementById('clase');
    let btnSubmit = document.getElementById('btn-submit');
    let formTarget = document.querySelector('.___form_target');

// SORTAREA 1 - TARAN OBOSIT
/*
    let oreLuni = [luni8, luni9, luni10, luni11, luni12, luni13, luni14, luni15];
    let materiiLuni = ["Lb.Romana", "Lb.Romana", "Mate", "Fizica", "Lb.Engleza", "Ed.Fizica", "", ""];
    
    let oreMarti = [marti8, marti9, marti10, marti11, marti12, marti13, marti14, marti15];
    let materiiMarti = ["Mate", "Mate", "Geografie", "Chimie", "Biologie", "Biologie", "Lb.Romana", "Lb.Romana"];
    


    for(let i=0;i < materiiLuni.length; i++){
        oreLuni[i].textContent = materiiLuni[i];
    }

    for(let i=0;i < materiiMarti.length; i++){
        oreMarti[i].textContent = materiiMarti[i];
    }
*/
 
    // VECTORII ORELOR DIN FIECARE ZI
    let oreLuni = [luni8, luni9, luni10, luni11, luni12, luni13, luni14, luni15];
    let oreMarti = [marti8, marti9, marti10, marti11, marti12, marti13, marti14, marti15];
    let oreMiercuri = [miercuri8, miercuri9, miercuri10, miercuri11, miercuri12, miercuri13, miercuri14, miercuri15];
    let oreJoi = [joi8, joi9, joi10, joi11, joi12, joi13, joi14, joi15];
    let oreVineri = [vineri8, vineri9, vineri10, vineri11, vineri12, vineri13, vineri14, vineri15];
    
    // FUNCTIA DE AFISARE A MATERIILOR IN ORAR
    let afiseazaMaterii = function(clasa){
        for(let i=0; i<8; i++){
            oreLuni[i].textContent = clasa.materiiLuni[i];
            oreMarti[i].textContent = clasa.materiiMarti[i];
            oreMiercuri[i].textContent = clasa.materiiMiercuri[i];
            oreJoi[i].textContent = clasa.materiiJoi[i];
            oreVineri[i].textContent = clasa.materiiVineri[i];
        }
    }

    // CLASELE
    let cls9A = {
        materiiLuni: ["Franceza", "Engleza", "Chimie", "Specialitate", "Rel", "", "", ""],
        materiiMarti: ["Fizica", "Specialitate", "Matematica", "Romana", "Specialitate", "Specialitate", "Specialitate", ""],
        materiiMiercuri: ["Franceza", "Specialitate", "Chimie", "Specialitate", "TIC", "Biologie", "", ""],
        materiiJoi: ["Specialitate", "Geografie", "Sociologie", "Matematica", "Romana", "Fizica", "Engleza", ""],
        materiiVineri: ["Istorie", "Dirigentie", "Matematica", "Sport", "Romana", "", "", ""],
    }

    let cls9B = {
        materiiLuni: ["Istorie", "Chimie", "Franceza", "Specialitate", "Specialitate", "Specialitate", "", ""],
        materiiMarti: ["Specialitate", "Romana", "Fizica", "Sociologie", "Engleza", "Specialitate", "", ""],
        materiiMiercuri: ["Geografie", "Sport", "Religie", "Matematica", "Biologie", "Matematica", "TIC", ""],
        materiiJoi: ["Romana", "Specialitate", "Matematica", "Fizica", "Engleza", "Franceza", "Dirigentie", ""],
        materiiVineri: ["Romana", "Chimie", "Specialitate", "Specialitate", "Specialitate", "", "", ""],
    }

    let cls9C = {
        materiiLuni: ["Franceza", "Specialitate", "Specialitate", "Chimie", "Engleza", "Fizica", "Fizica", ""],
        materiiMarti: ["Specialitate", "Matematica", "Romana", "Dirigentie", "TIC", "Engleza", "", ""],
        materiiMiercuri: ["Sociologie", "Chimie", "Specialitate", "Biologie", "Religie", "Geografie", "", ""],
        materiiJoi: ["Specialitate", "Franceza", "Sport", "Romana", "Specialitate", "Matematica", "", ""],
        materiiVineri: ["Romana", "Matematica", "Specialitate", "Specialitate", "Specialitate", "Istorie", "", ""],
    }

    let cls9D = {
        materiiLuni: ["Chimie", "TIC", "Fizica", "Specialitate", "Specialitate", "", "", ""],
        materiiMarti: ["Romana", "Geografie", "Specialitate", "Franceza", "Religie", "Matematica", "Sociologie", ""],
        materiiMiercuri: ["Matematica", "Dirigentie", "Specialitate", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls9E = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls9F = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls9G = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls9H = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls10A = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls10B = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls10C = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls10D = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls10E = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls10F = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls10G = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls10H = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls11A = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls11B = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls11C = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls11D = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls11E = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls11F = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls11G = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls11H = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls12A = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls12B = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls12C = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls12D = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls12E = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls12F = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls12G = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }

    let cls12H = {
        materiiLuni: ["N-au scoala astia", "Mate", "", "", "", "", "", ""],
        materiiMarti: ["", "", "", "", "", "", "", ""],
        materiiMiercuri: ["", "", "", "", "", "", "", ""],
        materiiJoi: ["", "", "", "", "", "", "", ""],
        materiiVineri: ["", "", "", "", "a", "", "", ""],
    }




    //afiseazaMaterii(cls9A);

    
    afiseazaMaterii(cls9A);
    clasaSelectata.addEventListener('click', function(){
        
        switch(clasaSelectata.value){
            case "cls-9A": afiseazaMaterii(cls9A); 
                           formTarget.textContent = "IX A - Tehnician în automatizări" ;
                           break;
            case "cls-9B": afiseazaMaterii(cls9B); 
                           formTarget.textContent = "IX B - Tehnician în instalații electrice";
                           break;
            case "cls-9C": afiseazaMaterii(cls9C);
                           formTarget.textContent = "IX C - Tehnician în hotelărie";
                           break;
            case "cls-9D": afiseazaMaterii(cls9D);
                           formTarget.textContent = "IX D - Tehnician în hotelărie";
            default: afiseazaMaterii(cls9A); break;
        }
        
        
    })
    
    
    
}