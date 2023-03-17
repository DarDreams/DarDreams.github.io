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
	if (!data.cards) {cards = data} else {cards = data.cards};
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
	$('button.slick-prev').click();
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
				<!--  
				<div class="counter">
					<button class="counter-down">-</button>
					<input data-id="${id}"type="text" value="1"  maxlength="2" class="counter-value"/>
					<button class="counter-up">+</button>
					<h4 class="precio">${precio} €</h4>
					<button class = 'addItem'>Añadir</button>
				</div>
				-->
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

 //console.log(cards);
for (let i = 0; i < cards.length;i++) {
	createCards(cards[i].id, cards[i].img, cards[i].name, cards[i].precio, cards[i].peso, cards[i].descr, cards[i].ingredientes, cards[i].informacion, cards[i].sellos, i);
}

	$(".productos__items").slick({
		//waitForAnimate: true,
		initialSlide: 0,
		slidesToScroll: 1,
		slidesToShow: 3,
		arrows: true,
		//fade: true,
		//dots: true,
		//dotsClass: 'slick-dots',
		//autoplay: true,
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
      	cd.querySelector('.item__back').style.transform = "rotateY(0deg) translateX(-8%) ";

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
					<input autocomplete="off" placeholder='id' class="id" type="text" id="id" name="id">
					<input autocomplete="off" placeholder='name'type="text" id="name" name="name">
					<input autocomplete="off" placeholder='peso'type="number" min max id="peso" name="peso">
					<input autocomplete="off" placeholder='precio' type="number" id="precio" name="precio">
					<input autocomplete="off" type="text" id="img" name="img">
					<input autocomplete="off" accept="image/jpeg, image/png" type="file" id="open" name="open">
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

	//const elem = document.querySelectorAll('input[name="sellos"]');

	 //let arrSellos = [];

	// elem.forEach((element, index) => {
	// 	element.addEventListener('change', function () {
	// 	  arrSellos[index] = elem[index]?.checked ? elem[index].id : null;
	// 	  arrSellos[index + 1] = elem[index + 1]?.checked ? elem[index + 1].id : null;
	// 	  arrSellos[index + 2] = elem[index + 2]?.checked ? elem[index + 2].id : null;
	// 	  arrSellos[index + 3] = elem[index + 3]?.checked ? elem[index + 3].id : null;
	// 	  arrSellos[index + 4] = elem[index + 4]?.checked ? elem[index + 4].id : null;
		  
	// 	  // Убираем лишние null в конце массива
	// 	  arrSellos = arrSellos.filter(Boolean);
	  
	// 	  console.log(arrSellos);
	// 	});
	// });

	// arrSellos.unshift('d');

	//   document.querySelector('#imageSelect').addEventListener('change',(e) => {
	// 	arrSellos[0] = e.target.selectedIndex > 0 ? e.target.value.match(/(\w+).png/)[1] : null;
	// 	if (e.target.selectedIndex === 0) {
	// 	  arrSellos.splice(0, 1);
	// 	}
	// 	console.log(e.target.selectedIndex);
	// 	console.log(arrSellos);
	//   });
	let tempSellos = [];

	const inputElement = document.getElementById("open");
	const imgElement = document.getElementById("img");
	
	imgElement.addEventListener("dblclick", function() {
	  inputElement.click();
	});
	
	inputElement.addEventListener("change", function() {
	  const file = inputElement.files[0];
	  const reader = new FileReader();
	
	  reader.addEventListener("load", function() {
		imgElement.value = file.name;
	  });
	
	  if (file) {
		reader.readAsDataURL(file);
	  }
	});
	

	addCardForm.addEventListener('submit', function(event) {
		
		tempSellos.length = 0;

		// if (newCard.sellos.length > 0) {
		// 	newCard.sellos.length = 0;
		// };
		event.preventDefault(); // Отменяем отправку формы
		
		// Получаем значения из полей ввода
		const id 			= document.getElementById('id').value;
		const name 			= document.getElementById('name').value;
		const peso			= document.getElementById('peso').value;
		const descr 		= document.getElementById('descr').value;
		const ingredientes	= document.getElementById('ingredientes').value;
		const image			= document.getElementById('img').value;
		const informacion	= document.getElementById('informacion').value.split('\n');
		const precio 		= document.getElementById('precio').value;
		
		const newCard = {
			id: id,
			name: name,
			peso: peso+'g',
			descr: descr,
			ingredientes: ingredientes,
			informacion: informacion,
			sellos: [],
			img: `img/productos/${image}`,
			precio: precio
		};
		

		document.querySelectorAll('input[name="sellos"]:checked').forEach(element => {
			tempSellos.push(element.id)
		});

		const combobox = document.querySelector('#imageSelect');
		if (combobox.selectedIndex > 0) {
			tempSellos.push(combobox.value.match(/(\w+).png/)[1])
		}

		newCard.sellos = tempSellos;
		
		cards.push(newCard);

		addCardForm.reset();
		console.log(combobox.src);
		document.querySelector('#imagePicante').src = 'img/sellos/none.png'
		//combobox.selectedIndex = 0;

		function updateData() {
			
			// Отправляем AJAX-запрос на сервер
			$.ajax({
			  url: 'https://www.conservasalboran.es/php/query.php', // адрес вашего сервера
			  type: 'POST', // метод запроса
			  data: JSON.stringify(cards), // данные, которые нужно отправить на сервер
			  contentType: "application/json; charset=utf-8",
			  dataType: "json", // тип данных, которые отправляем
			  success: function(response) {
				console.log('Данные успешно обновлены');
				console.log(response); // ответ от сервера
			  },
			  error: function(error) {
				console.error('Ошибка при обновлении данных');
				console.error(error); // сообщение об ошибке
			  }
			});
		  }

		  updateData();
		  

	});
	
	//console.log(cards);


	  


	document.querySelector('.b_mail').addEventListener('click', (e) => {
		e.preventDefault();
		if (document.querySelector('.e_mail').value == 'ADD') {
			document.querySelector('.modal').style.display = 'block';
			document.querySelector('.e_mail').value ='';
		}
	});

	document.querySelector('.e_mail').addEventListener('keydown', (event) =>{
		if (event.shiftKey) {
			console.log('test');
			document.querySelector('.e_mail').setAttribute("type", "password");
		} else {document.querySelector('.e_mail').setAttribute("type", "text");}
	})


	setTimeout(() => {
		document.querySelector('.slick-next').addEventListener('mousedown', function(event) {
			if (event.shiftKey) {
				var slick = $('.productos__items').slick('getSlick');
				var slideCount = slick.slideCount;
				var lastIndex = slideCount - 3;
				slick.slickGoTo(lastIndex);
			}
		  });
	}, 1000);

});  //////////////////  END

