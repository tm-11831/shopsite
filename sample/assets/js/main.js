$(document).ready(function(){
  $('.l-mainShop__sellerItem').slick({
    infinite: true,
    dots:false,
    slidesToScroll: 1,
    arrows: true,
    slidesToShow: 4,
    responsive:[
      {
        breakpoint:992,
        settings:{
          slidesToShow:2,
          slidesToScroll:1
        },
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
          slidesToScroll:1
        }
      }
    ]
  });
});

$(document).ready(function() {
  $('#toggle').on('click', function() {
    $('body').addClass('is-open');
    $('body').addClass('overlay');
  });
  $('#closeBtn').on('click', function() {
    $('body').removeClass('is-open');
    $('body').removeClass('overlay');
  });
});

$(function(){
  $('#pageTop').click(function(){
    $('html,body').animate({scrollTop:0},"300");
  });
});
