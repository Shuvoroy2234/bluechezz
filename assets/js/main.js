
  $(document).ready(function(){
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 10) {
          $('.header_main').addClass('fixed-nav');
      }else{
        $('.header_main').removeClass('fixed-nav');
      }
    });
    $('.sidebar_menu_toggler').click(function(e){
      e.preventDefault();
      $('.menu_sidebar').addClass('active');
      $('.overlay').show();
    })
    $('.menu_sidebar_dismiss, .overlay').click(function(e){
      e.preventDefault();
      $('.menu_sidebar').removeClass('active');
      $('.overlay').hide();
    })
    $('.stock_switch .switch span').click(function(){
      $('.stock_switch .switch span').removeClass('active');
      $(this).addClass('active');
    })
    $('.main_m_menu .nav-item.dropdown .nav-link').click(function(e){
      $(this).toggleClass('active');
      $(this).siblings('.dropdown_menu').slideToggle();
    })
    $('.image_section .secondary_image').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    });
    $('.slider_text_vertical').slick({
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: false,
      arrows: false,
      infinite: true
  });
    $('.category_slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      dots: true,
    });
    $('.products_slider').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 4,
      autoplay: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });
    $('.product_section2').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    });

    $('#product_carousel').carousel();

    const priceGap = 1000;

    $(".price-input input").on("input", function () {
      let minPrice = parseInt($(".price-input .input-min").val()),
        maxPrice = parseInt($(".price-input .input-max").val());
    
      if (maxPrice - minPrice >= priceGap && maxPrice <= $(".range-input input").eq(1).attr("max")) {
        if ($(this).hasClass("input-min")) {
          $(".range-input input").eq(0).val(minPrice);
          $(".slider .progress").css("left", (minPrice / $(".range-input input").eq(0).attr("max")) * 100 + "%");
        } else {
          $(".range-input input").eq(1).val(maxPrice);
          $(".slider .progress").css("right", 100 - (maxPrice / $(".range-input input").eq(1).attr("max")) * 100 + "%");
        }
      }
    });
    
    $(".range-input input").on("input", function () {
      let minVal = parseInt($(".range-input input").eq(0).val()),
        maxVal = parseInt($(".range-input input").eq(1).val());
    
      if (maxVal - minVal < priceGap) {
        if ($(this).hasClass("range-min")) {
          $(".range-input input").eq(0).val(maxVal - priceGap);
        } else {
          $(".range-input input").eq(1).val(minVal + priceGap);
        }
      } else {
        $(".price-input .input-min").val(minVal);
        $(".price-input .input-max").val(maxVal);
        $(".slider .progress").css("left", (minVal / $(".range-input input").eq(0).attr("max")) * 100 + "%");
        $(".slider .progress").css("right", 100 - (maxVal / $(".range-input input").eq(1).attr("max")) * 100 + "%");
      }
    });

    $('.filter .dp_down').click(function(){
      $(this).siblings('.dp_div').slideToggle();
    })
    $('.toggle_filter').click(function(e){
      e.preventDefault();
      $('.filter_box .filter').toggleClass('active');
    })
    $('.filter_dismiss').click(function(){
      $('.sm_toggle_filter').toggleClass('active');
      $('.filter_box .filter').removeClass('active');
    })

    $('.main_slider_box').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.nav_slider_box'
    });
    $('.nav_slider_box').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.main_slider_box',
      dots: false,
      centerMode: false,
      focusOnSelect: true,
    });
    var $navSlider = $('.nav_slider_box');
    var navOffset = $navSlider.offset().top;

    $(window).on('scroll', function () {
      if ($(window).scrollTop() > navOffset) {
        $navSlider.addClass('fixed-nav');
      } else {
        $navSlider.removeClass('fixed-nav');
      }
    });
  });
  
  const multiLevelMenu = document.querySelector(".multi-level-menu-wrapper");

// multiLevelMenu.forEach((mlItem, index)=>{
  
// })
$(document).ready(function() {
  const productItems = $('.product_section_box .row > div');
  
  // Set the default column classes based on screen size using CSS classes
  productItems.addClass('col-lg-6 col-md-5 col-sm-4 col-2');

  // Handle click on column toggler buttons
  $('.grid_list_toggler button').on('click', function() {
    const colType = $(this).data('col'); 

    // Remove active class from all buttons and add it to the clicked button
    $('.grid_list_toggler button').removeClass('active');
    $(this).addClass('active');

    // Remove existing column classes from product items
    productItems.removeClass('col-1 col-2 col-3 col-4 col-5 col-6 list-view list_view col-lg-6 col-md-5 col-sm-4 col-2');

    // Apply the new column class based on the selected button
    if (colType === 'list') {
      productItems.addClass('list-view list_view');
    } else {
      productItems.addClass(`col-${colType}`);
    }
  });
});
$(document).ready(function(){
  $(".multi-level-menu-wrapper").each(function(index,mlMenu){
    var subMenuItems = $(mlMenu).find(".hasSubMenu");
    console.log("subMenuItems", subMenuItems)
    
    subMenuItems.each(function(i,subMenu){
      $(subMenu).find(".trigger").on("click",function(){
       var target=$(subMenu).attr("data-target");
       $(target).addClass("active");
     });
    });
    
    $(".backTrigger").on("click",function(){
      var _backTrigger = this;
      $(_backTrigger).parent(".subMenu").removeClass("active");
    });
    
  });
});