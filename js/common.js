$(function(){  
  // wrap_tabmain tab
  $('.wrap_tabmain .tab_mv').click(function(){
    if($(this).attr('aria-selected', false)){
      $('.wrap_tabmain .tab_mv').attr('aria-selected', false);
      $(this).attr('aria-selected', true);
    }
  });
  
  // tab_reservation
  $('.tab_reservation .link_resv').click(function(e){
    e.preventDefault();
    if($(this).hasClass('resv_facility')){
     $('.body_calendar .list_calendar').addClass('resv_facility').removeClass('resv_equipment');
    }else if($(this).hasClass('resv_equipment')){
      $('.body_calendar .list_calendar').addClass('resv_equipment').removeClass('resv_facility');
    }
  });
  
  // tab news
  $('.tab_news .link_tab').click(function(e){
    e.preventDefault();
    if($(this).hasClass('on')===false){
      $(this).addClass('on').siblings().removeClass('on');
    }
  });
  
  // main popup slider
  const swiperpopup = new Swiper('.slide_popup', {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".slide_popup .swiper-button-next",
      prevEl: ".slide_popup .swiper-button-prev",
      clickable: true,
    },
    pagination: {
      el: ".page_active",
      clickable: false,
      renderBullet: function (index, className) {
          return '<span class="' + className + '">' + '0' + (index + 1) + "</span>";
      },
    },
  });

   // main business slider
   const swiperBusiness = new Swiper('.slide_business', {
    slidesPerView: 2,
    spaceBetween: 11,
    delay: 4000,
    navigation: {
      nextEl: ".slide_business .swiper-button-next",
      prevEl: ".slide_business .swiper-button-prev",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
    }
  });

  // sub tab
  $('.wrap_tab .link_tab').click(function(e){
    e.preventDefault();
    if($(this).attr('aria-selected', false)){
      $('.wrap_tab .link_tab').attr('aria-selected', false);
      $(this).attr('aria-selected', true);
    }
  });

  // popoup
  $('.list_gallery .link_gallery').click(function(e){
    e.preventDefault();
    $('.outer_popup').css('display', 'flex');
  });
  $('.outer_popup .wrap_popup .btn_close').click(function(e){
    e.preventDefault();
    $('.outer_popup').hide();
  });

});
