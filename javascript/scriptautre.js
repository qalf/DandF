let URL = window.location.href;

class ville{
    constructor(id,name){
        this.id = id;
        this.name = name;

    }
}

let Paris = new ville(0, 'Paris');
let Barcelone = new ville(1, 'Barcelone');
let Londres = new ville(2, 'Londres');
let Rome = new ville(3, 'Rome');
let Stockholm = new ville(4, 'Stockholm');

let Bangkok = new ville(5, 'Bangkok');
let Bombay = new ville(6, 'Bombay');
let Hanoï = new ville(7, 'Hanoï');
let HongKong = new ville(8, 'Hong Kong');
let Pékin = new ville(9, 'Pékin');
let Tokyo = new ville(10, 'Tokyo');

let Cancun = new ville(11, 'Cancun');
let LosAngeles = new ville(12, 'Los Angeles');
let Miami = new ville(13, 'Miami');
let Montreal = new ville(14, 'Montreal');
let NewYork = new ville(15, 'New York');

let BuenosAires = new ville(16, 'Buenos Aires');
let LacTiticaca = new ville(17, 'Lac Titicaca');
let Lima = new ville(18, 'Lima');
let Rio = new ville(19, 'Rio de Janeiro');

let CapeTown = new ville(20, 'Cape Town');
let Casablanca = new ville(21, 'Casablanca');
let Dubai = new ville(22, 'Dubaï');
let LeCaire = new ville(23, 'Le Caire');
let Marrakesh = new ville(24, 'Marrakesh');

let Auckland = new ville(25, 'Auckland');
let Caraibes = new ville(26, 'Caraïbes');
let Hawai = new ville(27, 'Hawaï');
let Seychelles = new ville(28, 'Seychelles');
let Singapour = new ville(29, 'Singapour');
let Ubud = new ville(30, 'Ubud');

let LstVille = [Paris,Barcelone,Londres,Rome,Stockholm,Bangkok,Bombay,Hanoï,HongKong,Pékin,Tokyo,Cancun, LosAngeles, Miami,Montreal,NewYork,BuenosAires,LacTiticaca,Lima,Rio,CapeTown,Casablanca,Dubai,LeCaire,Marrakesh,Auckland,Caraibes,Hawai,Seychelles,Singapour,Ubud];

function search(){
    for (var i of LstVille){
        if (barre.value == i.name){
            window.location.assign('https://qalf.github.io/DandF/index.html');
            return
        }
    }
    alert("La destination n'est pas encore dans notre catalogue");
}

barre.addEventListener('keyup',function(event){
    if (event.keyCode === 13) {
        loupe.click();
    }
})