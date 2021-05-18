var logIn = document.getElementById('logIn');
var logInContainer = document.getElementById('logInContainer');
var passW = document.getElementById('pwInput');
var pW = document.getElementById('pwEnter');
var resp = document.getElementById('response');
var i = 3;

var toggleMetrics = document.getElementById('indivMetrics');
var metrics = document.getElementById('displayMetrics');

var europeanSystem = true
var systems = document.getElementById('systems');

var C = true;
var sTemperature = document.getElementById('sTemperature');
var seTemperature = document.getElementById('seTemperature');
var temperature = document.getElementById('temperature');

var kPA = true;
var sPressure = document.getElementById('sPressure');
var sePressure = document.getElementById('sePressure');
var pressure = document.getElementById('pressure');

var km = true;
var kmh = true;
var distanceAmount = document.getElementById('distanceAmount');
var len = document.getElementById('len');

var marsContainer = document.getElementById('marsContainer');
var infoIcon = document.getElementById('infoIcon');
var marsInfo = document.getElementById('marsInfo');
var mars = document.getElementById('mars');
var marsInfoContainerMain = document.getElementById('marsInfoContainerMain');
var marsInfoContainer = document.getElementById('marsInfoContainer');
var infoBox = document.getElementById('infoBox');
var infoBackground = document.getElementById('marsInfoBackground');
var closeX = document.getElementById('closeX');

var dline = document.getElementById('distanceLineProgress');
var spaceship = document.getElementById('spaceship');

var convertButton = document.getElementById('earthMileConvert');
var marsMile = document.getElementById('marsMiles');

var contentC = document.getElementById('contentContainer');

var speed = document.getElementById('speed');
var distance = [9,8,7,6,5,4,3,2,1,0]
var kilometers = 1000;





// Log in


pW.onclick = function() {
    passW = document.getElementById('pwInput').value;

    if (passW == '') {
        alert('Please enter a password')
    }
    else {
        if (passW === 'I am not an Alien') {
            resp.innerHTML = 'Correct';
            contentC.style.display = 'block';
            logInContainer.style.display = 'none';
        }
        else {
            countFailure();
        }
    }
};


function countFailure(){
    resp.innerHTML = 'Wrong, try again. You have ' + i + ' tries left';
    i--;

    document.getElementById('pwInput').value = null;

    if(i <= -1) {
        logIn.style.display = 'none';
        alert('Too many wrong tries.');
    }
};





// Change measurements

toggleMetrics.onclick = function () {
    if (metrics.style.display === "block") {
        metrics.style.display = "none";
    }
    else {
        metrics.style.display = "block";
    }
};

systems.onclick = function() {
    if(europeanSystem) {
        changeToAmericanSystem();
    }
    else {
        changeToEuropeanSystem();
    }
};

temperature.onclick =  function () {
    if(C) {
        convertToF()
    }
    else {
        convertToC()
    }
};


pressure.onclick =  function () {
    if(kPA) {
        convertToPSI()
    }
    else {
        convertToKPA()
    }
};


len.onclick =  function () {
    if(km || kmh) {
        convertToMi();
        convertToMPH();
    }
    else {
        convertToKM();
        convertToKMH();
    }
};




// Conversions


function changeToAmericanSystem() {
    C = true;
    kPA = true;
    km = true;
    kmh = true;

    temperature.click();
    pressure.click();
    len.click();
    europeanSystem = !europeanSystem;
    systems.innerHTML = 'Change to <em>European</em> Measurement System';
};

function changeToEuropeanSystem() {
    temperature.click();
    pressure.click();
    len.click();
    europeanSystem = !europeanSystem;
    systems.innerHTML = 'Change to <em>American</em> Measurement System';
};



function convertToF() {
    var index = sTemperature.innerHTML;
    var index2 = seTemperature.innerHTML;

    index = ((index*(9/5))+32);
    index2 = ((index2*(9/5))+32);
    sTemperature.innerHTML = Math.round(index);
    seTemperature.innerHTML = Math.round(index2);
    C = !C;

    document.getElementById('sTemperatureMeasurement').innerHTML = '°F';
    document.getElementById('seTemperatureMeasurement').innerHTML = '°F';
    temperature.innerHTML = 'Change to °C';
};

function convertToC() {
    var index3 = sTemperature.innerHTML;
    var index4 = seTemperature.innerHTML;

    index3 = ((index3-32)*5/9);
    index4 = ((index4-32)*5/9);
    sTemperature.innerHTML = Math.round(index3);
    seTemperature.innerHTML = Math.round(index4);
    C = true;

    document.getElementById('sTemperatureMeasurement').innerHTML = '°C';
    document.getElementById('seTemperatureMeasurement').innerHTML = '°C';
    temperature.innerHTML = 'Change to °F';
};




function convertToPSI() {
    var index = sPressure.innerHTML;
    var index2 = sePressure.innerHTML;

    index = index/6.895;
    index2 = index2/6.895;
    sPressure.innerHTML = Math.round(index);
    sePressure.innerHTML = Math.round(index2);
    kPA = !kPA;

    document.getElementById('sPressureMeasurement').innerHTML = 'psi';
    document.getElementById('sePressureMeasurement').innerHTML = 'psi';
    pressure.innerHTML = 'Change to kPA';
};

function convertToKPA() {
    var index3 = sPressure.innerHTML;
    var index4 = sePressure.innerHTML;

    index3 = index3*6.895;
    index4 = index4*6.895;
    sPressure.innerHTML = Math.round(index3);
    sePressure.innerHTML = Math.round(index4);
    kPA = true;

    document.getElementById('sPressureMeasurement').innerHTML = 'kPA';
    document.getElementById('sePressureMeasurement').innerHTML = 'kPA';
    pressure.innerHTML = 'Change to psi';
};





function convertToMi() {
    var index = distanceAmount.innerHTML;

    index = index/1.609;
    distanceAmount.innerHTML = Math.round(index);
    km = !km;

    document.getElementById('diMeasurement').innerHTML = 'mi';
    len.innerHTML = 'Change to km';
};

function convertToKM() {
    var index = distanceAmount.innerHTML;

    index = index*1.609;
    distanceAmount.innerHTML = Math.round(index);
    km = !km;

    document.getElementById('diMeasurement').innerHTML = 'km';
    len.innerHTML = 'Change to mi';
};




function convertToMPH() {
    var index = speed.innerHTML;

    index = index/1.609;
    speed.innerHTML = Math.round(index);
    kmh = !kmh;

    document.getElementById('speedMeasurement').innerHTML = 'mph';
    len.innerHTML = 'Change to km';
};

function convertToKMH() {
    var index = speed.innerHTML;

    index = index*1.609;
    speed.innerHTML = Math.round(index);
    kmh = !kmh;

    document.getElementById('speedMeasurement').innerHTML = 'km/h';
    len.innerHTML = 'Change to mi';
};






// Mars hover interaction

marsContainer.onmouseleave = function() {
    marsInfo.style.display = 'none';
    infoIcon.style.display = 'block';
};

mars.onmouseover = function() {
    marsInfo.style.display = 'block';
    infoIcon.style.display = 'none';
};

marsInfo.onclick = function() {
    marsInfoContainerMain.style.display = 'block';
};

infoBackground.onclick = function() {
    marsInfoContainerMain.style.display = 'none';
}

closeX.onclick = function() {
    marsInfoContainerMain.style.display = 'none';
}



// Mars miles conversion

convertButton.onclick = function() {
    var earthMile = document.getElementById('earthMile').value;

    if (earthMile == '') {
        alert('Please enter a valid number')
    }
    else {
        mmi = earthMile*2;
        marsMile.innerHTML = earthMile + 'mi equal(s) ' + mmi +'mmi';
    }
}








// These are functions in which I tried to implement for-loops in my interface.
// The first function was intended to display the remaining distance as a countdown.
// However, I realised that the execution of the for-loop is simply too quick, in order to function as a display.
// You can activate the function, but it will immediately jump to 0.


// -------------------------------
function repeatCountdown() {
    for(z = 0; z < 1000; z++) {
        countdown();
    }
};

function countdown() {
    kilometers -= 1;
    distanceAmount.innerHTML = kilometers;
    console.log(kilometers);
};

// repeatCountdown();

// -------------------------------





// This function actually works, but similarly, it is waay to quick. I wanted to include a gimmick, where when you click on the
// spaceship it would activate a 'russian roulette' which would make the spaceship eventually disappar (by chance). 
// But as mentioned, the operation is just too fast.
// Therefore, the ship just disappears, which might be just confusing and the reason why I disabled the function by default.


// -------------------------------

// spaceship.onclick = function() {
//     shipExplosion();
// }


function shipExplosion() {
    var explosion = false;
    var w;

    for(r = 0; r < 500; r++) {
        w = Math.random(2000);
        console.log(w);

        if(w === 50) {
            explosion = true;
            break;
        }
    }

    if(explosion = true) {
        spaceship.style.display = 'none';
        console.log(explosion);
        console.log('Boom');
    }
};
// -------------------------------





