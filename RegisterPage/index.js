let birthYears = []; 

for (let year = 2023 - 60; year <= 2023 - 18; year++) {
    birthYears.push(year);
}

birthYears = birthYears.reverse()

let selectElement = document.getElementById("birth-year")
for (let i = 0; i < birthYears.length; i++) {
    let optionElement = document.createElement("option");
    optionElement.text = birthYears[i]; 
    optionElement.value = birthYears[i];
    selectElement.appendChild(optionElement); 
}

