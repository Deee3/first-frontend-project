let storedUserSearch;
let inputBar = document.getElementById("searchbar");

let weatherObject = {
    "openWeatherApiKey": "02943913cd421080c67f631a0567d282",      
    }

$(`#submitbutton`).click(function(){
    let userInput = $("#searchbar").val();
    $.get(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=imperial&appid=${weatherObject.openWeatherApiKey}`, (data) => {
        storedUserSearch = data;
        $(".city").text(storedUserSearch.city.name + ", "+ storedUserSearch.city.country );
        $(".temperature").text(storedUserSearch.list[0].main.temp + "°F");
        $(".description").text(storedUserSearch.list[0].weather[0].description);
        $(".humidity").text("Humidity: " + storedUserSearch.list[0].main.humidity + "%");
        $(".wind").text("Wind Speed: " + storedUserSearch.list[0].wind.speed +" Km/h");
        document.querySelector(".icon").src = "https://openweathermap.org/img/w/"+ storedUserSearch.list[0].weather[0].icon + ".png"; 
        inputBar.value = "";
    }) 
});

$('#searchbar').on('keypress', function(e){                                  // enter function in search bar
    if(e.key === 'Enter') {
        let userInput = $("#searchbar").val();
        $.get(`https://api.openweathermap.org/data/2.5/forecast?q=${userInput}&units=imperial&appid=${weatherObject.openWeatherApiKey}`, (data) => {
            storedUserSearch = data;
            $(".city").text(storedUserSearch.city.name + ", "+ storedUserSearch.city.country );
            $(".temperature").text(storedUserSearch.list[0].main.temp + "°F");
            $(".description").text(storedUserSearch.list[0].weather[0].description);
            $(".humidity").text("Humidity: " + storedUserSearch.list[0].main.humidity + "%");
            $(".wind").text("Wind Speed: " + storedUserSearch.list[0].wind.speed +" Km/h");
            document.querySelector(".icon").src = "https://openweathermap.org/img/w/"+ storedUserSearch.list[0].weather[0].icon + ".png"; 
            inputBar.value = "";
        }) 
    }
});
  


