$("document").ready(function(){
  $('.l-mainShop__sellerItem').slick({
    infinite: true,
    dots:false,
    slidesToScroll: 1,
    arrows: true,
    slidesToShow: 4,
    responsive:[
      {
        breakpoint:992,
        setting:{
          slidesToShow:2
        },
      },
      {
        breakpoint:768,
        setting:{
          slidesToShow:1
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
