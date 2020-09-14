$(document).ready(function(){


    // Slick Slider
    $('.header-slider').slick({
        dots: true,
        speed: 500,
        arrows:true,
        prevArrow:'<svg xmlns="http://www.w3.org/2000/svg" class="previous-arrow" width="19.813" height="38.2" viewBox="0 0 19.813 38.2"><path  class="cls-1" d="M284.5,10050.4l0.707,0.7-19.092,19.1-0.707-.7Zm-18.385,18.4,19.092,19.1-0.707.7-19.092-19.1Z" transform="translate(-265.406 -10050.4)"/></svg>',
        nextArrow:'<svg xmlns="http://www.w3.org/2000/svg" class="next-arrow" width="20" height="38" viewBox="0 0 20 38"><path  d="M1635.73,10050l-0.72.7,19.27,19,0.72-.7Zm18.55,18.3-19.27,19,0.72,0.7,19.27-19Z" transform="translate(-1635 -10050)"/></svg>',
        customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data();
        return '<a>'+(i+1)+'</a>';
        },
      });
      var slick_width = $('.header-slider .slick-dots').width();
      var right_arrow = 80 + slick_width + 20;
      //console.log(right_arrow);
      $('.next-arrow').css("left",right_arrow);

      //Slick Slider Success Story
      $('.success-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows:true,
        fade:true,
        prevArrow: $(".success-pre-arr"),
        nextArrow: $(".success-next-arr")
      });
      
      //Slick Slider Success Story
      $('.trainer-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        arrows:true,
        fade:true,
        prevArrow: $(".section-trainers .success-pre-arr"),
        nextArrow: $(".section-trainers .success-next-arr")
      });

      //Slick Slider Blog Post
      $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots:true,
        arrows:true,
        prevArrow:'<svg xmlns="http://www.w3.org/2000/svg" class="blog-pre-arr" width="19.813" height="38.2" viewBox="0 0 19.813 38.2"><path  class="cls-1" d="M284.5,10050.4l0.707,0.7-19.092,19.1-0.707-.7Zm-18.385,18.4,19.092,19.1-0.707.7-19.092-19.1Z" transform="translate(-265.406 -10050.4)"/></svg>',
        nextArrow:'<svg xmlns="http://www.w3.org/2000/svg" class="blog-next-arr" width="20" height="38" viewBox="0 0 20 38"><path  d="M1635.73,10050l-0.72.7,19.27,19,0.72-.7Zm18.55,18.3-19.27,19,0.72,0.7,19.27-19Z" transform="translate(-1635 -10050)"/></svg>',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              arrow:false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

    // Popup
    $('.image-link').magnificPopup({type:'image'});

    //Left Sidebar
    $(".close-btn").click(function(){
      $(".left-sidebar").css("left", "-100%");
    });
    $("#Btn").click(function(){
      $(".left-sidebar").css("left", "0%");
    });

    //Right Sidebar
    $(".right-close-btn").click(function(){
      $(".right-sidebar").css("right", "-100%");
    });
    $(".Btn2").click(function(){
      $(".right-sidebar").css("right","0%");
    });
    
    //Welcome Popup
    $("#Btn3").click(function(){
      $(".welcome-popup").addClass("visible");
    });
    
    $(".welcome-close-btn").click(function(){
      $(".welcome-popup").removeClass("visible");
    });
    
    $(document).click(function(event) {
      //if you click on anything except the modal itself or the "open modal" link, close the modal
      if (!$(event.target).closest(".welcome-popup,#Btn3").length) {
      $("body").find(".welcome-popup").removeClass("visible");
      }
    });
    
    //Scroll to Top
    $(".arrow-top").click( function() {
      $('html,body').animate({
        scrollTop: "0px"
    }, 3000)
    });

    //Scroll to Section
    $(".contactus-btn").click(function() {
      $('html,body').animate({
          scrollTop: $(".section-contact-us").offset().top},
          'slow');
  });

  $(".blog-scroll-btn").click(function() {
    $('html,body').animate({
        scrollTop: $(".section-blog-post").offset().top},
        'slow');
  });

  $(".trainer-scroll-btn").click(function() {
      $('html,body').animate({
        scrollTop: $(".section-trainers").offset().top},
      'slow');
  });

  $(".success-scroll-btn").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-success-stories").offset().top},
      'slow');
  });

  $(".wcu-scroll-btn").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-wcu").offset().top},
      'slow');
  });

  $(".gym-step-btn").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-gym-steps").offset().top},
      'slow');
  });

  $(".gallery-scroll-btn").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-gallery").offset().top},
      'slow');
  });

  $(".price-scroll-btn").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-price-planing ").offset().top},
      'slow');
  });

  $(".intro-scroll-btn").click(function() {
  $('html,body').animate({
      scrollTop: $(".section-intro").offset().top},
      'slow');
  });

  //Wow Animation
  new WOW().init();




});

