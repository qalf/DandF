let affichage = document.getElementById("affichage");
let image = document.getElementsByClassName("image");
let overlay = document.getElementsByClassName("overlay");
var tri = document.getElementById('tri');
let barre = document.getElementById('barre');
let loupe = document.getElementById('loupe');
var prixmax = document.getElementById('prixmax');
let path = window.location.pathname;
let connexion = document.getElementById('connexion');
let mdp = document.getElementById('mdp');
let utilisateur = document.getElementById('nom-utilisateur');

let sejour_id = new URLSearchParams(window.location.search).get("id");


class continent {
    constructor(id, link, name) {
        this.id = id;
        this.link = link;
        this.name = name
    }
}

let Europe = new continent(0, 'images/Continent/Europe.jpeg', 'Europe');
let Asie = new continent(1, 'images/Continent/Asie.jpeg', 'Asie');
let AmeriqueN = new continent(2, 'images/Continent/AmériqueN.jpg', 'Amérique Du Nord');
let AmeriqueS = new continent(3, 'images/Continent/AmériqueS.jpeg', 'Amérique du Sud');
let Afrique = new continent(4, 'images/Continent/Afrique.jpeg', 'Afrique');
let IlesP = new continent(5, 'images/Continent/IlesP.jpeg', 'Iles Paradisiaques');

let LstContinent = [Europe,Asie,AmeriqueN,AmeriqueS,Afrique,IlesP];

class ville{
    constructor(id,id_continent,id_croissant,id_décroissant,link,name,continent,prix,name_api,temp){
        this.id = id;
        this.id_continent = id_continent;
        this.id_croissant = id_croissant;
        this.id_décroissant = id_décroissant;
        this.link = link;
        this.name = name;
        this.continent = continent
        this.prix = prix;
        this.name_api = name_api;
        this.temp = temp;
    }
}

let Paris = new ville(0,0,8,22, 'images/Europe/Paris.jpg', 'Paris', 'Europe', 400, 'Paris');
let Barcelone = new ville(1,1,6,24, 'images/Europe/Barcelone.jpg', 'Barcelone', 'Europe', 370, 'Barcelone');
let Londres = new ville(2,2,7,23, 'images/Europe/Londres.jpg', 'Londres', 'Europe', 380, 'Londres');
let Rome = new ville(3,3,5,25, 'images/Europe/Rome.jpg', 'Rome', 'Europe', 360, 'Rome');
let Stockholm = new ville(4,4,0,30, 'images/Europe/Stockholm.jpg', 'Stockholm', 'Europe', 200, 'Stockholm');

let Bangkok = new ville(5,0,15,15, 'images/Asie/Bangkok.jpg', 'Bangkok', 'Asie', 500, 'Bangkok');
let Bombay = new ville(6,1,18,12, 'images/Asie/Bombay.jpg', 'Bombay', 'Asie', 550, 'Bombay');
let Hanoï = new ville(7,2,13,17, 'images/Asie/Hanoï.jpg', 'Hanoï', 'Asie', 475, 'Hanoï');
let HongKong = new ville(8,3,19,11, 'images/Asie/HongKong.jpg', 'Hong Kong', 'Asie', 570, 'Hong Kong');
let Pékin = new ville(9,4,17,13, 'images/Asie/Pékin.jpg', 'Pékin', 'Asie', 530, 'Pékin');
let Tokyo = new ville(10,5,20,10, 'images/Asie/Tokyo.jpg', 'Tokyo', 'Asie', 600, 'Tokyo');

let Cancun = new ville(11,0,11,19, 'images/AmériqueN/Cancun.jpg', 'Cancun', 'AmeriqueN', 450, 'Cancun');
let LosAngeles = new ville(12,1,21,9, 'images/AmériqueN/LosAngeles.jpg', 'Los Angeles', 'AmeriqueN', 700, 'Los Angeles');
let Miami = new ville(13,2,23,7, 'images/AmériqueN/Miami.jpg', 'Miami', 'AmeriqueN', 750, 'Miami');
let Montreal = new ville(14,3,16,14, 'images/AmériqueN/Montreal.jpg', 'Montreal', 'AmeriqueN', 500, 'Montreal');
let NewYork = new ville(15,4,22,8, 'images/AmériqueN/NewYork.jpeg', 'New York', 'AmeriqueN', 700, 'New York');

let BuenosAires = new ville(16,0,12,18, 'images/AmériqueS/BuenosAires.jpg', 'Buenos Aires', 'AmeriqueS', 470, 'Buenos Aires');
let LacTiticaca = new ville(17,1,1,29, 'images/AmériqueS/LacTiticaca.jpg', 'Lac Titicaca', 'AmeriqueS', 300, 'Puno');
let Lima = new ville(18,2,3,27, 'images/AmériqueS/Lima.jpg', 'Lima', 'AmeriqueS', 350, 'Lima');
let Rio = new ville(19,3,2,28, 'images/AmériqueS/Rio.jpeg', 'Rio de Janeiro', 'AmeriqueS', 320, 'Rio de Janeiro');

let CapeTown = new ville(20,0,4,26, 'images/Afrique/CapeTown.jpg', 'Cape Town', 'Afrique', 360, 'Cape Town');
let Casablanca = new ville(21,1,10,20, 'images/Afrique/Casablanca.jpeg', 'Casablanca', 'Afrique', 450, 'Casablanca');
let Dubai = new ville(22,2,28,2, 'images/Afrique/Dubai.jpg', 'Dubaï', 'Afrique', 900, 'Dubaï');
let LeCaire = new ville(23,3,14,16, 'images/Afrique/LeCaire.jpg', 'Le Caire', 'Afrique', 480, 'Le Caire');
let Marrakesh = new ville(24,4,9,21, 'images/Afrique/Marrakesh.jpg', 'Marrakesh', 'Afrique', 430, 'Marrakesh');

let Auckland = new ville(25,0,24,6, 'images/IlesP/Auckland.jpg', 'Auckland', 'IlesP', 820, 'Auckland');
let Caraibes = new ville(26,1,29,1, 'images/IlesP/Caraibes.jpg', 'Caraïbes', 'IlesP', 920, 'Bridgetown');
let Hawai = new ville(27,2,25,5, 'images/IlesP/Hawai.jpg', 'Hawaï', 'IlesP', 850, 'Hawaï');
let Seychelles = new ville(28,3,26,4, 'images/IlesP/Seychelles.jpg', 'Seychelles', 'IlesP', 870, 'Seychelles');
let Singapour = new ville(29,4,30,0, 'images/IlesP/Singapour.jpg', 'Singapour', 'IlesP', 950, 'Singapour');
let Ubud = new ville(30,5,27,3, 'images/IlesP/Ubud.jpg', 'Ubud', 'IlesP', 880, 'Ubud');

let PrixCroissant =[Stockholm, LacTiticaca, Rio, Lima, CapeTown, Rome, Barcelone, Londres, Paris, Marrakesh, Casablanca, Cancun, BuenosAires, Hanoï, LeCaire, Bangkok, Montreal, Pékin, Bombay, HongKong, Tokyo, LosAngeles, NewYork, Miami, Auckland, Hawai, Seychelles, Ubud, Dubai, Caraibes, Singapour];
let PrixDécroissant =[Singapour, Caraibes, Dubai, Ubud, Seychelles, Hawai, Auckland, Miami, NewYork, LosAngeles, Tokyo, HongKong, Bombay, Pékin, Montreal, Bangkok, LeCaire, Hanoï, BuenosAires, Cancun, Casablanca, Marrakesh, Paris, Londres, Barcelone, Rome, CapeTown, Lima, Rio, LacTiticaca, Stockholm,];

let LstEurope = [Paris,Barcelone,Londres,Rome,Stockholm];
let LstAsie = [Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo];
let LstAmeriqueN = [Cancun, LosAngeles, Miami,Montreal,NewYork];
let LstAmeriqueS = [BuenosAires,LacTiticaca,Lima,Rio];
let LstAfrique = [CapeTown,Casablanca,Dubai,LeCaire,Marrakesh];
let LstIlesP = [Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

let LstVille = [Paris,Barcelone,Londres,Rome,Stockholm,Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo,Cancun, LosAngeles, Miami,Montreal,NewYork,BuenosAires,LacTiticaca,Lima,Rio,CapeTown,Casablanca,Dubai,LeCaire,Marrakesh,Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

function search(){
    if (path == '/DandF/index.html' || path == '/DandF/'){
        for (var i of LstVille){
            if (barre.value == i.name){
                tri.value = 10;
                return affichage.innerHTML = '<div class ="image" onmouseover="infosimg('+ 0 +','+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'<br>'+ i.temp +'°C</div></div>';
            }
        }
        alert("La destination n'est pas encore dans notre catalogue");
    }
    
    else {
        for (var i of LstVille){
            if (barre.value == i.name){
                window.location.assign('../index.html');
            }
        }
        alert("La destination n'est pas encore dans notre catalogue");
    }
}

barre.addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
        loupe.click();
    }
})


function afficheimg() {
    let link = ''
    affichage.innerHTML = '';

    if (tri.value == '1'){
        for (var i of LstContinent) {
            link += '<div class ="image" onmouseover="infosimg('+ i.id +','+ i.id +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'</div></div>';
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '2') {
        for (var i of PrixCroissant) {
            if (i.prix < prixmax.value){
                link += '<div class ="image" onmouseover="infosimg('+ i.id_croissant +','+ i.id_croissant +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'<br>'+ i.temp +'°C</div></div>';
            }
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '3') {
        var c = 0;
        for (var i of PrixDécroissant) {
            if (i.prix < prixmax.value){
                link += '<div class ="image" onmouseover="infosimg('+ c +','+ i.id_décroissant +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '4'){
        var c = 0;
        for (var i of LstEurope) {
            if (i.prix < prixmax.value){
                link += '<div class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+i.name+'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }

    else if (tri.value == '5'){
        var c = 0;
        for (var i of LstAsie) {
            if (i.prix < prixmax.value){
                link += '<div class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
    else if (tri.value == '6'){
        var c = 0;
        for (var i of LstAmeriqueN) {
            if (i.prix < prixmax.value){
                link += '<div class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
    else if (tri.value == '7'){
        var c = 0;
        for (var i of LstAmeriqueS) {
            if (i.prix < prixmax.value){
                link += '<div class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
    else if (tri.value == '8'){
        var c = 0;
        for (var i of LstAfrique) {
            if (i.prix < prixmax.value){
                link += '<div class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
        }
        affichage.innerHTML += link;
    }
    else if (tri.value == '9'){
        var c = 0;
        for (var i of LstIlesP) {
            if (i.prix < prixmax.value){
                link += '<div class ="image" onmouseover="infosimg('+ c +','+ i.id_continent +')" style=background-image:url("'+ i.link +'") ><div class = "overlay">'+ i.name +'<br>'+ i.temp +'°C</div></div>';
                c++;
            }
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
    image[i].style.marginTop = "10px";
    image[i].style.marginBottom = "20px";

    
    overlay[i].style.backgroundColor = "rgba(0,0,0,0)";
    overlay[i].style.height = "0%" ;
    overlay[i].style.color = "rgba(255, 255, 255,0)" ;
}

function resa(h) {
    if (tri.value == '1'){
        for (var i=0 ; i<6 ; i++){
            if (h === i){
                tri.value = i+4;
                afficheimg();
            }
        }
    }
    else if (tri.value == '2'){
        var id = PrixCroissant[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '3'){
        var id = PrixDécroissant[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '4'){
        var id = LstEurope[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '5'){
        var id = LstAsie[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '6'){
        var id = LstAmeriqueN[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '7'){
        var id = LstAmeriqueS[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '8'){
        var id = LstAfrique[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '9'){
        var id = LstIlesP[h].id;
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + id;
        window.location.assign(lien);
    }

    else if (tri.value == '10'){
        var lien = 'https://qalf.github.io/DandF/html/Résa.html?id=' + h;
        window.location.assign(lien);
    }
}

if (path == '/DandF/index.html' || path == '/DandF/'){
    for (let i of LstVille) {
    	fetch('https://api.openweathermap.org/data/2.5/weather?q='+i.name_api+'&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
    	.then(res => res.json())
    	.then(data => {
    		var temp = Math.round(data.main.temp);
            i.temp = temp;
            afficheimg();
        })
    }
}

if (path == '/DandF/html/Espace-perso.html'){
    connexion.addEventListener('submit', function(event){
        event.preventDefault();
        for (let i = 0 ; i < 3 ; i++){
            fetch('../compte.txt')
            	.then(res => res.json())
            	.then(data => {
                    if (data.members[i].name === utilisateur.value && data.members[i].mdp === mdp.value){
                        connect();
                        return
                    }
                })
        }
    })
}

function connect(){
        console.log("vous êtes connecté");
}

function CalculPrixBase() {
    var PrixBase = LstVille[sejour_id].prix;
    console.log(PrixBase);
    return PrixBase
}

function dureeSejour() {
    var datedepart = new Date(document.getElementById("date_depart").value);
    var dateretour = new Date(document.getElementById("date_retour").value);
    date = parseInt((dateretour - datedepart)/(86400000));
    return date
}

function DateVerif() {
    var datejour = new Date();
    var datedepart = new Date(document.getElementById("date_depart").value);
    var dateretour = new Date(document.getElementById("date_retour").value);
    if (dateretour < datedepart){
        date_retour.value = "";
        return 
    }
    if (datedepart < datejour){
        date_depart.value = "";
        return
    }
    if (dateretour < datejour){
        date_retour.value = "";
        return
    }
}

function prixEnfants(){
    var prixEnfants = 0.4*CalculPrixBase()*dureeSejour()*document.getElementById("nb_enfants").value;
    return prixEnfants
}

function prixAdultes() {
    var prixAdultes = dureeSejour()*CalculPrixBase()*document.getElementById("nb_adultes").value;
    return prixAdultes
}

function petitDej(){
    var checkbox = document.getElementById("dej_checkbox");
    var dej = 0;
    if (checkbox.checked == true){
        dej = 1.5*(document.getElementById("nb_adultes").value + document.getElementById("nb_enfants").value)*dureeSejour();
    }
    return dej
}

function prixTotal(){
    var prixTotal = prixEnfants() + prixAdultes() + petitDej();
    document.getElementsByClassName("prix_voyage")[0].innerHTML = prixTotal;
    return
}

function reset(){
    document.getElementById("resa").reset();
}

// function Commande(){
    // var Commande = LstVille[sejour_id].name;
    // console.log(Commande);
    // return Commande
//}

function LignePanier (qte, prix)
{
    this.qteArticle = qte;
    this.prixArticle = prix;
    this.ajouterQte = function(qte)
    {
        this.qteArticle += qte;
    }
    this.getPrixLigne = function()
    {
        var resultat = this.prixArticle * this.qteArticle;
        return resultat;
    }
    this.getCode = function() 
    {
        return this.codeArticle;
    }
}

function Panier()
{
    this.liste = [];
    this.ajouterArticle = function(code, qte, prix)
    { 
        var index = this.getArticle(code);
        if (index == -1) this.liste.push(new LignePanier(code, qte, prix));
        else this.liste[index].ajouterQte(qte);
    }
    this.getPrixPanier = function()
    {
        var total = 0;
        for(var i = 0 ; i < this.liste.length ; i++)
            total += this.liste[i].getPrixLigne();
        return total;
    }
    this.getArticle = function(code)
    {
        for(var i = 0 ; i <this.liste.length ; i++)
            if (code == this.liste[i].getCode()) return i;
        return -1;
    }
    this.supprimerArticle = function(code)
    {
        var index = this.getArticle(code);
        if (index > -1) this.liste.splice(index, 1);
    }

    function ajouter()
    {
        var code = parseInt(document.getElementById("id").value);
        var qte = parseInt(document.getElementById("qte").value);
        var prix = parseInt(document.getElementById("prix").value);
        var monPanier = new Panier();
        monPanier.ajouterArticle(code, qte, prix);
        var tableau = document.getElementById("tableau");
        var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
        if (longueurTab > 0)
        {
            for(var i = longueurTab ; i > 0  ; i--)
            {
                monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
                tableau.deleteRow(i);
            }
        }
        var longueur = monPanier.liste.length;
        for(var i = 0 ; i < longueur ; i++)
        {
            var ligne = monPanier.liste[i];
            var ligneTableau = tableau.insertRow(-1);
            var colonne1 = ligneTableau.insertCell(0);
            colonne1.innerHTML += ligne.getCode();
            var colonne2 = ligneTableau.insertCell(1);
            colonne2.innerHTML += ligne.qteArticle;
            var colonne3 = ligneTableau.insertCell(2);
            colonne3.innerHTML += ligne.prixArticle;
            var colonne4 = ligneTableau.insertCell(3);
            colonne4.innerHTML += ligne.getPrixLigne();
            var colonne5 = ligneTableau.insertCell(4);
            colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
        }
        document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
        document.getElementById("nbreLignes").innerHTML = longueur;
    }
    
    function supprimer(code)
    {
        var monPanier = new Panier();
        var tableau = document.getElementById("tableau");
        var longueurTab = parseInt(document.getElementById("nbreLignes").innerHTML);
        if (longueurTab > 0)
        {
            for(var i = longueurTab ; i > 0  ; i--)
            {
                monPanier.ajouterArticle(parseInt(tableau.rows[i].cells[0].innerHTML), parseInt(tableau.rows[i].cells[1].innerHTML), parseInt(tableau.rows[i].cells[2].innerHTML));
                tableau.deleteRow(i);
            }
        }
        monPanier.supprimerArticle(code);
        var longueur = monPanier.liste.length;
        for(var i = 0 ; i < longueur ; i++)
        {
            var ligne = monPanier.liste[i];
            var ligneTableau = tableau.insertRow(-1);
            var colonne1 = ligneTableau.insertCell(0);
            colonne1.innerHTML += ligne.getCode();
            var colonne2 = ligneTableau.insertCell(1);
            colonne2.innerHTML += ligne.qteArticle;
            var colonne3 = ligneTableau.insertCell(2);
            colonne3.innerHTML += ligne.prixArticle;
            var colonne4 = ligneTableau.insertCell(3);
            colonne4.innerHTML += ligne.getPrixLigne();
            var colonne5 = ligneTableau.insertCell(4);
            colonne5.innerHTML += "<button class=\"btn btn-primary\" type=\"submit\" onclick=\"supprimer(this.parentNode.parentNode.cells[0].innerHTML)\"><span class=\"glyphicon glyphicon-remove\"></span> Retirer</button>";
        }
        document.getElementById("prixTotal").innerHTML = monPanier.getPrixPanier();
        document.getElementById("nbreLignes").innerHTML = longueur;
    }