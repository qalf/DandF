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






if (tri.value == '2'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[8].innerHTML = Paris.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelone&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[6].innerHTML = Barcelone.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Londres&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[7].innerHTML = Londres.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rome&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[5].innerHTML = Rome.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[0].innerHTML = Stockholm.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[15].innerHTML = Bangkok.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bombay&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[18].innerHTML = Bombay.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hanoï&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[13].innerHTML = Hanoï.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=HongKong&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[19].innerHTML = HongKong.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Pékin&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[17].innerHTML = Pékin.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[20].innerHTML = Tokyo.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[11].innerHTML = Cancun.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[21].innerHTML = LosAngeles.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Miami&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[23].innerHTML = Miami.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[16].innerHTML = Montreal.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[22].innerHTML = NewYork.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[12].innerHTML = BuenosAires.name +'<br>'+ Math.round(temp) +'°C';
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
            overlay[3].innerHTML = Lima.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rio de Janeiro&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[2].innerHTML = Rio.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cape Town&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[4].innerHTML = CapeTown.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Casablanca&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[10].innerHTML = Casablanca.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Dubai&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[28].innerHTML = Dubai.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Le Caire&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[14].innerHTML = LeCaire.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Marrakesh&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[9].innerHTML = Marrakesh.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[24].innerHTML = Auckland.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bridgetown&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[29].innerHTML = Caraibes.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hawai&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[25].innerHTML = Hawai.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Seychelles&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[26].innerHTML = Seychelles.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Singapour&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[30].innerHTML = Singapour.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Ubud&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[27].innerHTML = Ubud.name +'<br>'+ Math.round(temp) +'°C';
    })
}





if (tri.value == '3'){
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[22].innerHTML = Paris.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Barcelone&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[24].innerHTML = Barcelone.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Londres&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[23].innerHTML = Londres.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rome&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[25].innerHTML = Rome.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[30].innerHTML = Stockholm.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[15].innerHTML = Bangkok.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Bombay&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[12].innerHTML = Bombay.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Hanoï&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[17].innerHTML = Hanoï.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=HongKong&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[11].innerHTML = HongKong.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Pékin&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[13].innerHTML = Pékin.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Tokyo&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[10].innerHTML = Tokyo.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cancun&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[19].innerHTML = Cancun.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Los Angeles&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[9].innerHTML = LosAngeles.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Miami&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[7].innerHTML = Miami.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[14].innerHTML = Montreal.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[8].innerHTML = NewYork.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[18].innerHTML = BuenosAires.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Puno&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[29].innerHTML = LacTiticaca.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Lima&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[27].innerHTML = Lima.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Rio de Janeiro&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[28].innerHTML = Rio.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Cape Town&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[26].innerHTML = CapeTown.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Casablanca&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[20].innerHTML = Casablanca.name +'<br>'+ Math.round(temp) +'°C';
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
            overlay[16].innerHTML = LeCaire.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Marrakesh&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[21].innerHTML = Marrakesh.name +'<br>'+ Math.round(temp) +'°C';
    })


    fetch('https://api.openweathermap.org/data/2.5/weather?q=Auckland&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[6].innerHTML = Auckland.name +'<br>'+ Math.round(temp) +'°C';
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
            overlay[5].innerHTML = Hawai.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Seychelles&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[4].innerHTML = Seychelles.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Singapour&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[0].innerHTML = Singapour.name +'<br>'+ Math.round(temp) +'°C';
    })
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Ubud&units=metric&appid=aaed9a489f3afb122bc1ac8d09c79637')
        .then(res => res.json())
        .then(data => {
            var temp = data.main.temp;
            overlay[3].innerHTML = Ubud.name +'<br>'+ Math.round(temp) +'°C';
    })
}