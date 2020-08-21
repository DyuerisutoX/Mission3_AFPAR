/*
https://api.openweathermap.org/data/2.5/weather?lat=-20.9628&lon=55.6501&appid=65372f0a54dd75934920a83319e364a6&lang=fr&units=metric  Saint-André
*/
$( document ).ready(function() {
    var latitude;
    var longitude;
    var url;
    var x = $("#demo");
    $("#button").hide();
    if (navigator.geolocation) {
        /* function showPosition(position) {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
        } */
        navigator.geolocation.getCurrentPosition(function (position) {
            latitude = position.coords.latitude
            longitude = position.coords.longitude
            console.log( latitude, longitude)
        });
    } else {
        x.html("Geolocalisation désactivé")
        $("#button").show()
    }
    $("#button").click(function() {
            url = "https://api.openweathermap.org/data/2.5/weather?lat="+ latitude + "&lon="+ longitude + "&appid=65372f0a54dd75934920a83319e364a6&lang=fr&units=metric"
            $.get(url, function(data) {
                x.html("La temperature de " + data.name + " est de "+ data.main.temp +"°C, c'est un temp " + data.weather[0].description)
                var imgUrl = "http://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png"
                $( "#img").attr("src", imgUrl)
            }).fail(function() {
                x.html("Méteo indisponible pour le moment")
            })
/*             $.ajax({
                url : url,
                type : "GET",
                dataType : "json",
                success : function (data) {
                    x.html("La temperature de " + data.name + " est de "+ data.main.temp +"°C, c'est un temp " + data.weather[0].description)
                    var imgUrl = "http://openweathermap.org/img/wn/"+ data.weather[0].icon+"@2x.png"
                    $( "#img").attr("src", imgUrl)
                },
                error : function () {
                    x.html("Méteo indisponible pour le moment")
                }
            }) */
    })
})
