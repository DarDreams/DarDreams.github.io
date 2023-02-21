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
  //$(".productos").hide();

  $(".overlay").hide();
  $(".menu__overlay").hide();


  $('footer').hide();


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

  $(".inicio_link").click(function(){
    $("html, body").animate({scrollTop: 0+"px"});
    $(".overlay").fadeIn();
    $(".inicio").show();
    $(".empresa").fadeOut(1000);
    $(".contactos").fadeOut(1000);
    $(".productos").fadeOut(1000);

    anime(".inicio", animate);
  });

  $(".empresa_link").click(function(){
    $("html, body").animate({scrollTop: 0+"px"});
    $(".overlay").fadeIn();
    $(".empresa").show();
    $(".contactos").fadeOut(1000);
    $(".productos").fadeOut(1000);
    $(".inicio").fadeOut(1000);

    anime(".empresa", animate);
  });

  $(".contactos_link").click(function(){
    $("html, body").animate({scrollTop: 0+"px"});
    $(".overlay").fadeIn();
    $(".inicio").fadeOut(1000);
    $(".empresa").fadeOut(1000);
    $(".productos").fadeOut(1000);
    $(".contactos").show();

    anime(".contactos", animate);
  });

  $(".productos_link").click(function(){
    $("html, body").animate({scrollTop: 0+"px"});
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
       $("header").addClass("header_mini");
    } else {
      $(".menu__overlay").fadeOut();
      $("header").removeClass("header_mini");
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



///////tienda

cards = {
	hummus : {
		chili : {
			name: "Hummus Chili",
			img: "img/productos/hummus/chili.png",
			precio:5
		}
  	}
};

function createCards(img, name, precio) {
  document.querySelector('.productos__items').insertAdjacentHTML('afterbegin',`
    <div class = "productos__items_item">
      <img src="${img}" alt="">
      <h3 class="cap">${name}</h3>
      <div class="counter">
          <button class="counter-down">-</button>
          <input type="text" value="0" class="counter-value"/>
          <button class="counter-up">+</button>
		  <h4 class="precio">${precio} €</h4>
		  <button>Comprar</button>
      </div>
      
      
    </div>
  `);
}

createCards(cards.hummus.chili.img, cards.hummus.chili.name, cards.hummus.chili.precio);
createCards(cards.hummus.chili.img, cards.hummus.chili.name, cards.hummus.chili.precio);



/////////////

//$('.counter-up').click(function(e) {
	// const countUp = document.querySelectorAll('.counter-up');
	// const countDown = document.querySelectorAll('.counter-up');

		//let divEdit = target.target.previousElementSibling;
		
		//let price = parseInt(divPrice.textContent, 10);
		

	const divCounter = document.querySelectorAll('.counter');
		divCounter.forEach(function (el){
			el.addEventListener('click', function (e) {  
			if (e.target.className == 'counter-up') {
				let divCount	= e.target.previousElementSibling
				let divPrice 	= e.target.nextElementSibling;

				divCount.value++;
				divPrice.textContent = `${cards.hummus.chili.precio * Number(divCount.value)} €`;
			}
			if (e.target.className == 'counter-down') {
				let divCount	= e.target.nextElementSibling;
				//let count 		= Number(divCount.value);
				let divPrice 	= e.target.prevElementSibling;
				
				divCount.value--;
				divPrice.textContent = `${cards.hummus.chili.precio * Number(divCount.value)} €`;
			}
			
		});
	});





});