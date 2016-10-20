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
      if ($(this).scrollTop()>2) {
        $('header').addClass("sticky");
        $('.logo').removeClass().addClass("logo-sticky");
      }
      else {
        $('header').removeClass("sticky");
        $('.logo-sticky').removeClass().addClass("logo");

      }
    });
    
    

