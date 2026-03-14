
function analyzeHealth(){

let sleep = document.getElementById("sleep").value;
let calories = document.getElementById("calories").value;
let stress = document.getElementById("stress").value;
let temp = document.getElementById("temp").value;
let location = document.getElementById("location").value;

let disease = "";
let recommendation = "";

/* Disease detection rules */

if(temp > 38){
disease = "Possible Fever or Flu detected";
recommendation = "Consult a General Physician";
}

else if(sleep < 5 && stress === "High"){
disease = "Lifestyle pattern indicates risk of PCOS / PCOD";
recommendation = "Consult a Gynecologist or Endocrinologist";
}

else if(calories < 1200){
disease = "Low calorie intake detected – possible fatigue risk";
recommendation = "Consult a Nutrition Specialist";
}

else{
disease = "Health parameters appear normal";
recommendation = "Maintain healthy lifestyle habits";
}

/* Doctor recommendation */

let doctors = {

"Area A": "City Hospital – Dr. Sharma (General Physician)",
"Area B": "Women's Care Clinic – Dr. Mehta (Gynecologist)",
"Area C": "Metro Medical Center – Dr. Rao (Endocrinologist)"

};

let doctor = doctors[location] || "Nearest hospital recommended";

/* Display results */

document.getElementById("healthResult").innerHTML =
"Health Analysis: " + disease;

document.getElementById("doctorResult").innerHTML =
"Recommended Specialist: " + recommendation +
"<br>Nearby Doctor: " + doctor;

}
