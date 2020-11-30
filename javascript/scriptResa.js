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

let LstVille = [Paris,Barcelone,Londres,Rome,Stockholm,Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo,Cancun, LosAngeles, Miami,Montreal,NewYork,BuenosAires,LacTiticaca,Lima,Rio,CapeTown,Casablanca,Dubai,LeCaire,Marrakesh,Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

let sejour_id = new URLSearchParams(window.location.search).get("id");


CalculPrixBase();
function CalculPrixBase() {
  let PrixBase = LstVille[sejour_id].prix;
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
    var prixEnfants = 0.4*PrixBase*dureeSejour()*document.getElementById("nb_enfants").value;
    return prixEnfants
  }
  
  function prixAdultes() {
    var prixAdultes = dureeSejour()*PrixBase*document.getElementById("nb_adultes").value;
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
