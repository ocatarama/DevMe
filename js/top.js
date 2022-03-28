//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  var contor = 1;
    var inter = setInterval(() => {
      document.documentElement.scrollTop = (document.documentElement.scrollTop > 0) ? document.documentElement.scrollTop - contor : clearInterval(inter);
      contor += 1;
    }, 1);
}