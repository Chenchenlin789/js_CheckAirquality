//Bei einer Qualität kleiner-gleich 50 soll das Ergebnis:
// Level of health concern: Good 
// Level of health effect: Little or no risk

// Bei einer Qualität größer als 50 und kleiner-gleich 100 soll das Ergebnis:
// Level of health concern: Moderate 
// Level of health effect: Acceptable quality

// Bei einer Qualität größer als 100 und kleiner-gleich 150 soll das Ergebnis: 
// Level of health concern: Unhealthy for sensitive groups 
// Level of health effect: Generable publics not likely affected

console.log("test")

function checkAirQuality() {
    let quality = document.getElementById("airQuality").value
    document.getElementById("label").innerHTML = "AQI: " + quality
    
    if (quality <= 50) {
        document.getElementById("concern").innerHTML="Level of health concern: Good" 
        document.getElementById("effect").innerHTML="Level of health concern: little or no risk"
        document.body.style.backgroundColor="green"
    } else if (quality> 50 && quality <=100 )
    {
        document.getElementById("concern").innerHTML="Level of health concern: moderate" 
        document.getElementById("effect").innerHTML="Level of health concern: Acceptable quality"
        document.body.style.backgroundColor="yellow"
    }
    else if (quality> 10 && quality <=150)
    {
        document.getElementById("concern").innerHTML="Level of health concern: unhealthy for sensitive groups" 
        document.getElementById("effect").innerHTML="Level of health concern: Generable publics not likely affected"
        document.body.style.backgroundColor="orange"
    }
} 