// var name = "dar";
// let number = 7;
// const pi = 3.14;

//number
//string - "", '', ``
//true/false
//null
//undefined
// let obj = {
//     name: "apple",
//     color: "green",
//     weight: 200
// }
//Symbol

//alert(asd);
//console.log("adasd");

//let answer = confirm("18");
//console.log(answer);

//let answer = prompt("18","");
//console.log(answer);

// let isChecked = true,
//     isClose   = true;

//     console.log(isChecked && isClose);       and
//     console.log(isChecked || isClose);       or

// if (2*4 == 8*1) {
//     console.log("True")
// } else {
//     console.log("ERROR")
// }

// const num = 50;
// if (num < 49) {console.log("false")
// } else if (num > 100) {
//     console.log("MANY")
// } else {
//     console.log("TRUE")
// }

// for (let i = 1; i < 8; i++) {
//     console.log(i);
// }

// function logging(a,b) {
//     console.log(a + b)
// }

// logging(3,5);

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/button_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/button_right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
    }
]
    
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
      
      function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on("click",function(e){
                e.preventDefault();
                $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
                $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
            })
          }); 

      };
      toggleSlide("catalog-item__link")
      toggleSlide("catalog-item__back")
  });