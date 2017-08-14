/* === This is my JS script for the JSON exercise ===*/


var mySurvey = document.getElementById("survey");

mySurvey.addEventListener("change", loadMyData, false);

var myManufacturer = document.getElementById("manufacturer");

myManufacturer.addEventListener("change", loadMyData, false);


function loadMyData() {
    
    var manufacturerStored = myManufacturer.options[myManufacturer.selectedIndex].value;
    
//    console.log(manufacturerStored);
    
    var myRequest = new XMLHttpRequest();
    
    myRequest.open("GET", "https://raw.githubusercontent.com/kaiwosnitza/JustITWeek2/master/JSON-and-AJAX--master/expensiveLuxuryCars.json", true);
    
    
    myRequest.onload = function() {
        
        if (myRequest.readyState == 4 && myRequest.status == 200) {
            
            var myData = JSON.parse(myRequest.responseText);
            
            document.getElementById("videoC").innerHTML = '<iframe width="auto" height="auto" src="' + myData.data[manufacturerStored].video + '"frameborder="0" allowfullscreen></iframe>';
            
            document.getElementById("imgC").innerHTML = '<img src="' + myData.data[manufacturerStored].img + '"width="auto" height="auto" alt="Car Image">';
     
    var cT = mySurvey.value;
            
    var chart = new CanvasJS.Chart("chartContainer", {
		theme: "theme2",//theme1
        backgroundColor: "transparent",
		title:{
			text: "Basic Column Chart - CanvasJS"              
		},
		animationEnabled: false,   // change to true
		data: [              
		{
			// Change type to "bar", "area", "spline", "pie",etc.
			type: cT,
			dataPoints: [
				{ label: "overall",  y: myData.data[manufacturerStored].quality[0].rating },
				{ label: "mechanical", y: myData.data[manufacturerStored].quality[1].rating },
				{ label: "powertrain", y: myData.data[manufacturerStored].quality[2].rating },
				{ label: "body",  y: myData.data[manufacturerStored].quality[3].rating },
				{ label: "interior",  y: myData.data[manufacturerStored].quality[4].rating },
                { label: "accessories",  y: myData.data[manufacturerStored].quality[5].rating }
			]
            
		}
		]
	});
	chart.render();
            
//            console.log(myData);
        }
    }
    
    myRequest.send();
    
//    console.log(myRequest);
}


