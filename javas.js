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
	if($(window).width() > 767){
    if (($(this).scrollTop() >= 50)&($(this).scrollTop() <= 4500)) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    }
     else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
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
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 2000);
});

//====================================== Smooth Scrolling ========================================//
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 2000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});