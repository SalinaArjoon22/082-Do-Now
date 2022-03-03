$(".weather-button").click(function() {
    let weather = $(".weather").val();
    if (weather === "rainy"){
		$(".weather").text("Bring an umbrella");
		$(".weather").text("color","green");
    } else {
        $(".weather").text("Enjoy the sun!");
		$(".weather").text("color","red");
    }
    
    
});