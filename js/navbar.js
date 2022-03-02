function mobileToggle(x) {
    x.classList.toggle("change");

    navB = document.getElementById("n-btns");

    navB.style.display = navB.style.display == "block" ? "none" : "block"; 
}

addEventListener("resize", function() {
    navB = document.getElementById("n-btns");
    x = document.getElementById("menuB");
    if(this.screen.width > 650)
      navB.style.display = "none";
    else
    {
      if(x.classList.contains("change"))
        navB.style.display = "block";
    }
});