let slider = tns ({
     container: ".my-slider",
     "slideBy" : "1",
     "speed" : 400,
     "nav" : false,
     autoplay : true,
     controls: false,
     autoplayButtonOutput: false,
     responsive : {
         1200: {
             items : 3,
             gutter : 30
         },
         768: {
             items: 2,
             gutter : 30
         },
         450: {
             items: 1
         }
     }
})