/* ===================== WHAT IS DEVME TITLE ===================== */
var executed3 = 0;
document.addEventListener('scroll', () => {
    var x = document.getElementById("whatIs");
    var offset = 0.0;
 
    if((window.pageYOffset >= x.offsetTop - 600 ) && executed3 == 0)
    {
        executed3 = 1;
        setInterval(function(){
            offset += 0.1;  
            x.style.opacity = offset;
        }, 50);    

    }
}, false);

/* ===================== WHAT IS DEVME TEXT ===================== */
document.addEventListener('scroll', () => {
    var x = document.getElementById("whatAbout");
    var offset = 0.0;
 
    if((window.pageYOffset >= x.offsetTop - 600))
    {
        x.style.transform="translateX(0)";
    }
}, false);

/* ===================== WHERE, WHEN ===================== */
document.addEventListener('scroll', () => {
    var x = document.getElementById("iSigns");

    var where = document.getElementById("iWhere");
    var when = document.getElementById("iWhen");

    if(window.pageYOffset >= x.offsetTop - 600)
    {
        where.style.transform = "translateX(0)";
        when.style.transform = "translateX(0)";
    }
}, false);

/* ===================== INSTAGRAM IMAGES ===================== */
var executed1 = 0;
document.addEventListener('scroll', () => {
    var x = document.getElementById("imgs");
    var offset = 0.0;
 
    if((window.pageYOffset >= x.offsetTop - 400) && executed1 == 0)
    {
        executed1 = 1;
        setInterval(function(){
            offset += 0.1;  
            x.style.opacity = offset;
        }, 50);    

    }
}, false);

/* ===================== HOW TO HACK YOUR SUMMER ===================== */
var executed2 = 0;
document.addEventListener('scroll', () => {
    var x = document.getElementById("howto-title");
    var offset = 0.0;
 
    if((window.pageYOffset >= x.offsetTop - 400) && executed2 == 0)
    {
        executed2 = 1;
        setInterval(function(){
            offset += 0.1;  
            x.style.opacity = offset;
        }, 50);    

    }
}, false);

/* ===================== HOW TO HACK YOUR SUMMER ===================== */
document.addEventListener('scroll', () => {
    var x = document.getElementById("howTo"); // containerul

    var step1 = document.getElementById("step1");
    var step2 = document.getElementById("step2");
    var step3 = document.getElementById("step3");

    if (window.pageYOffset >= x.offsetTop - 150)
    {
        step1.style.transform = "translateX(0)";
    }
    if (window.pageYOffset >= x.offsetTop)
    {
        step2.style.transform = "translateX(0)";
    }
    if (window.pageYOffset >= x.offsetTop + 200)
    {
        step3.style.transform = "translateX(0)";
    }
}, false);