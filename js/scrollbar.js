document.addEventListener('scroll', checkScroll);

function checkScroll() {
	var tracker = document.documentElement.scrollTop;
  	var maxHeight = document.documentElement.scrollHeight-document.documentElement.clientHeight;
  
  	if(tracker == 0)
    {
      	$(document.body).removeClass('ScrollBarBot');
  		$(document.body).addClass('ScrollBarTop');
    }
  	else if (tracker >= maxHeight)
    {
      	$(document.body).removeClass('ScrollBarTop');
     	$(document.body).addClass('ScrollBarBot');
    }
  	else 
    {
      $(document.body).removeClass('ScrollBarBot');
      $(document.body).removeClass('ScrollBarTop');
    }
}