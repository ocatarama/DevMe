document.addEventListener('scroll', () => {
    var x = document.getElementById("howToTitle"); // titlul

    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var step3 = document.getElementById("step3");

    if (window.pageYOffset >= x.offsetTop - 100)
    {
        step1.style.transform = "translateX(0)";
    }
    if (window.pageYOffset >= x.offsetTop)
    {
        step2.style.transform = "translateX(0)";
    }
    if (window.pageYOffset >= x.offsetTop + 100)
    {
        step3.style.transform = "translateX(0)";
    }
});