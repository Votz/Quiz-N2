

if (performance.navigation.type == 1) {
    getWeather()
  }
var response = "";


async function getWeather(){
    var datetime = localStorage.getItem('time')
    if(datetime = null){
        getWeather()
    }
    var timespan = Math.abs(datetime - Date.now)
    if(timespan > 1800000){
        var resp =await fetchdata()
            localStorage.setItem('weather',JSON.stringify(resp));
            localStorage.setItem('time',Date.now)
            var datetime = localStorage.getItem('time')
            var timespan = datetime.value
            appendresponse(json.name,json.main.temp)
    }
}

async function fetchdata(){
    var url = "https://api.openweathermap.org/data/2.5/weather?q=tbilisi&appid=7980fa98f370b33a2acde08d054c54cd&units=metric"
        response = await fetch(url);
        var json = await response.json();
}

//Could not get this promise block to work,also responded data is converted and gives undefined instead of actual response value
//
// const promise = new Promise((resolve,reject) =>{
//     if(response.status == 200){
//         resolve(appendresponse(response.name,response.main.temp))
//     }
//     else{
//         reject(response.status = 404)
//     }
// })

// promise(reresponse.status == 200)
//     .then()
//     .catch(err => {
//         throwError
//     })


function appendresponse(cityname,temp){
    var div = document.getElementById('result');
div.innerHTML += '<p id="cityName">' + cityname + '</p>';
div.innerHTML += '<p id = "temp">' + temp + '</p>';
}
function throwError(){
    alert("No valid data")
}




//second task

function joke() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.chucknorris.io/jokes/random";
    xmlhttp.onreadystatechange = function() {
      if(this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
  function parseJson(json) {
    var fact = "<p>" + json["value"] + "</p>";
    document.getElementById("Jokes").innerHTML = fact;
  }

setInterval(
    function(){
        joke()
    },
    5000
)