/*This is my script for the open weather API*/

var theButton = document.getElementById("myButton");

theButton.addEventListener("click", getWeather, false);

function getWeather() {
    
    var userCity = document.getElementById("theCity").value;
    
    var theAPICall = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + userCity + "&units=metric&APPID=872bd99172b3ab37051f6e68595451c8&cnt=7";
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", theAPICall, true);
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            var weatherImage = "http://openweathermap.org/img/w/" + myData.list[0].weather[0].icon + ".png";
            
            document.getElementById("imageToday").src = weatherImage;
            
            document.getElementById("highToday").innerHTML = myData.list[0].temp.max;
            
            document.getElementById("lowToday").innerHTML = myData.list[0].temp.min;
            
            document.getElementById("dayDescription").innerHTML = myData.list[0].weather[0].description;
            
            /*This is the code for the 3 day forecast*/
            
            /*This is the code for the 3 day forecast*/
            
            var D0 = new Date (myData.list[0].dt *1000);
            //console.log(D0);
            var D1 = new Date (myData.list[1].dt *1000);
            //console.log(D1);
            var D2 = new Date (myData.list[2].dt *1000);
            //console.log(D2);
            var D3 = new Date (myData.list[3].dt *1000);
            //console.log(D3);
            var D4 = new Date (myData.list[4].dt *1000);
            //console.log(D4);
            var D5 = new Date (myData.list[5].dt *1000);
            //console.log(D5);
            var D6 = new Date (myData.list[6].dt *1000);
            //console.log(D6);

            var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
            
            //Day 1
            document.getElementById('r1c1').innerHTML= days[D1.getDay()];

            var weatherImage = "http://openweathermap.org/img/w/"+myData.list[1].weather[0].icon+".png";
            document.getElementById('r1c2').src = weatherImage;

            document.getElementById('r1c3').innerHTML= myData.list[1].temp.max+ "&deg;C - ";

            document.getElementById('r1c4').innerHTML= myData.list[1].temp.min+ "&deg;C";

            //Day 2
            document.getElementById('r2c1').innerHTML= days[D2.getDay()];

            var weatherImage = "http://openweathermap.org/img/w/"+myData.list[2].weather[0].icon+".png";
            document.getElementById('r2c2').src = weatherImage;

            document.getElementById('r2c3').innerHTML= myData.list[2].temp.max+ "&deg;C - ";

            document.getElementById('r2c4').innerHTML= myData.list[2].temp.min+ "&deg;C";


            //Day 3
            document.getElementById('r3c1').innerHTML= days[D3.getDay()];

            var weatherImage = "http://openweathermap.org/img/w/"+myData.list[3].weather[0].icon+".png";
            document.getElementById('r3c2').src = weatherImage;

            document.getElementById('r3c3').innerHTML= myData.list[3].temp.max+ "&deg;C - ";

            document.getElementById('r3c4').innerHTML= myData.list[3].temp.min+ "&deg;C";
            
            console.log(myData);
            
        }
    }
    
    myRequest.send();
    
//    console.log(myRequest);
}