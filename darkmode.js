function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function darkModeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
