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









$(".logo").click(function(){
  location.reload();

});



///////tienda

const cards = {
    hummus : {
		chili : {
            id: 1,
			name: "Hummus Chili",
			img: "img/productos/hummus/chili.png",
			precio:5
		},
		clasico: {
            id: 2,
			name: "Hummus Clasico",
			img: "img/productos/hummus/clasico.png",
			precio:10
		},
        cilantro:{
            id: 3,
            name: "Hummus Cilantro",
			img: "img/productos/hummus/cilantro.png",
			precio:100
        }
  	},
    tomate : {
        seco : {
            id: 4,
            name: "Tomate Seco",
            img: "img/productos/hummus/tomate_seco.png",
            precio:1
        }
    },
    pimiento: {
        asado: {
            id: 5,
            name: "Pimiento Asado",
			img: "img/productos/hummus/pimiento_asado.png",
			precio:50
        }
    }
};

let carrito = [[],[]];


function createCards(id, img, name, precio) {
  document.querySelector('.productos__items').insertAdjacentHTML('beforeend',`
    <div class = "productos__items_item">
      <img src="${img}" alt="">
      <h3 class="cap">${name}</h3>
      <div class="counter">
          <button class="counter-down">-</button>
          <input data-id="${id}"type="text" value="1"  maxlength="2" class="counter-value"/>
          <button class="counter-up">+</button>
		  <h4 class="precio">${precio} €</h4>
		  <button class = 'addItem'>Añadir</button>
      </div>
    </div>
  `);
}
document.body.insertAdjacentHTML('afterbegin',`
    <div style = "display:none" class = 'carrito'>
    <div class='container'>
    <span class = 'total'>TOTAL  = </span>
    <button class = 'comprarOfCarrito'>Finalizar pedido</button>
`);

let todo = 0;

function createCarrito(img, name, count, price, total) {
    document.querySelector('.carrito').style.display = '';
    document.querySelector('.carrito > .container').insertAdjacentHTML('afterbegin',`
                <div class = 'item'>
                    <img src='${img}' alt=''>
                    <span class = 'nameItemOfCarrito'>${name}</span>
                    <span class = 'priceItemOfCarrito'>${count}x${price}€</span>
                    <hr>
                </div>
            </div>
        </div>
    `)
    todo += total;
    document.querySelector('.total').innerHTML = `<span class = 'total'>TOTAL  = ${todo} </span>`;
    console.log(carrito);
}




function loadCarrito() {
    function getItem(id) {
        return Object.values(cards).flatMap(Object.values).find(item => item.id === id);
    }
    //createCarrito('img/productos/hummus/chili.png','sex','500','2300');
    //const id = 2;
    //const item = Object.values(cards).flatMap(Object.values).find(item => item.id === id);

    //console.log(result);



    const img   = getItem(Number(carrito[0])).img;
    const count   = carrito[1];
    const price = getItem(Number(carrito[0])).precio;
    const name = getItem(Number(carrito[0])).name;
    createCarrito(img, name, count, price, count*price);
    // const total =
    //createCards()
}

for (let key of Object.keys(cards)) {
    for (let name of Object.keys(cards[key])) {
    createCards(cards[key][name].id,cards[key][name].img,cards[key][name].name,cards[key][name].precio);
    }
}


$(".productos__items").slick({
	slidesToScroll: 3,
	slidesToShow: 3,
	arrows: true,
	//autoplay: true,
	autoplaySpeed: 1,
	rows: 2,
	//prevArrow: $(".slick-prev"),
	infinite: true
});
$('button.slick-next').html("&#10154;");
$('button.slick-prev').html("&#10154;");
/////////////


		//sosi huy
        function calcSum (e) {
            let curObj      = e.target.parentElement.parentElement.querySelector('h3').textContent.toLowerCase().split(" ");
            let divCount	= e.target.parentElement.querySelector('.counter-value');
            let divPrice 	= e.target.parentElement.querySelector('.precio');
            if (e.target.className == 'counter-up') {
                if (divCount.value > 98) {
                    divCount.value = 99
                } else {
                    divCount.value++
                };
              
            };
            if (e.target.className == 'counter-down') {
                
                if (divCount.value < 2) {
                    divCount.value = 1
                } else {
				 	divCount.value--
                };
            }
            divPrice.textContent = `${cards[curObj[0]][curObj[1]].precio * Number(divCount.value)} €`;
        }

	const divCounter = document.querySelectorAll('.counter');
		divCounter.forEach(function (el){
			el.addEventListener('click', function (e) {  
			if (e.target.className == 'counter-up') {
				calcSum(e);
			}
			if (e.target.className == 'counter-down') {
                calcSum(e);
			}
            if (e.target.className == 'counter-value') {
                e.target.addEventListener('input', function () {
                    e.target.value = e.target.value.replace(/[^\d.]/g, '');
                    calcSum(e);
                }) 
            }
            if (e.target.className == 'addItem') {
                carrito[0] = e.target.parentElement.querySelector('.counter-value').getAttribute('data-id');
                carrito[1] = e.target.parentElement.querySelector('.counter-value').value;
                loadCarrito();
            }
		});
	});
    document.querySelectorAll('.addItem')[0].click();
});