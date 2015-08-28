console.log("start");
var jsonUrl = "http://api.openweathermap.org/data/2.5/weather?q=Vienna&APPID=a8b7e0065d522fe805c65f640d711317";
console.log(jsonUrl);
$.get(jsonUrl, function(weather){

  console.log(weather.main);
  var city = weather.name;
  console.log(city);
  var degree = Math.floor((weather.main.temp - 273.15));
  console.log(degree);
  var description = weather.weather[0].description;
console.log(description);

$('#city').append(city+", ");
$('#temp').append(degree+" &#176;");
$('#description').append(description+"     - ");
$('#icon')
       .append("<img src='http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png'>");
});
