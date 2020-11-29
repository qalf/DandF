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
let AmériqueN = new continent(2, 'images/Continent/AmériqueN.jpg', 'html/AmeriqueN.html', 'Amérique Du Nord');
let AmériqueS = new continent(3, 'images/Continent/AmériqueS.jpeg', 'html/AmeriqueS.html', 'Amérique du Sud');
let Afrique = new continent(4, 'images/Continent/Afrique.jpeg', 'html/Afrique.html', 'Afrique');
let IlesP = new continent(5, 'images/Continent/IlesP.jpeg', 'html/IlesP.html', 'Iles Paradisiaques');

class ville{
    constructor(id,id_continent,link,name,continent,prix){
        this.id = id;
        this.id_continent = id_continent;
        this.link = link;
        this.name = name;
        this.continent = continent
        this.prix = prix;
    }
}

let Paris = new ville(0,0, '../images/Europe/Paris.jpg', 'Paris', 'Europe', 400);
let Barcelone = new ville(1,1, '../images/Europe/Barcelone.jpg', 'Barcelone', 'Europe', 370);
let Londres = new ville(2,2, '../images/Europe/Londres.jpg', 'Londres', 'Europe', 380);
let Rome = new ville(3,3, '../images/Europe/Rome.jpg', 'Rome', 'Europe', 360);
let Stockholm = new ville(4,4, '../images/Europe/Stockholm.jpg', 'Stockholm', 'Europe', 200);

let Bangkok = new ville(5,0, '../images/Asie/Bangkok.jpg', 'Bangkok', 'Asie', 500);
let Bombay = new ville(6,1, '../images/Asie/Bombay.jpg', 'Bombay', 'Asie', 550);
let Hanoï = new ville(7,2, '../images/Asie/Hanoï.jpg', 'Hanoï', 'Asie', 475);
let HongKong = new ville(8,3, '../images/Asie/HongKong.jpg', 'Hong-Kong', 'Asie', 570);
let Pékin = new ville(9,4, '../images/Asie/Pékin.jpg', 'Pékin', 'Asie', 530);
let Tokyo = new ville(10,5, '../images/Asie/Tokyo.jpg', 'Tokyo', 'Asie', 600);

let Cancun = new ville(11,0, '../images/AmériqueN/Cancun.jpg', 'Cancun', 'AmériqueN', 450);
let LosAngeles = new ville(12,1, '../images/AmériqueN/LosAngeles.jpg', 'Los Angeles', 'AmériqueN', 700);
let Miami = new ville(13,2, '../images/AmériqueN/Miami.jpg', 'Miami', 'AmériqueN', 750);
let Montreal = new ville(14,3, '../images/AmériqueN/Montreal.jpg', 'Montreal', 'AmériqueN', 500);
let NewYork = new ville(15,4, '../images/AmériqueN/NewYork.jpeg', 'New York', 'AmériqueN', 700);

let BuenosAires = new ville(16,0, '../images/AmériqueS/BuenosAires.jpg', 'Buenos-Aires', 'AmériqueS', 470);
let LacTiticaca = new ville(17,1, '../images/AmériqueS/LacTiticaca.jpg', 'Lac Titicaca', 'AmériqueS', 300);
let Lima = new ville(18,2, '../images/AmériqueS/Lima.jpg', 'Lima', 'AmériqueS', 350);
let Rio = new ville(19,3, '../images/AmériqueS/Rio.jpeg', 'Rio de Janeiro', 'AmériqueS', 320);

let CapeTown = new ville(20,0, '../images/Afrique/CapeTown.jpg', 'Cape Town', 'Afrique', 360);
let Casablanca = new ville(21,1, '../images/Afrique/Casablanca.jpeg', 'Casablanca', 'Afrique', 450);
let Dubai = new ville(22,2, '../images/Afrique/Dubai.jpg', 'Dubaï', 'Afrique', 900);
let LeCaire = new ville(23,3, '../images/Afrique/LeCaire.jpg', 'Le Caire', 'Afrique', 480);
let Marrakesh = new ville(24,4, '../images/Afrique/Marrakesh.jpg', 'Marrakesh', 'Afrique', 430);

let Auckland = new ville(25,0, '../images/IlesP/Auckland.jpg', 'Auckland', 'IlesP', 820);
let Caraibes = new ville(26,1, '../images/IlesP/Caraibes.jpg', 'Caraïbes', 'IlesP', 920);
let Hawai = new ville(27,2, '../images/IlesP/Hawai.jpg', 'Hawaï', 'IlesP', 850);
let Seychelles = new ville(28,3, '../images/IlesP/Seychelles.jpg', 'Seychelles', 'IlesP', 870);
let Singapour = new ville(29,4, '../images/IlesP/Singapour.jpg', 'Singapour', 'IlesP', 950);
let Ubud = new ville(30,5, '../images/IlesP/Ubud.jpg', 'Ubud', 'IlesP', 880);


let LstContinent = [Europe,Asie,AmériqueN,AmériqueS,Afrique,IlesP];

let LstEurope = [Paris,Barcelone,Londres,Rome,Stockholm];
let LstAsie = [Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo];
let LstAmériqueN = [Cancun, LosAngeles, Miami,Montreal,NewYork];
let LstAmériqueS = [BuenosAires,LacTiticaca,Lima,Rio];
let LstAfrique = [CapeTown,Casablanca,Dubai,LeCaire,Marrakesh];
let LstIlesP = [Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];


if (URL === 'https://qalf.github.io/DandF/html/Europe.html'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[0].innerHTML = Paris.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelone&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[1].innerHTML = Barcelone.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Londres&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[2].innerHTML = Londres.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rome&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[3].innerHTML = Rome.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[4].innerHTML = Stockholm.name +'<br>'+ Math.round(temp) +'°C';
    })
}

if (URL === 'https://qalf.github.io/DandF/html/Asie.html'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[0].innerHTML = Bangkok.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bombay&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[1].innerHTML = Bombay.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hanoï&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[2].innerHTML = Hanoï.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=HongKong&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[3].innerHTML = HongKong.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Pékin&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[4].innerHTML = Pékin.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[5].innerHTML = Tokyo.name +'<br>'+ Math.round(temp) +'°C';
    })
}

if (URL === 'https://qalf.github.io/DandF/html/AmeriqueN.html'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[0].innerHTML = Cancun.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[1].innerHTML = LosAngeles.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Miami&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[2].innerHTML = Miami.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[3].innerHTML = Montreal.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[4].innerHTML = NewYork.name +'<br>'+ Math.round(temp) +'°C';
    })
}

if (URL === 'https://qalf.github.io/DandF/html/AmeriqueS.html'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[0].innerHTML = BuenosAires.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Puno&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[1].innerHTML = LacTiticaca.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Lima&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[2].innerHTML = Lima.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rio de Janeiro&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[3].innerHTML = Rio.name +'<br>'+ Math.round(temp) +'°C';
    })

}

if (URL === 'https://qalf.github.io/DandF/html/Afrique.html'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cape Town&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[0].innerHTML = CapeTown.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Casablanca&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[1].innerHTML = Casablanca.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[2].innerHTML = Dubai.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Le Caire&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[3].innerHTML = LeCaire.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Marrakesh&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[4].innerHTML = Marrakesh.name +'<br>'+ Math.round(temp) +'°C';
    })
}

if (URL === 'https://qalf.github.io/DandF/html/IlesP.html'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[0].innerHTML = Auckland.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bridgetown&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[1].innerHTML = Caraibes.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hawai&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[2].innerHTML = Hawai.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Seychelles&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[3].innerHTML = Seychelles.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Singapour&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[4].innerHTML = Singapour.name +'<br>'+ Math.round(temp) +'°C';
    })

    fetch('https://api.openweathermap.org/data/2.5/weather?q=Ubud&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[5].innerHTML = Ubud.name +'<br>'+ Math.round(temp) +'°C';
    })
}

afficheimg();

function afficheimg() {
    let link = ''
    if (URL === 'https://qalf.github.io/DandF/html/Europe.html'){
        for (var i of LstEurope) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay"></div></div>';
        }
        affichage.innerHTML += link;
    }

    else if (URL === 'https://qalf.github.io/DandF/html/Asie.html'){
        for (var i of LstAsie) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/AmeriqueN.html'){
        for (var i of LstAmériqueN) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/AmeriqueS.html'){
        for (var i of LstAmériqueS) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/Afrique.html'){
        for (var i of LstAfrique) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }
    else if (URL === 'https://qalf.github.io/DandF/html/IlesP.html'){
        for (var i of LstIlesP) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
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
