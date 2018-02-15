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
<<<<<<< HEAD
	if($(window).width() > 767){
    if (($(this).scrollTop() >= 50)&($(this).scrollTop() <= 4500)) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
=======
    if ($(this).scrollTop() >= 50) {        
        $('#return-to-top').fadeIn(200);    
>>>>>>> 4b9bfedb58208f6f71182ee3bc32a1bd6bb39279
    }
     else {
        $('#return-to-top').fadeOut(200);   
    }
}
else if($(window).width() < 480){
	    if (($(this).scrollTop() >= 50)&($(this).scrollTop() <= 7800)) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    }
     else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
}
else if(($(window).width() > 481)&($(window).width() < 766)){
	    if (($(this).scrollTop() >= 50)&($(this).scrollTop() <= 12000)) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    }
     else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
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
<<<<<<< HEAD
      }, 2000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
=======
      }, 1500, function(){
>>>>>>> 4b9bfedb58208f6f71182ee3bc32a1bd6bb39279
        window.location.hash = hash;
      });
    } 
  });
});
