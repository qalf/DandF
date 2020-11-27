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

let Europe = new continent(0, '../images/Continent/Europe.jpeg', 'Europe', 'Europe');
let Asie = new continent(1, '../images/Continent/Asie.jpeg', 'Asie', 'Asie');
let AmériqueN = new continent(2, '../images/Continent/AmériqueN.jpg', 'AmériqueN', 'Amérique Du Nord');
let AmériqueS = new continent(3, '../images/Continent/AmériqueS.jpeg', 'AmériqueS', 'Amérique du Sud');
let Afrique = new continent(4, '../images/Continent/Afrique.jpeg', 'Afrique', 'Afrique');
let IlesP = new continent(5, '../images/Continent/IlesP.jpeg', 'IlesP', 'Iles Paradisiaques');

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

let Bankok = new ville(0, '../images/Asie/Bankok.jpg', 'Bankok', 'Asie');
let Bombay = new ville(1, '../images/Asie/Bombay.jpg', 'Bombay', 'Asie');
let Hanoï = new ville(2, '../images/Asie/Hanoï.jpg', 'Hanoï', 'Asie');
let HongKong = new ville(3, '../images/Asie/HongKong.jpg', 'Hong-Kong', 'Asie');
let Pékin = new ville(4, '../images/Asie/Pékin.jpg', 'Pékin', 'Asie');
let Tokyo = new ville(5, '../images/Asie/Tokyo.jpg', 'Tokyo', 'Asie');


let LstContinent = [Europe, Asie,AmériqueN,AmériqueS,Afrique,IlesP];
let LstEurope = [Paris,Barcelone,Londres,Rome,Stockholm];
let LstAsie =[Bankok,Bombay,Hanoï,HongKong,Pékin,Tokyo]


afficheimg();
function afficheimg() {
    let link = ''
    if (URL === 'file:///D:/CPE%20Ecole/Agence%20de%20voyage/Agence-de-voyage/Agence%20Voyage/html/R%C3%A9servation.html'){
        for (let i of LstContinent) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }

    if (URL === 'file:///D:/CPE%20Ecole/Agence%20de%20voyage/Agence-de-voyage/Agence%20Voyage/html/Europe.html'){
        for (let i of LstEurope) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }

    if (URL === 'file:///D:/CPE%20Ecole/Agence%20de%20voyage/Agence-de-voyage/Agence%20Voyage/html/Asie.html'){
        for (let i of LstAsie) {
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
    if (URL === 'file:///D:/CPE%20Ecole/Agence%20de%20voyage/Agence-de-voyage/Agence%20Voyage/html/R%C3%A9servation.html') {
        var chemin = LstContinent[i].NomChemin;
        var lien = chemin+'.html';
        document.location.href = lien;
    }

    if (URL === 'file:///D:/CPE%20Ecole/Agence%20de%20voyage/Agence-de-voyage/Agence%20Voyage/html/Europe.html') {
        var lien = 'Résa.html';
        document.location.href = lien;
    }
}
