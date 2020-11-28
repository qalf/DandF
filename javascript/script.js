let affichage = document.getElementById("affichage");
let image = document.getElementsByClassName("image");
let overlay = document.getElementsByClassName("overlay");
let URL = document.location.href

class continent {
    constructor(id, link, NomChemin, name) {
        this.id = id;
        this.link = link;
        this.NomChemin = NomChemin;
        this.name = name
    }
}

let Europe = new continent(0, 'images/Continent/Europe.jpeg', 'html/Europe.html', 'Europe');
let Asie = new continent(1, 'images/Continent/Asie.jpeg', 'html/Asie.html', 'Asie');
let AmériqueN = new continent(2, 'images/Continent/AmériqueN.jpg', 'html/AmeriqueN.html', 'Amérique Du Nord');
let AmériqueS = new continent(3, 'images/Continent/AmériqueS.jpeg', 'html/AmeriqueS.html', 'Amérique du Sud');
let Afrique = new continent(4, 'images/Continent/Afrique.jpeg', 'html/Afrique.html', 'Afrique');
let IlesP = new continent(5, 'images/Continent/IlesP.jpeg', 'html/IlesP.html', 'Iles Paradisiaques');

class ville{
    constructor(id,link,name,continent){
        this.id = id;
        this.link = link;
        this.name = name;
        this.continent = continent
    }
}

let Paris = new ville(0, '../images/Europe/Paris.jpg', 'Paris', 'Europe');
let Barcelone = new ville(1, '../images/Europe/Barcelone.jpg', 'Barcelone', 'Europe');
let Londres = new ville(2, '../images/Europe/Londres.jpg', 'Londres', 'Europe');
let Rome = new ville(3, '../images/Europe/Rome.jpg', 'Rome', 'Europe');
let Stockholm = new ville(4, '../images/Europe/Stockholm.jpg', 'Stockholm', 'Europe');

let Bangkok = new ville(0, '../images/Asie/Bangkok.jpg', 'Bangkok', 'Asie');
let Bombay = new ville(1, '../images/Asie/Bombay.jpg', 'Bombay', 'Asie');
let Hanoï = new ville(2, '../images/Asie/Hanoï.jpg', 'Hanoï', 'Asie');
let HongKong = new ville(3, '../images/Asie/HongKong.jpg', 'Hong-Kong', 'Asie');
let Pékin = new ville(4, '../images/Asie/Pékin.jpg', 'Pékin', 'Asie');
let Tokyo = new ville(5, '../images/Asie/Tokyo.jpg', 'Tokyo', 'Asie');

let Cancun = new ville(0, '../images/AmériqueN/Cancun.jpg', 'Cancun', 'AmériqueN');
let LosAngeles = new ville(1, '../images/AmériqueN/LosAngeles.jpg', 'Los Angeles', 'AmériqueN');
let Miami = new ville(2, '../images/AmériqueN/Miami.jpg', 'Miami', 'AmériqueN');
let Montreal = new ville(3, '../images/AmériqueN/Montreal.jpg', 'Montreal', 'AmériqueN');
let NewYork = new ville(4, '../images/AmériqueN/NewYork.jpeg', 'New York', 'AmériqueN');

let BuenosAires = new ville(0, '../images/AmériqueS/BuenosAires.jpg', 'Buenos-Aires', 'AmériqueS');
let LacTiticaca = new ville(1, '../images/AmériqueS/LacTiticaca.jpg', 'Lac Titicaca', 'AmériqueS');
let Lima = new ville(2, '../images/AmériqueS/Lima.jpg', 'Lima', 'AmériqueS');
let Rio = new ville(3, '../images/AmériqueS/Rio.jpeg', 'Rio de Janeiro', 'AmériqueS');

let CapeTown = new ville(0, '../images/Afrique/CapeTown.jpg', 'Cape Town', 'Afrique');
let Casablanca = new ville(1, '../images/Afrique/Casablanca.jpeg', 'Casablanca', 'Afrique');
let Dubai = new ville(2, '../images/Afrique/Dubai.jpg', 'Dubaï', 'Afrique');
let LeCaire = new ville(3, '../images/Afrique/LeCaire.jpg', 'Le Caire', 'Afrique');
let Marrakesh = new ville(4, '../images/Afrique/Marrakesh.jpg', 'Marrakesh', 'Afrique');

let Auckland = new ville(0, '../images/IlesP/Auckland.jpg', 'Auckland', 'IlesP');
let Caraibes = new ville(1, '../images/IlesP/Caraibes.jpg', 'Caraïbes', 'IlesP');
let Hawai = new ville(2, '../images/IlesP/Hawai.jpg', 'Hawaï', 'IlesP');
let Seychelles = new ville(3, '../images/IlesP/Seychelles.jpg', 'Seychelles', 'IlesP');
let Singapour = new ville(4, '../images/IlesP/Singapour.jpg', 'Singapour', 'IlesP');
let Ubud = new ville(5, '../images/IlesP/Ubud.jpg', 'Ubud', 'IlesP');


let LstContinent = [Europe,Asie,AmériqueN,AmériqueS,Afrique,IlesP];

let LstEurope = [Paris,Barcelone,Londres,Rome,Stockholm];
let LstAsie = [Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo];
let LstAmériqueN = [Cancun, LosAngeles, Miami,Montreal,NewYork];
let LstAmériqueS = [BuenosAires,LacTiticaca,Lima,Rio];
let LstAfrique = [CapeTown,Casablanca,Dubai,LeCaire,Marrakesh];
let LstIlesP = [Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
    .then(res => res.json())
    .then(resjson => {
        let temp = resjson.main.temp;
        overlay.innerHTML = temp;
        console.log(overlay.innerHTML);
    })


afficheimg();
function afficheimg() {
    let link = ''
    if (URL === 'https://qalf.github.io/DandF/html/Europe.html'){
        for (var i of LstEurope) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay"></div></div>';
        }
        affichage.innerHTML += link;
    }

    else if (URL === 'https://qalf.github.io/DandF/html/Asie.html'){
        for (var i of LstAsie) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/AmeriqueN.html'){
        for (var i of LstAmériqueN) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/AmeriqueS.html'){
        for (var i of LstAmériqueS) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/Afrique.html'){
        for (var i of LstAfrique) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/IlesP.html'){
        for (var i of LstIlesP) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else {
        for (var i of LstContinent) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }

}

function infosimg(i) {
    
    image[i].style.width = "370px";
    image[i].style.height = "267px";
    image[i].style.marginTop = "0px";
    image[i].style.marginBottom = "0px";

    overlay[i].style.backgroundColor = "rgba(0,0,0,0.7)";
    overlay[i].style.color = "rgba(255, 255, 255,1)" ;
    overlay[i].style.height = "30%" ;

    image[i].setAttribute('onmouseout', 'delimg(' + i + ')');
    image[i].setAttribute('onclick', 'resa(' + i + ')');


}

function delimg(i) {
    image[i].style.width = "350px";
    image[i].style.height = "237px";
    image[i].style.marginTop = "20px";
    image[i].style.marginBottom = "20px";

    overlay[i].style.backgroundColor = "rgba(0,0,0,0)";
    overlay[i].style.height = "0%" ;
    overlay[i].style.color = "rgba(255, 255, 255,0)" ;
}

function resa(i) {
    if (URL === 'https://qalf.github.io/DandF/html/Europe.html') {
        var id = LstEurope[i].id
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        document.location.href = lien;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/Asie.html') {
        var id = LstAsie[i].id
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        document.location.href = lien;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/AmériqueN.html') {
        var id = LstAmériqueN[i].id
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        document.location.href = lien;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/AmériqueS.html') {
        var id = LstAmériqueS[i].id
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        document.location.href = lien;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/Afrique.html') {
        var id = LstAfrique[i].id
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        document.location.href = lien;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/IlesP.html') {
        var id = LstIlesP[i].id
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        document.location.href = lien;
    }
    else {
        var chemin = LstContinent[i].NomChemin;
        var lien = 'https://qalf.github.io/DandF/'+chemin;
        document.location.href = lien;
    }
}
