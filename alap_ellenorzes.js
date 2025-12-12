// /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/

function ellenorAlap(){
    let nev = document.forms["alapUrlap"]["nev"].value;
    console.log(nev);

    // ha üres illetve csak szóközöket tartalmaz
    if(nev.trim() === ""){
        alert("A név mező nem lehet üres!");
        return false;
    }

    let nevfilter = /^[a-zA-ZáéíóöőúüűÁÉÍÓÖŐÚÜŰ ]+$/;
    if(!nevfilter.test(nev)){
        alert("A név mező csak betűket és szóközöket tartalmazhat!");
        return false;
    }

    let nevKiiratasa = document.getElementById("nevEredmeny");
    nevKiiratasa.innerText = "Helyes név: " + nev;
    return false;

}