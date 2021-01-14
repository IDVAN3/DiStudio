
'use strict'
$(document).ready(function () {

    /*ibg*/

    function ibg() {
        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                let src_img = $(this).find('img').attr('src');
                $(this).css('backgroundImage', 'url("' + src_img + '")');
            }
        });
    }

    ibg();

    /*попап*/

    function openPopup(id) {
        $(".js-popup[data-id-popup='" + id + "']").fadeIn(300);
        $('body').addClass('lock1');
    }

    function close_popup() {
        $('.js-popup').fadeOut(300);
        $('body').removeClass('lock1');
    }

    $('.js-popup__close').click(close_popup);

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');
        openPopup(index_btn_popup);
    });

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });



    // show and hide blocks in blog__list

    $(".blog__link").click(function(e) {
        e.preventDefault(); 
 
     let ths = $(this);
     let clos = ths.next('.submenu');
     let currentArrow = ths.find($(".icons-arrow"));
         if(clos.is(":visible")) {
            clos.slideUp(300);
             currentArrow.removeClass('active');
         }
         else {
             $(".icons-arrow").removeClass('active');
             $('.submenu').slideUp(300);
             clos.slideDown(300);
             currentArrow.addClass('active');
         }
    });

    // input text in up

    $('.requirements__input').focusin(function(e){
        $(this).prev(".requirements__label").css("opacity", "1")
      })
      $('.requirements__input').focusout(function(e){
        $(this).prev(".requirements__label").css("opacity", "0")
      })


      // Helper function for add element box list in WOW
    WOW.prototype.addBox = function(element) {
        this.boxes.push(element);
       };

       // Init WOW.js and get instance
      var wow = new WOW();
      wow.init();

     // Attach scrollSpy to .wow elements for detect view exit events,
       // then reset elements and add again for animation
    //     $('.wow').on('scrollSpy:exit', function() {
    //    $(this).css({
    //     'visibility': 'hidden',
    //     'animation-name': 'none'
    //    }).removeClass('animated');
    //    wow.addBox(this);
    //   }).scrollSpy();

    //header burger 
    let item = 0;
    $('.header__burger').click(function() {
		$('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        
        let itemList = $('.header__list > li');

        if(item) {
            itemList.removeClass('animated');
            itemList.css({'visibility':'hidden','animation-name': 'none'});
            item = 0;
        }
        else {
            itemList.addClass('animated');
            itemList.css({'visibility' : 'visible', 'animation-name':'bounceInUp'});
            item = 1;
        }
    });
    
    

    let linkButton = $('.header-message');
    let AlreadyDone = false;
    $(window).scroll(function() {
        let scroll = $(window).scrollTop() + $(window).height();

        let offset = linkButton.offset().top + $(window).height()

        if (!AlreadyDone && scroll > offset) {
            linkButton.css("position", "fixed");
            AlreadyDone = true; 
        }
    });

    $('.portfolio__item:last-child').hover(
        function() {
            $( this ).prev().css("display", "none");
            $( this ).css("position", "absolute");
            $( this ).css("width", "calc(100% *2 / 3)");
        },
        function() {
            $( this ).css("width", "calc(100% / 3)");
            $( this ).prev().css("display", "block");
            // $( this ).css("position", "static");
        }
      );

      $("#link1").on("click", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top - 20;
        $('body,html').animate({scrollTop: top}, 400);
    });

    
});
