"use strict"
let teams = [
    { code: "CAZ", name: "Cruz Azul", plays: "Mexico City, Mexico" },
    { code: "BYN", name: "FC Bayern", plays: " Munich, Bavaria" },
    { code: "LAN", name: "AC Milan", plays: "Milan, Italy" },
    { code: "DOT", name: "Borussia Dortmund", plays: "Dortmund, North Rhine-Westphalia" },
];

window.onload = function () {
    // load the dropdown list
    addToSelect();
    const f1 = document.getElementById("f1");
    f1.onsubmit = displayParagraph;
};

function addToSelect() {

    const footballList = document.getElementById("footballList");
    let length = teams.length;
    for (let i = 0; i < length; i++) {
        // create the option element and set the text and
        // value at the same time
        let theOption = new Option(teams[i].name, teams[i].code);
        // append the option as a child of (inside) the
        // select element
        footballList.appendChild(theOption);
    }
}

function displayParagraph(e) {

    const footballList = document.getElementById("footballList");
    let option1 = document.getElementById("option1")
    let option2 = document.getElementById("option2")
    let option3 = document.getElementById("option3")
    let option4 = document.getElementById("option4")
    let option5 = document.getElementById("option5")
    let option6 = document.getElementById("option6")
    let option7 = document.getElementById("option7")
    let option8 = document.getElementById("option8")
    let userPicked = footballList.value;
    option1.style.display = "none";
    option2.style.display = "none";
    option3.style.display = "none";
    option4.style.display = "none";
    option5.style.display = "none";
    option6.style.display = "none";
    option7.style.display = "none";
    option8.style.display = "none";
    if (userPicked == "BAR") {
        option1.style.display = "block";
    } else if (userPicked == "RM") {
        option2.style.display = "block";
    } else if (userPicked == "MUFC") {
        option3.style.display = "block";
    } else if (userPicked == "ARS") {
        option4.style.display = "block";
    } else if (userPicked == "CAZ") {
        option5.style.display = "block";
    } else if (userPicked == "BYN") {
        option6.style.display = "block";
    } else if (userPicked == "LAN") {
        option7.style.display = "block";
    } else if (userPicked == "DOT") {
        option8.style.display = "block";
    } else {
        alert("Pick One")
    }
    e.preventDefault()
    return false;
}

/*
function onFormSubmit(event) {
    const footballList = document.getElementById("footballList")
    let selectedValue = footballList.value;
    console.log(selectedValue)
    event.preventDefault()
    return false;
}
document.getElementById("f1").addEventListener("submit", onFormSubmit) */