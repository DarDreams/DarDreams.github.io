// const hamburger = document.querySelector(".hamburger"),
//       menu = document.querySelector(".menu"),
//       closeElem = document.querySelector(".menu__close");

// hamburger.addEventListener("click",() => {
//     menu.classList.add("active");
// });

// closeElem.addEventListener("click",() => {
//     menu.classList.remove("active");
// });


// const counters = document.querySelectorAll(".skills__rating"),
//       lines = document.querySelectorAll(".skills__progress-bar span");

// counters.forEach((item, i) => {
//     lines[i].style.width = item.innerHTML;
// });

$(document).ready(function(){

  $(".inicio").hide();
  $(".empresa").hide();
  $(".contactos").hide();
  $(".productos").hide();

  $(".overlay").hide();

  $(".menu__overlay").hide();


// $("#first").click(function(){
    
//     const ID_SCROLL = "#inicio";
//     $("html, body").animate({scrollTop: $(ID_SCROLL).offset().top+"px"});
//     return false;
//   });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 180) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $(".pageup").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: 0+"px"});
    return false;
  });
  
////////////////////////////////////////////
function anime(cl1,cl2) {
  $(cl1).addClass(cl2);
  $(cl1).on('animationend', function() {
    $(cl1).removeClass(cl2);});
}



////////////////ANIMATE//////////////////////
let animate = "animate__bounceInRight"

  $("#inicio").click(function(){
    $(".overlay").fadeIn();
    $(".inicio").show();
    $(".empresa").fadeOut(1000);
    $(".contactos").fadeOut(1000);
    $(".productos").fadeOut(1000);

    anime(".inicio", animate);
  });

  $("#empresa").click(function(){
    $(".overlay").fadeIn();
    $(".empresa").show();
    $(".contactos").fadeOut(1000);
    $(".productos").fadeOut(1000);
    $(".inicio").fadeOut(1000);

    anime(".empresa", animate);
  });

  $("#contactos").click(function(){
    $(".overlay").fadeIn();
    $(".inicio").fadeOut(1000);
    $(".empresa").fadeOut(1000);
    $(".productos").fadeOut(1000);
    $(".contactos").show();

    anime(".contactos", animate);
  });

  $("#productos").click(function(){
    $(".overlay").fadeIn();
    $(".inicio").fadeOut(1000);
    $(".empresa").fadeOut(1000);
    $(".contactos").fadeOut(1000);
    $(".productos").show();
    $('.productos__items').slick('slickPause');
    anime(".productos", animate);
  });

  //////////////SCROLL////////////////////

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $(".menu__overlay").fadeIn();
    } else {
      $(".menu__overlay").fadeOut();
    }
  });

/////////////PRODUCTOS//////////////

$(".productos__items").slick({
  slidesToScroll: 3,
  slidesToShow: 3,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 1,
  rows: 2,
  //prevArrow: $(".slick-prev"),
  infinite: true
});

$('button.slick-next').html("&#10154;");
$('button.slick-prev').html("&#10154;");





$(".logo").click(function(){
  location.reload();

});











});