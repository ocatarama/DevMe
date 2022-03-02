function mobileToggle(x) {
    x.classList.toggle("change");

    navB = document.getElementById("n-btns");

    navB.style.display = navB.style.display == "block" ? "none" : "block"; 
  }