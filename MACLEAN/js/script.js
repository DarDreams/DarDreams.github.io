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


  //$('footer').hide();


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
    $(".carrito").fadeOut(1000);

    anime(".inicio", animate);
  });

  $(".empresa_link").click(function(){
    $("html, body").animate({scrollTop: 0+"px"});
    $(".overlay").fadeIn();
    $(".empresa").show();
    $(".contactos").fadeOut(1000);
    $(".productos").fadeOut(1000);
    $(".inicio").fadeOut(1000);
    $(".carrito").fadeOut(1000);

    anime(".empresa", animate);
  });

  $(".contactos_link").click(function(){
    $("html, body").animate({scrollTop: 0+"px"});
    $(".overlay").fadeIn();
    $(".inicio").fadeOut(1000);
    $(".empresa").fadeOut(1000);
    $(".productos").fadeOut(1000);
    $(".carrito").fadeOut(1000);
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
    $(".carrito").fadeIn();
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

const cards = [
     {
      id: 11,
			name: "Hummus Chili",
			img: "img/productos/mbote_hummus_chili.png",
			precio:11
    },
	{
            id: 12,
			name: "Hummus Clasico",
			img: "img/productos/mbote_hummus_clasico.png",
			precio:12
    },
    {
            id: 13,
            name: "Hummus Cilantro",
			img: "img/productos/mbote_hummus_cilantro.png",
			precio:13
    },
    {
      id: 14,
            name: "Hummus Pimiento Asado",
			img: "img/productos/mbote_hummus_pimiento_asado.png",
			precio:14
    },
    {
            id: 15,
            name: "Hummus Tomate Seco",
			img: "img/productos/mbote_hummus_pimiento_asado.png",
			precio:15
    },
    {
        id: 21,
        name: "Mermelada de Tomate",
        img: "img/productos/mbote_mermelada_de_tomate.png",
        precio:21
    },
    {
        id: 22,
        name: "Mermelada de Pimiento",
        img: "img/productos/mbote_mermelada_de_pimiento.png",
        precio:22
    },
    {
        id: 23,
        name: "Mermelada de Calabaza",
        img: "img/productos/mbote_mermelada_de_calabaza.png",
        precio:23
    },
    {
        id: 31,
        name: "Mousse de Berenjena",
        img: "img/productos/mbote_mousse_de_berenjena.png",
        precio:31
    },
    {
        id: 41,
        name: "Crema de pimientos y Alcaparaz",
        img: "img/productos/mbote_crema_de_pimientos_y_alcaparaz.png",
        precio:41
    },
    {
        id: 51,
        name: "Ensalada Alboran",
        img: "img/productos/bote_ensalada_alboran.png",
        precio:51
    },
    {
        id: 61,
        name: "Pisto",
        img: "img/productos/bote_pisto.png",
        precio:61
    },
    {
        id: 71,
        name: "Ensalada Alboran",
        img: "img/productos/bote_salsa_de_pimiento.png",
        precio:71
    },
    {
        id: 81,
        name: "Tomate Frito Casero",
        img: "img/productos/bote_tomate_frito_casero.png",
        precio:81
    },
    {
        id: 82,
        name: "Tomate Frito Casero Sabor Intenso",
        img: "img/productos/bote_tomate_frito_casero_sabor_intenso.png",
        precio:82
    }
];

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
    <div style = "opacity:0" class = 'carrito'>
    <div class='container'>
    </div>
        <span class = 'total'>TOTAL  = </span>
        <button class = 'comprarOfCarrito'>Finalizar pedido</button>
`);

let todo = 0;

function createCarrito(img, name, count, price, total) {
  //$('.item').fadeIn();
  //$('.item').fadeOut(1000);
    document.querySelector('.carrito').style.opacity = '1';
    document.querySelector('.carrito > .container').insertAdjacentHTML('afterbegin',`
                <div style="opacity:0" class = 'item'>
                    <img src='${img}' alt=''>
                    <span class = 'nameItemOfCarrito'>${name}</span>
                    <span class = 'priceItemOfCarrito'>${count} x ${price}€ = ${count*price}€</span>
                </div>
            </div>
        </div>
    `)
    todo += total;
    document.querySelector('.total').innerText = `TOTAL = ${todo} €`;
    console.log(carrito);
}




function loadCarrito() {
    function getItem(id) {
        return cards.find(item => item.id === Number(id));
    }



    const img     = getItem(Number(carrito[0])).img;
    const count   = carrito[1];
    const price   = getItem(Number(carrito[0])).precio;
    const name    = getItem(Number(carrito[0])).name;
    createCarrito(img, name, count, price, count * price);
}

        
        for (let i = 0; i < cards.length;i++) {
        createCards(cards[i].id,cards[i].img,cards[i].name,cards[i].precio);
    }


$(".productos__items").slick({
	slidesToScroll: 3,
	slidesToShow: 3,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 1,
	rows: 2,
	//prevArrow: $(".slick-prev"),
	infinite: false
});

$('button.slick-next').html("&#10154;");
$('button.slick-prev').html("&#10154;");
/////////////
        function calcSum (e) {
            let id       = e.target.parentElement.querySelector('.counter-value').getAttribute('data-id');
            let item     = cards.find(item => item.id === Number(id));

            let divCount = e.target.parentElement.querySelector('.counter-value');
            let divPrice = e.target.parentElement.querySelector('.precio');
            
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
            divPrice.textContent = `${item.precio * Number(divCount.value)} €`;
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
    for (let i = 0; i< cards.length;i++) {
        //document.querySelectorAll('.addItem')[i].click();
    }
});