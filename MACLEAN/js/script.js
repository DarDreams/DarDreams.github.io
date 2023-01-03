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

  $(".overlay").hide();

  $(".menu__overlay").hide();


// $("#first").click(function(){
    
//     const ID_SCROLL = "#inicio";
//     $("html, body").animate({scrollTop: $(ID_SCROLL).offset().top+"px"});
//     return false;
//   });


  $(window).scroll(function() {
    if ($(this).scrollTop() > 300) {
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
  $("#inicio").click(function(){
    $(".overlay").fadeIn();
    $(".inicio").show();
    $(".empresa").fadeOut();

    $(".inicio").addClass("animate__bounceInRight");
    $(".inicio").removeClass("animate__bounceOutLeft");
  });


  $("#empresa").click(function(){
    $(".overlay").fadeIn();
    $(".empresa").show();
    $(".inicio").fadeOut(1000);

    $(".inicio").addClass("animate__bounceOutLeft");
    $(".empresa").addClass("animate__bounceInRight");

  });

  $("#contactos").click(function(){
    $(".overlay").fadeIn();
    $(".contactos").show();
    $(".inicio").fadeOut(1000);
    $(".empresa").fadeOut(1000);

    $(".inicio").addClass("animate__bounceOutLeft");
    $(".contactos").addClass("animate__bounceInRight");

  });

  ////////////////////////////////////////////

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $(".menu__overlay").fadeIn();
    } else {
      $(".menu__overlay").fadeOut();
    }
  });















});