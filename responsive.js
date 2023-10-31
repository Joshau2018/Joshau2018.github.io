function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "inNav") {
        x.className += " responsive";
    } else {
        x.className = "inNav";
    }
}