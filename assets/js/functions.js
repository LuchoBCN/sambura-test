


$('.menu-icon').click(function(event){
      
      document.getElementById("myDropdown").classList.toggle("show");

});

   
window.onclick = function(event) {
      if (!event.target.matches('.menu-icon')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    } 






    $(window).scroll(function() {
      if ($(this).scrollTop()>90) {
        $('header').addClass("sticky");
        $('.logo').removeClass().addClass("logo-sticky");
        $('.blank').addClass("topi");
        $('nav').addClass("nav-top");
        $('.menu').addClass("menu-top");
        $('.escribenos').addClass("escribenos-top");
        $('.menu-icon').addClass("menu-icon-top");
        $('.dropbtn').addClass("dropbtn-top");
        $('.logo-type').addClass("logo-type-small");
        $('.mail-icon').addClass("mail-icon-top");


      }
      else {
        $('header').removeClass("sticky");
        $('.logo-sticky').removeClass().addClass("logo");
        $('.blank').removeClass("topi");
        $('nav').removeClass("nav-top"); 
        $('.menu').removeClass("menu-top");
        $('.escribenos').removeClass("escribenos-top");
        $('.menu-icon').removeClass("menu-icon-top");
        $('.dropbtn').removeClass("dropbtn-top");
        $('.logo-type').removeClass("logo-type-small");
        $('.mail-icon').removeClass("mail-icon-top");

      }
    });
    

    
jQuery(function($) {
    function fixDiv() {
        var $cache = $('header');
        var $width = $('header').parent().width();
        if ($(window).scrollTop() > 90) {
            $cache.css({
                'width': $width
            });
        } else {
            $cache.css({
            });
        }
    }
    $(window).scroll(fixDiv);
    fixDiv();
 });



$('a[href^="#"]').click(function(){
    $('html, body').animate({
        scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
    }, 500);
    return false;
});