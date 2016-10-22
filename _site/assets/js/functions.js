    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    window.onclick = function(event) {
      if (!event.target.matches('.dropbtn')) {

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
        $('#blank').addClass("top");
      }
      else {
        $('header').removeClass("sticky");
        $('.logo-sticky').removeClass().addClass("logo");
        $('#blank').removeClass("top");


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
