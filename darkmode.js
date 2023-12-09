function darkModeToggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    
    var sections = document.getElementsByClassName("dark-mode-section");
    for (var i = 0; i < sections.length; i++) {
        sections[i].classList.toggle("dark-mode-section-active");
    }
}
