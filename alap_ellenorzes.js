// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

let nevKiiratasa = document.getElementById("nevEredmeny")
function ellenorAlap(){
    let nev = document.forms["alapUrlap"]["nev"].value;
    console.log(nev);

    if(nev.trim() == ""){
        if(nevKiiratasa){
            nevKiiratasa.innerText = "A nev mezo nem lehet ures!";
            nevKiiratasa.classList.add("hiba");
        }        
        return false;
    }

    let nevfilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;
    if (!nevfilter.test(nev)){
        alert("A nev mezo csak betuket es szokozoket tartalmazhat");
        return false;
    }

    nevKiiratasa.innerText - "Helyes nev: " + nev;
    nevKiiratasa.classList.remove("hiba");

    
    return false;

}