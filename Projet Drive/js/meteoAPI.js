/* https://api.openweathermap.org/data/2.5/weather?lat=-20.9628&lon=55.6501&appid=65372f0a54dd75934920a83319e364a6&lang=fr&units=metric  Saint-André */

/* 
M : Execute la fonction au moment ou le document est pret
O : /
I : /
*/
$( document ).ready(function() {
    if (navigator.geolocation) {
        /* 
        M : recupere la longitude et le latitude de la position de l'utilisateur
        O : /
        I : position
        */
        navigator.geolocation.getCurrentPosition(function (position) {
            var latitude = position.coords.latitude
            var longitude = position.coords.longitude
            var url = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=65372f0a54dd75934920a83319e364a6&lang=fr&units=metric`
            $.get(url, function(data) {
                $("#meteo").html(`La température de ${data.name} est de ${data.main.temp}°C, c'est un temp ${data.weather[0].description}`)
                var imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                $( "#imgMeteo").attr("src", imgUrl)
            }).fail(function() {
                $("#meteo").html("Méteo indisponible pour le moment")
            });
/*             $.ajax({
                url : url,
                type : "GET",
                dataType : "json",
                success : function (data) {
                    $("#meteo").html(`La temperature de ${data.name} est de ${data.main.temp}°C, c'est un temp ${data.weather[0].description}`)
                    var imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` 
                    $( "#img").attr("src", imgUrl)
                },
                error : function () {
                    $("#meteo").html("Méteo indisponible pour le moment")
                }
            }) */
        })
    } else {
        $("#meteo").html("Geolocalisation désactivé")   
    }
})


