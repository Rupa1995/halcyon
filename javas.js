//==================================== Nav ==================================================//
	 function openNav()
    {
      document.getElementById("mynav").style.width = "100%";
    }
    function closeNav() {
        document.getElementById("mynav").style.width = "0";
    }
// ==================================== Scroll to Top ===========================================//

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
    }
     else {
        $('#return-to-top').fadeOut(200);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                       
    }, 2000);
});

//====================================== Smooth Scrolling ========================================//
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1500, function(){
        window.location.hash = hash;
      });
    } 
  });
});
