let LstVille = [Paris,Barcelone,Londres,Rome,Stockholm,Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo,Cancun, LosAngeles, Miami,Montreal,NewYork,BuenosAires,LacTiticaca,Lima,Rio,CapeTown,Casablanca,Dubai,LeCaire,Marrakesh,Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

let sejour_id = new URLSearchParams(window.location.search).get("id");


CalculPrixBase();
function CalculPrixBase() {
  let PrixBase = LstVille[sejour_id].prix;
  console.log(PrixBase);
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
    var prixEnfants = 0.4*prixJourneeAdultes*dureeSejour()*document.getElementById("nb_enfants").value;
    return prixEnfants
  }
  
  function prixAdultes() {
    var prixAdultes = dureeSejour()*prixJourneeAdultes*document.getElementById("nb_adultes").value;
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
