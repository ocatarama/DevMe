function mobileToggle(x) {
    x.classList.toggle("change");

    navB = document.getElementById("n-btn");

    navB.style.display = navB.style.display == "block" ? "none" : "block"; 
  }