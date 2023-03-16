// import {
//     cards2
// } from "./cards.js";
// console.log(cards2);

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

	let cards = {};
	axios.get('db.json')
	.then(function (response) {
	const data = response.data;
	cards = data.cards;
	console.log(cards);

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

/////////////PRODUCTOS///////////////









	$(".logo").click(function(){
		document.querySelector('.logo__roca').src = `img/LOGO3.png?${Date.now()};`
		location.reload(true);
	});



////////tienda

let carrito = [[],[]];
let carritoTotal = [];

//


function createCards(id, img, name, precio, peso, descr, ingredientes, informacion, sellos, number) {
	informacion = informacion.join('<br>');
 	document.querySelector('.productos__items').insertAdjacentHTML('beforeend',`
		<div class = "productos__items_item item">
			<div class = "item__front">
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
			<div class="item__back">
				<h3 title = "${name} ${peso}" class = "caption">${name} ${peso}</h3>	
				<p class = "description">${descr}</p>
				<p class = "ingredientes" title = "${ingredientes}">Ingredientes: ${ingredientes}</p>
				<p class = "inf">INFORMACIÓN NUTRICIONAL:<br>
				Valor medio 100g de producto.<br>
					${informacion}
				</p>
				<div class = 'sellos'>

				</div>
			</div>
		</div>
  `);
  try {
	//console.log(number);


    for (let i = 0; i < sellos.length; i++) {
		
    document.querySelectorAll('.sellos')[number].insertAdjacentHTML('afterbegin',`
      	<img title = "${sellos[i].replace(/^.*[\\/]/, '').replace(/\.[^.]+$/, '').replace("_"," ")}"src = "img/sellos/${sellos[i]}.png">
    `)
  }
    } catch {}
}




document.body.insertAdjacentHTML('afterbegin',`
    <div style = "opacity:0" class = 'carrito'>
    <div class='container'>
    </div>
        <span class = 'total'>TOTAL  = </span>
        <button id = "checkout-button" class = 'comprarOfCarrito'>Finalizar pedido</button>
`);

let todo = 0;

function createCarrito(img, name, count, price, total) {
  //$('.item').fadeIn();
  //$('.item').fadeOut(1000);
    document.querySelector('.carrito').style.opacity = '1';
    document.querySelector('.carrito > .container').insertAdjacentHTML('afterbegin',`
                <div style="opacity:1" class = 'item'>
                    <img src='${img}' alt=''>
                    <span class = 'nameItemOfCarrito'>${name}</span>
                    <span class = 'priceItemOfCarrito'>${count} x ${price}€ = ${count*price}€</span>
                </div>
            </div>
        </div>
    `)
    todo += total;
    document.querySelector('.total').innerText = `TOTAL = ${todo} €`;

	//console.log("carrito = ", carrito);
	carritoTotal.push({...carrito});
	console.clear();
	console.log("total = ", carritoTotal);
}




function loadCarrito() {
    function getItem(id) {
        return cards.find(item => item.id == id);
    }



    //console.log(carrito[0]);
	const img     = getItem(carrito[0]).img;
	
    const count   = carrito[1];
    const price   = getItem(carrito[0]).precio;
    const name    = getItem(carrito[0]).name;
    createCarrito(img, name, count, price, count * price);
}

console.log(cards);
for (let i = 0; i < cards.length;i++) {
	createCards(cards[i].id, cards[i].img, cards[i].name, cards[i].precio, cards[i].peso, cards[i].descr, cards[i].ingredientes, cards[i].informacion, cards[i].sellos, i);
}


$(".productos__items").slick({
	slidesToScroll: 3,
	slidesToShow: 3,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 1,
	draggable: false,
	rows: 2,
	//prevArrow: $(".slick-prev"),
	infinite: false
});

$('button.slick-next').html("&#10154;");
$('button.slick-prev').html("&#10154;");
/////////////
        function calcSum (e) {
            let id       = e.target.parentElement.querySelector('.counter-value').getAttribute('data-id');
            let item     = cards.find(item => item.id ==id);

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

//  CHANGE BG




//document.body.insertAdjacentHTML("beforeend",'<input class = "bg" type="file" id="file-input"></input>');

// var fileInput = document.getElementById('file-input');
// fileInput.addEventListener('change', function() {
//   // Получаем выбранный файл
//   var file = fileInput.files[0];
  
//   // Создаем объект FileReader для чтения данных файла
//   var reader = new FileReader();
  
//   // Устанавливаем функцию обратного вызова для чтения данных файла
//   reader.onload = function(event) {
//     // Создаем новый элемент изображения
//     var image = new Image();
    
//     // Устанавливаем URL изображения как данные, полученные из FileReader
//     image.src = event.target.result;
    
//     // Устанавливаем изображение как фоновое изображение для элемента body
//     document.querySelector('.background').style.backgroundImage = "url(" + image.src + ")";
//   };
  
//   // Читаем данные файла в объект FileReader
//   reader.readAsDataURL(file);
// });


//  PAYMENTS
document.querySelector('.comprarOfCarrito').addEventListener("click",function(){
	
	// sell(carritoTotal.map(item => ({
	// 	price: item[0],
	// 	quantity: Number(item[1])
	// })));
	
 });


function sell(obj) {
    var stripe = Stripe('');

  	stripe.redirectToCheckout({
    lineItems: obj,
		mode: 'payment',
		successUrl: 'http://127.0.0.1:3000/index.html',
		cancelUrl: 'http://127.0.0.1:3000/index.html'
	}).then(function (result) {
		if (result.error) {
		console.log(result.error.message);
		}
	});
	console.clear();
}

// lineItems: [{
//     price: 'price_123',
//     quantity: 1
//   }],

const item = document.querySelectorAll('.item');
item.forEach(cd => {

	const img = cd.querySelector('img');
	const back = cd.querySelector('.item__back');
  
	

	img.addEventListener('click', () => {
		cd.classList.toggle('flipped');
		

    if (cd.classList.contains("flipped")) {
      	cd.querySelector('.item__front').style.transform = "rotateY(180deg)";
      	cd.querySelector('.item__back').style.transform = "rotateY(0deg)";
    } else {
      	cd.querySelector('.item__front').style.transform = "rotateY(0deg)";
		cd.querySelector('.item__back').style.transform = "rotateY(180deg)";
    }
  });
 	 back.addEventListener('click', () => {
    	img.click();
		if (cd.querySelector(':before')) {cd.querySelector(':before').style.opacity = 0;}
 	 });
});


if (/Mobi|Android/i.test(navigator.userAgent) && window.innerWidth < 768) {
	// Удалить все элементы на странице
	document.body.innerHTML = '';
	
	// Отобразить сообщение на нескольких языках
	const lang = navigator.language;
	let message;
	if (lang === 'ru') {
	  message = 'Сайт не доступен с мобильных устройств';
	} else if (lang === 'es') {
	  message = 'El sitio no está disponible en dispositivos móviles';
	} else {
	  message = 'The site is not available on mobile devices';
	}
	const messageElement = document.createElement('div');
	messageElement.textContent = message;
	document.body.appendChild(messageElement);
  }

  
})
.catch(function (error) {
	console.log(error," База данных не найдена");
});






//MODAL

	document.body.insertAdjacentHTML('afterbegin',`
	<div class="modal">
		<div class="modal-content">
			<span class="close">&times;</span>
			<form id="addCardForm">
				<div class='small'>
					<input placeholder='id' class="id" type="text" id="id" name="id">
					<input placeholder='name'type="text" id="name" name="name">
					<input placeholder='peso'type="number" min max id="peso" name="peso">
					<input placeholder='precio' type="number" id="precio" name="precio">
				</div>
				<div class='big'>
					<textarea placeholder='description' id="descr" name="descr"></textarea>
					<textarea placeholder='ingredientes' id="ingredientes" name="ingredientes"></textarea>
					<textarea placeholder='informacion' id="informacion" name="informacion"></textarea>
				</div>
				

				<div class = "sellosAdd">
					<img id='imagePicante' src='img/sellos/none.png'>
					<img src='img/sellos/natural.png'>
					<img src='img/sellos/sin_gluten.png'>
					<img src='img/sellos/sin_lactosa.png'>
					<img src='img/sellos/no_sal.png'>
					<img src='img/sellos/aove.png'>
					<br>

					<select id="imageSelect">
						<option value="img/sellos/none.png">None</option>
						<option value="img/sellos/picanteM.png">Mild</option>
						<option value="img/sellos/picanteH.png">Hot</option>
						<option value="img/sellos/picanteE.png">Extra</option>
					</select>

					<input type="checkbox" id="natural" name="sellos">
					<input type="checkbox" id="sin_gluten" name="sellos">
					<input type="checkbox" id="sin_lactosa" name="sellos">
					<input type="checkbox" id="no_sal" name="sellos">
					<input type="checkbox" id="aove" name="sellos">
				</div>
				<input type="submit" value="Add card">
			</form>
		</div>
	</div>
	`)

	const select = document.getElementById("imageSelect");
	const image = document.getElementById("imagePicante");

	select.addEventListener("change", function() {
		const selectedValue = select.value;
		image.src = selectedValue;
	});

	const addCardForm = document.getElementById('addCardForm');

	const elem = document.querySelectorAll('input[name="sellos"]');

	let arrSellos = [];

	elem.forEach((element, index) => {
		element.addEventListener('change', function (e) {
		  // обновляем значения в массиве arrSellos
		  arrSellos[index] = this.checked;
		  arrSellos[index + 1] = e[index + 1].checked;
		  arrSellos[index + 2] = e[index + 2].checked;
		  arrSellos[index + 3] = e[index + 3].checked;
		  arrSellos[index + 4] = e[index + 4].checked;
		  
		  console.log(arrSellos);
		});
	  });
	  
	  
	  
	  



	addCardForm.addEventListener('submit', function(event) {
		event.preventDefault(); // Отменяем отправку формы
		
		// Получаем значения из полей ввода
		const id 			= document.getElementById('id').value;
		const name 			= document.getElementById('name').value;
		const peso			= document.getElementById('peso').value;
		const descr 		= document.getElementById('descr').value;
		const ingredientes	= document.getElementById('ingredientes').value;
		const informacion	= document.getElementById('informacion').value.split('\n');
		const picante 		= document.getElementById('imagePicante').value;
		const natural		= document.getElementById('natural').value;
		const sin_gluten 	= document.getElementById('sin_gluten').value;
		const sin_lactosa	= document.getElementById('sin_lactosa').value;
		const no_sal 		= document.getElementById('no_sal').value;
		const aove 			= document.getElementById('aove').value;
		const precio 		= document.getElementById('precio').value;
		
		// Создаем новый объект card



		const newCard = {
			id: id,
			name: name,
			peso: peso+'g',
			descr: descr,
			ingredientes: ingredientes,
			informacion: informacion,
			sellos: [picante, natural.checked && natural.id, sin_gluten, sin_lactosa, no_sal, aove],
			precio: precio
		};
		

		
		

		// Добавляем новый объект в массив cards
		cards.push(newCard);
		
		// Очищаем поля ввода
		addCardForm.reset();
		
		// Выводим обновленный массив cards в консоль
		console.log(cards);
	});


});  //////////////////  END

