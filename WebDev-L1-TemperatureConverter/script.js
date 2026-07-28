function convertTemperature() {

    let temp = parseFloat(document.getElementById("temp").value);
    let unit = document.getElementById("unit").value;

    let celsius, fahrenheit, kelvin;

    document.getElementById("error").innerHTML = "";

    if (isNaN(temp)) {
        document.getElementById("error").innerHTML = "Please enter a valid temperature.";
        document.getElementById("celsius").innerHTML = "";
        document.getElementById("fahrenheit").innerHTML = "";
        document.getElementById("kelvin").innerHTML = "";
        return;
    }

    if (unit === "celsius") {

        if (temp < -273.15) {
            document.getElementById("error").innerHTML =
                "Temperature cannot be below Absolute Zero (-273.15°C).";
            return;
        }

        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;

    }

    else if (unit === "fahrenheit") {

        if (temp < -459.67) {
            document.getElementById("error").innerHTML =
                "Temperature cannot be below Absolute Zero (-459.67°F).";
            return;
        }

        fahrenheit = temp;
        celsius = (temp - 32) * 5 / 9;
        kelvin = celsius + 273.15;

    }

    else {

        if (temp < 0) {
            document.getElementById("error").innerHTML =
                "Temperature cannot be below Absolute Zero (0 K).";
            return;
        }

        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

    }

    document.getElementById("celsius").innerHTML =
        "🌡 Celsius : " + celsius.toFixed(2) + " °C";

    document.getElementById("fahrenheit").innerHTML =
        "🌡 Fahrenheit : " + fahrenheit.toFixed(2) + " °F";

    document.getElementById("kelvin").innerHTML =
        "🌡 Kelvin : " + kelvin.toFixed(2) + " K";

}