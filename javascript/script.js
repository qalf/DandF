let affichage = document.getElementById("affichage");
let image = document.getElementsByClassName("image");
let overlay = document.getElementsByClassName("overlay");
let URL = document.location.href;
let body = document.getElementById("body");

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
let AmeriqueN = new continent(2, 'images/Continent/AmériqueN.jpg', 'html/AmeriqueN.html', 'Amérique Du Nord');
let AmeriqueS = new continent(3, 'images/Continent/AmériqueS.jpeg', 'html/AmeriqueS.html', 'Amérique du Sud');
let Afrique = new continent(4, 'images/Continent/Afrique.jpeg', 'html/Afrique.html', 'Afrique');
let IlesP = new continent(5, 'images/Continent/IlesP.jpeg', 'html/IlesP.html', 'Iles Paradisiaques');

class ville{
    constructor(id,id_continent,id_croissant,id_décroissant,link,name,continent,prix,temp){
        this.id = id;
        this.id_continent = id_continent;
        this.id_croissant = id_croissant;
        this.id_décroissant = id_décroissant;
        this.link = link;
        this.name = name;
        this.continent = continent
        this.prix = prix;
        this.temp = temp
    }
}

let Paris = new ville(0,0,8,22, 'images/Europe/Paris.jpg', 'Paris', 'Europe', 400);
let Barcelone = new ville(1,1,6,24, 'images/Europe/Barcelone.jpg', 'Barcelone', 'Europe', 370);
let Londres = new ville(2,2,7,23, 'images/Europe/Londres.jpg', 'Londres', 'Europe', 380);
let Rome = new ville(3,3,5,25, 'images/Europe/Rome.jpg', 'Rome', 'Europe', 360);
let Stockholm = new ville(4,4,0,30, 'images/Europe/Stockholm.jpg', 'Stockholm', 'Europe', 200);

let Bangkok = new ville(5,0,15,15, 'images/Asie/Bangkok.jpg', 'Bangkok', 'Asie', 500);
let Bombay = new ville(6,1,18,12, 'images/Asie/Bombay.jpg', 'Bombay', 'Asie', 550);
let Hanoï = new ville(7,2,13,17, 'images/Asie/Hanoï.jpg', 'Hanoï', 'Asie', 475);
let HongKong = new ville(8,3,19,11, 'images/Asie/HongKong.jpg', 'Hong-Kong', 'Asie', 570);
let Pékin = new ville(9,4,17,13, 'images/Asie/Pékin.jpg', 'Pékin', 'Asie', 530);
let Tokyo = new ville(10,5,20,10, 'images/Asie/Tokyo.jpg', 'Tokyo', 'Asie', 600);

let Cancun = new ville(11,0,11,19, 'images/AmériqueN/Cancun.jpg', 'Cancun', 'AmeriqueN', 450);
let LosAngeles = new ville(12,1,21,9, 'images/AmériqueN/LosAngeles.jpg', 'Los Angeles', 'AmeriqueN', 700);
let Miami = new ville(13,2,23,7, 'images/AmériqueN/Miami.jpg', 'Miami', 'AmeriqueN', 750);
let Montreal = new ville(14,3,16,14, 'images/AmériqueN/Montreal.jpg', 'Montreal', 'AmeriqueN', 500);
let NewYork = new ville(15,4,22,8, 'images/AmériqueN/NewYork.jpeg', 'New York', 'AmeriqueN', 700);

let BuenosAires = new ville(16,0,12,18, 'images/AmériqueS/BuenosAires.jpg', 'Buenos-Aires', 'AmeriqueS', 470);
let LacTiticaca = new ville(17,1,1,29, 'images/AmériqueS/LacTiticaca.jpg', 'Lac Titicaca', 'AmeriqueS', 300);
let Lima = new ville(18,2,3,27, 'images/AmériqueS/Lima.jpg', 'Lima', 'AmeriqueS', 350);
let Rio = new ville(19,3,2,28, 'images/AmériqueS/Rio.jpeg', 'Rio de Janeiro', 'AmeriqueS', 320);

let CapeTown = new ville(20,0,4,26, 'images/Afrique/CapeTown.jpg', 'Cape Town', 'Afrique', 360);
let Casablanca = new ville(21,1,10,20, 'images/Afrique/Casablanca.jpeg', 'Casablanca', 'Afrique', 450);
let Dubai = new ville(22,2,28,2, 'images/Afrique/Dubai.jpg', 'Dubaï', 'Afrique', 900);
let LeCaire = new ville(23,3,14,16, 'images/Afrique/LeCaire.jpg', 'Le Caire', 'Afrique', 480);
let Marrakesh = new ville(24,4,9,21, 'images/Afrique/Marrakesh.jpg', 'Marrakesh', 'Afrique', 430);

let Auckland = new ville(25,0,24,6, 'images/IlesP/Auckland.jpg', 'Auckland', 'IlesP', 820);
let Caraibes = new ville(26,1,29,1, 'images/IlesP/Caraibes.jpg', 'Caraïbes', 'IlesP', 920);
let Hawai = new ville(27,2,25,5, 'images/IlesP/Hawai.jpg', 'Hawaï', 'IlesP', 850);
let Seychelles = new ville(28,3,26,4, 'images/IlesP/Seychelles.jpg', 'Seychelles', 'IlesP', 870);
let Singapour = new ville(29,4,30,0, 'images/IlesP/Singapour.jpg', 'Singapour', 'IlesP', 950);
let Ubud = new ville(30,5,27,3, 'images/IlesP/Ubud.jpg', 'Ubud', 'IlesP', 880);

let PrixCroissant =[Stockholm, LacTiticaca, Rio, Lima, CapeTown, Rome, Barcelone, Londres, Paris, Marrakesh, Casablanca, Cancun, BuenosAires, Hanoï, LeCaire, Bangkok, Montreal, Pékin, Bombay, HongKong, Tokyo, LosAngeles, NewYork, Miami, Auckland, Hawai, Seychelles, Ubud, Dubai, Caraibes, Singapour];

let PrixDécroissant =[Singapour, Caraibes, Dubai, Ubud, Seychelles, Hawai, Auckland, Miami, NewYork, LosAngeles, Tokyo, HongKong, Bombay, Pékin, Montreal, Bangkok, LeCaire, Hanoï, BuenosAires, Cancun, Casablanca, Marrakesh, Paris, Londres, Barcelone, Rome, CapeTown, Lima, Rio, LacTiticaca, Stockholm,];

let LstContinent = [Europe,Asie,AmeriqueN,AmeriqueS,Afrique,IlesP];

let LstEurope = [Paris,Barcelone,Londres,Rome,Stockholm];
let LstAsie = [Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo];
let LstAmeriqueN = [Cancun, LosAngeles, Miami,Montreal,NewYork];
let LstAmeriqueS = [BuenosAires,LacTiticaca,Lima,Rio];
let LstAfrique = [CapeTown,Casablanca,Dubai,LeCaire,Marrakesh];
let LstIlesP = [Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

let LstVille = [Paris,Barcelone,Londres,Rome,Stockholm,Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo,Cancun, LosAngeles, Miami,Montreal,NewYork,BuenosAires,LacTiticaca,Lima,Rio,CapeTown,Casablanca,Dubai,LeCaire,Marrakesh,Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

for (var i of LstVille){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
    .then(res => res.json())
    .then(data => {
        var temp = data.main.temp;
        overlay[i].innerHTML = i.name +'<br>'+ i.temp;
    })
}

afficheimg();
function afficheimg() {
    let link = ''
    var tri = document.getElementById('tri');

    if (tri.value == '1'){
        for (var i of LstContinent) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +','+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '2') {
        for (var i of PrixCroissant) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_croissant +','+ i.id_croissant +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'</div></div>';
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
            .then(res => res.json())
            .then(data => {
                var temp = data.main.temp;
                overlay[i].innerHTML = i.name +'<br>'+ temp;
            })
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '3') {
        for (var i of PrixDécroissant) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_décroissant +','+ i.id_décroissant +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'</div></div>';
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
            .then(res => res.json())
            .then(data => {
                var temp = data.main.temp;
                overlay[i].innerHTML = i.name +'<br>'+ temp;
            })
        }
           affichage.innerHTML += link;
    }

    else if (URL === 'https://qalf.github.io/DandF/html/Europe.html'){
        for (var i of LstEurope) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +','+ i.id +')" style=background-image:url("../'+ i.link +'") ><div class = "overlay">'+i.name+'</div></div>';
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
            .then(res => res.json())
            .then(data => {
                var temp = data.main.temp;
                overlay[i].innerHTML = i.name +'<br>'+ temp;
            })
        }
        affichage.innerHTML += link;
    }

    else if (URL === 'https://qalf.github.io/DandF/html/Asie.html'){
        for (var i of LstAsie) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +','+ i.id +')" style=background-image:url("../'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
            .then(res => res.json())
            .then(data => {
                var temp = data.main.temp;
                overlay[i].innerHTML = i.name +'<br>'+ temp;
            })
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/AmeriqueN.html'){
        for (var i of LstAmeriqueN) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +','+ i.id +')" style=background-image:url("../'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
            .then(res => res.json())
            .then(data => {
                var temp = data.main.temp;
                overlay[i].innerHTML = i.name +'<br>'+ temp;
            })
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/AmeriqueS.html'){
        for (var i of LstAmeriqueS) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +','+ i.id +')" style=background-image:url("../'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
            .then(res => res.json())
            .then(data => {
                var temp = data.main.temp;
                overlay[i].innerHTML = i.name +'<br>'+ temp;
            })
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/Afrique.html'){
        for (var i of LstAfrique) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +','+ i.id +')" style=background-image:url("../'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
            .then(res => res.json())
            .then(data => {
                var temp = data.main.temp;
                overlay[i].innerHTML = i.name +'<br>'+ temp;
            })
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/IlesP.html'){
        for (var i of LstIlesP) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +','+ i.id +')" style=background-image:url("../'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
            fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
            .then(res => res.json())
            .then(data => {
                var temp = data.main.temp;
                overlay[i].innerHTML = i.name +'<br>'+ temp;
            })
        }
        affichage.innerHTML += link;
    }

}

function infosimg(i,h) {
    
    image[i].style.width = "370px";
    image[i].style.height = "267px";
    image[i].style.marginTop = "0px";
    image[i].style.marginBottom = "0px";

    overlay[i].style.backgroundColor = "rgba(0,0,0,0.7)";
    overlay[i].style.color = "rgba(255, 255, 255,1)" ;
    overlay[i].style.height = "30%" ;

    image[i].setAttribute('onmouseout', 'delimg(' + i + ')');
    image[i].setAttribute('onclick', 'resa(' + h + ')');

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

function resa(h) {

    if (tri.value == '1'){
        var chemin = LstContinent[h].NomChemin;
        var lien = 'https://qalf.github.io/DandF/'+chemin;
        document.location.href = lien;
    
    }
    if (tri.value == '2'){
        var id = PrixCroissant[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        document.location.href = lien;
    }

    else if (tri.value == '3'){
        var id = PrixDécroissant[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        document.location.href = lien;
    }

    else if (tri.value == '4'){
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + h;
        document.location.href = lien;
    }
}
