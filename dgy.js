
//segédfüggvények
function ID(nev) {
    return document.getElementById(nev);
}

function $(nev) {
    return document.querySelectorAll(nev);
}




function nevbeiras() {
    this.innerHTML = "Antal Adrienn";
}

function nev_eltuntetese() {
    this.innerHTML = "2.3";
}


function masodikOn() {
    this.classList.add("masodik");
}

function masodikOff() {
    this.classList.remove("masodik");
}



function harmadikOn() {
    for (var i = 0; i < $("#tartalom1 div:nth-child(2) p:nth-child(odd)").length; i++) {  //mindegy, melyik tömb hosszát adjuk meg a 3 közül, mert u.olyan hosszúak
        $("#tartalom1 div:nth-child(2) p:nth-child(odd)")[i].classList.add("harmadik");
        $("#tartalom1 div:nth-child(3) p:nth-child(odd)")[i].classList.add("harmadik");
        $("#tartalom1 div:nth-child(4) p:nth-child(odd)")[i].classList.add("harmadik");
    }
}

function harmadikOff() {
    for (var i = 0; i < $("#tartalom1 div:nth-child(2) p:nth-child(odd)").length; i++) {  //mindegy, melyik tömb hosszát adjuk meg a 3 közül, mert u.olyan hosszúak
        $("#tartalom1 div:nth-child(2) p:nth-child(odd)")[i].classList.remove("harmadik");
        $("#tartalom1 div:nth-child(3) p:nth-child(odd)")[i].classList.remove("harmadik");
        $("#tartalom1 div:nth-child(4) p:nth-child(odd)")[i].classList.remove("harmadik");
    }
}



function negyesOn() {
    this.classList.add("hatter_kurzor");
}

function negyesOff() {
    this.classList.remove("hatter_kurzor");
}


function hatosOn() {
    $("#tartalom2")[0].classList.add("hatter_kurzor");

}

function hatosOff() {
    $("#tartalom2")[0].classList.remove("hatter_kurzor");
}


function masikkepOn() {
    $("#tartalom2 img")[0].src = "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg";

}

function masikkepOff() {
     $("#tartalom2 img")[0].src = "https://1.bp.blogspot.com/-UwekwMuKuBM/XzfKCfDtTuI/AAAAAAABiP4/gstgfMb77Mc43fHCpNySTV7coKCD_Nq1gCPcBGAsYHg/s640/_DSC0744.jpeg";
}


//8.	Az összes kép elérési útját tároljuk el egy tömbben, és a „fajlnevek” id-vel megadott listában tároljuk el! (Használjuk az appendChild utasítást!)

function listaba(){
    //létrehozunk egy tömböt, amely az összes képet tartalmazza
    var kepek = $("img");
    //a fájlneveket tároló lista hossza meg fog egyezni a tömbével
    var fajlnevek = [kepek.length];
    for (var i = 0; i < fajlnevek.length; i++) {
        fajlnevek[i] = kepek[i].src;
    }    
    return fajlnevek;    
}




function init() {

//1.	A 2.3-es bekezdésre kattintva a bekezdés szövege mögé kerüljön a saját neved. (elem tartalmának változtatása)

    var n = $("#tartalom1 div:nth-child(3) p:nth-child(3)")[0];  //querySelectorAll: tömböt ad vissza, kell a 0-s indexelés
    n.addEventListener("mousedown", nevbeiras);
    n.addEventListener("mouseup", nev_eltuntetese);


//2.	Az első div utolsó bekezdésére kattintva változzon meg annak betűszíne (és háttere). (1.7)
    $("#tartalom1 div:nth-child(2) p:last-child")[0].addEventListener("mousedown", masodikOn);
    $("#tartalom1 div:nth-child(2) p:last-child")[0].addEventListener("mouseup", masodikOff);


//3. 	Az összes páratlan bekezdés háttérszínét változtassuk meg szürkére, ha a gombra kattintok!
    $("#tartalom1 div:last-child input")[0].addEventListener("mousedown", harmadikOn); // #tartalom1 div:last-child input --> gomb
    $("#tartalom1 div:last-child input")[0].addEventListener("mouseup", harmadikOff);



//4.	A "Bekezdések" szöveg fölé mozgatva az egeret a háttérszín változzon meg kékre és a kurzor. 
//5.	Ha leviszem róla az egeret álljon vissza az eredeti háttérszín.  
    $("#tartalom1 h1")[0].addEventListener("mouseover", negyesOn);
    $("#tartalom1 h1")[0].addEventListener("mouseleave", negyesOff);


//6.	Ha a képek fölé viszem az egeret a háttérszín változzon meg kékre és a kurzor formája is változzon meg! 
//(osztály stílus hozzáadásával), ha leviszem az egeret álljon vissza az alapértelmezett színezés. 


        $("#tartalom2 img")[0].addEventListener("mouseover", hatosOn);
        $("#tartalom2 img")[0].addEventListener("mouseleave", hatosOff);
   
    
 //7.	Amíg az egeret lenyomva tartom, addig változzon meg a kép erre: https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Einstein_tongue.jpg/220px-Einstein_tongue.jpg 
 //Az egér felengedésével álljon vissza az eredeti kép!

    $("#tartalom2 img")[0].addEventListener("mousedown", masikkepOn);
    $("#tartalom2 img")[0].addEventListener("mouseup", masikkepOff);
    
  //8. a képek elérési útvonalainak kiiratása  
  
    $("#tartalom3 p")[0].innerHTML = listaba().join("<br>");
    nyolcas_maskepp();
   
    
    
}
window.addEventListener("load", init);