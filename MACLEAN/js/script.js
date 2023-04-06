$(document).ready(function () {
	const mediaQuery768 = window.matchMedia('(max-width: 768px)');
	let cards = {};
	axios.get('db.json')
		.then(function (response) {
			const data = response.data;
			if (!data.cards) { cards = data } else { cards = data.cards };
			console.log("first - ", cards);

			$(".inicio").hide();
			$(".empresa").hide();
			$(".contactos").hide();
			//$(".productos").hide();
			document.querySelector('.productos').style.visibility = 'hidden';

			$(".overlay").hide();
			$(".menu__overlay").hide();


			$(window).scroll(function () {
				if ($(this).scrollTop() > 180) {
					$(".pageup").fadeIn();
				} else {
					$(".pageup").fadeOut();
				}
			});

			$(".pageup").click(function () {
				const _href = $(this).attr("href");
				$("html, body").animate({ scrollTop: 0 + "px" });
				return false;
			});

			////////////////////////////////////////////
			function anime(cl1, cl2) {
				$(cl1).addClass(cl2);
				$(cl1).on('animationend', function () {
					$(cl1).removeClass(cl2);
				});
			}

			/* #region  MENU */
			function menuGoRight() {
				if (mediaQuery768.matches) {
					if (divList.classList.contains('animate__slideOutRight') == false) {
						divBurger.click();
						divBurger.removeAttribute('style');
					}
				}
			}
			let animate = "animate__bounceInRight";

			$(".inicio_link").click(function () {
				menuGoRight();

				$(".overlay").fadeIn();
				$(".inicio").show();
				$(".empresa").fadeOut(1000);
				$(".contactos").fadeOut(1000);
				$(".productos").fadeOut(1000);
				$(".carrito").fadeOut(1000);

				anime(".inicio", animate);
				document.querySelector('html, body').scrollIntoView({ behavior: 'smooth' });
			});

			$(".empresa_link").click(function () {
				menuGoRight();
				$("html, body").animate({ scrollTop: 0 + "px" });
				$(".overlay").fadeIn();
				$(".empresa").show();
				$(".contactos").fadeOut(1000);
				$(".productos").fadeOut(1000);
				$(".inicio").fadeOut(1000);
				$(".carrito").fadeOut(1000);

				anime(".empresa", animate);
			});

			$(".contactos_link").click(function () {
				menuGoRight();
				$("html, body").animate({ scrollTop: 0 + "px" });
				$(".overlay").fadeIn();
				$(".inicio").fadeOut(1000);
				$(".empresa").fadeOut(1000);
				$(".productos").fadeOut(1000);
				$(".carrito").fadeOut(1000);
				$(".contactos").show();

				anime(".contactos", animate);
			});

			$(".productos_link").click(function () {
				menuGoRight();
				document.querySelector('.productos').style.visibility = '';
				//$('button.slick-prev').click();
				$("html, body").animate({ scrollTop: 0 + "px" });
				$(".overlay").fadeIn();
				$(".inicio").fadeOut(1000);
				$(".empresa").fadeOut(1000);
				$(".contactos").fadeOut(1000);
				$(".productos").show();
				$(".carrito").fadeIn();
				//$('.productos__items').slick('slickPause');
				anime(".productos", animate);
			});
			/* #endregion */

			/* #region  SCROLL */
			$(window).scroll(function () {
				if ($(this).scrollTop() > 50) {
					$(".menu__overlay").fadeIn();
					$("header").addClass("header_mini");
					if (mediaQuery768.matches) {
						document.querySelector('.hamburger').style.transform = 'scale(80%) translateX(15%) translateY(-15%)';
					}
				} else {
					$(".menu__overlay").fadeOut();
					$("header").removeClass("header_mini");
					if (mediaQuery768.matches) {
						document.querySelector('.hamburger').style.transform = "scale(100%)";
					}
				}
			});
			/* #endregion */

			/* #region  HAMBURGER */
			document.body.insertAdjacentHTML('afterbegin', `
				<div class="hamburger">
						<span class="button">&#x2630;</span>
				</div>
			`);

			const divMenu = document.querySelector('section.menu');
			const divBurger = document.querySelector('span.button');
			const divList = document.querySelector('.menu>nav>ul');
			const divBackground = document.querySelector('.background');

			divBurger.addEventListener('click', () => {
				divList.classList.add('animate__animated');
				divBackground.onclick = () => {
					if (divList.classList.contains('animate__slideOutRight') == false) {
						divBurger.click();
						divBurger.removeAttribute('style');
					}

					divBackground.onclick = null;
				};

				if (divList.getBoundingClientRect().left > 0) {
					divList.classList.toggle('animate__slideOutRight');
					divList.classList.toggle('mobile');

				}

				divList.classList.add('mobile');

				if (mediaQuery768.matches) {
					if (divList.classList.contains('mobile')) {
						divMenu.style.display = 'flex';
						document.querySelector('.mobile').classList.add('animate__slideInRight');
						divBurger.style.transform = 'translate(-50%, 100%) rotate(90deg)';
					} else {
					}
				}
				if (getComputedStyle(document.querySelector('span.button')).transform[10] == 1) {
					divBurger.removeAttribute('style');
				}
			})
			/* #endregion */

			/* #region  INICIO */
			document.querySelector('.inicio> .container').insertAdjacentHTML('afterbegin', `
				<h2>
					Estamos trabajando en la mejora de nuestro sitio web. En breve dispondremos de nuevos productos y contenidos. Disculpen las molestias.
				</h2>
				<br>
				<h3 class="cap">Hummus  
					«Creemos en trabajar por un mundo digno y justo, en el que la globalización suponga una oportunidad y no una amenaza.»
				</h3>
				<ul> 
				<li>
					Nacemos bajo la filosofía de ofrecer al consumidor un producto de calidad, elaborados con materia prima ecológica. Queremos contribuir con la producción de alimentos sanos, que promueva el bienestar de las personas y cuya producción apoye la expansión de la agricultura ecológica y de esta forma se genere un valor añadido en favor de todos los eslabones de la cadena de los productos, desde el campo hasta la mesa.
				</li>
				<br>
				<li>
					El objetivo es alcanzar una “calidad selecta de los productos”, utilizando materia prima con una calidad biológica insuperable, resaltando su sabor, proporcionando salud, nutrición y bienestar a través de una alimentación natural de la más alta calidad.
				</li>
				<br>
				<li>
					Nos basamos para nuestras elaboraciones en recetas tradicionales de nuestros antepasados, dándoles un toque de innovación e investigación introduciendo otros productos sustitutivos ( azúcar de abedul, eritritol), y aprovechar el poder de otros ( aloe vera, semillas de chía, jengibre…)
				</li>
				</ul>
			`)
			/* #endregion */

			/* #region  EMPRESA */
			document.querySelector('.empresa >.container').insertAdjacentHTML('afterbegin', `
				<ul>
				<li>
					La empresa almeriense Conservas Alborán nace bajo la filosofía de ofrecer al consumidor un  producto natural  de calidad,  resaltando su sabor, proporcionando salud, nutrición y bienestar  a través de una alimentación natural de la más alta calidad.
				</li>
				<br>
				<li>
					Se ofrecen diversas líneas de productos naturales, vegano – naturales  y artesanales mezclando la cocina tradicional con la cocina moderna. Se ofertan distintos productos en  conservas  (ensalada de tomate cherry y pimiento asado al carbón, sobrasada vegetal, morcilla vegetal, cebollitas francesas en vinagre balsámico..), sopas frías y calientes, jaleas ( jalea de aove, jalea de arándanos..), salsas de verduras, caracoles en salsa.
				</li>
				<br>
				<li>
					En Conservas Alborán comprendemos que las principales preocupaciones de los consumidores de hoy, es consumir productos saludables, sin derivados industriales pero con un exquisito sabor. Por ello, elaboramos de forma artesana, sin conservantes ni colorantes, sin gluten, sin lactosa y con sustitutos del azúcar 100% naturales ( azúcar de abedul..), por lo que la mayoría de  nuestros productos son también aptos para celiacos, diabéticos tipo 2, intolerantes a la lactosa y gran parte de ellos son aptos para personas que lleven una dieta vegetariana o vegana.
				</li>
				<br>
				<li>
					Nos basamos para nuestras elaboraciones en recetas tradicionales de nuestros antepasados, dándoles un toque de innovación e investigación introduciendo otros productos sustitutivos ( azúcar de abedul), y aprovechar el poder de otros ( semillas de chía).
				</li>
				</ul>
			`)
			/* #endregion */

			/* #region  PRODUCOTS */
			$(".logo").click(function () {
				document.querySelector('.logo__roca').src = `img/LOGO3.png`;
				//location.href = location.origin + '?rand=' + Math.random();
				location.reload(true);
			});

			/* #region  TIENDA */

			let carrito = [[], []];
			let carritoTotal = [];

			function createCards(id, img, name, precio, peso, descr, ingredientes, informacion, sellos, number) {
				informacion = informacion.join('<br>');
				document.querySelector('.productos__items').insertAdjacentHTML('beforeend', `
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
						document.querySelectorAll('.sellos')[number].insertAdjacentHTML('afterbegin', `
				<img title = "${sellos[i].replace(/^.*[\\/]/, '').replace(/\.[^.]+$/, '').replace("_", " ")}"src = "img/sellos/${sellos[i]}.png">
			`);
					}
				} catch (e) {
					console.error(e.message)
				}
			}




			document.body.insertAdjacentHTML('afterbegin', `
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
				document.querySelector('.carrito > .container').insertAdjacentHTML('afterbegin', `
					<div style="opacity:1" class = 'item'>
						<img src='${img}' alt=''>
						<span class = 'nameItemOfCarrito'>${name}</span>
						<span class = 'priceItemOfCarrito'>${count} x ${price}€ = ${count * price}€</span>
					</div>
				</div>
			</div>
		`)
				todo += total;
				document.querySelector('.total').innerText = `TOTAL = ${todo} €`;

				carritoTotal.push({ ...carrito });
				console.clear();
				console.log("total = ", carritoTotal);
			}

			function loadCarrito() {
				function getItem(id) {
					return cards.find(item => item.id == id);
				}

				//console.log(carrito[0]);
				const img = getItem(carrito[0]).img;

				const count = carrito[1];
				const price = getItem(carrito[0]).precio;
				const name = getItem(carrito[0]).name;
				createCarrito(img, name, count, price, count * price);
			}

			//console.log(cards);
			for (let i = 0; i < cards.length; i++) {
				createCards(cards[i].id, cards[i].img, cards[i].name, cards[i].precio, cards[i].peso, cards[i].descr, cards[i].ingredientes, cards[i].informacion, cards[i].sellos, i);
			}
			/* #endregion */


			/* #region  SLIDER MANUAL */
			// function slider () {
			// 	const slider = document.querySelector('.productos__items');
			// 	const prev = document.querySelector('.prev');
			// 	const next = document.querySelector('.next');
			// 	const slideWidth = slider.clientWidth;
			// 	const slidesCount = slider.children.length;
			// 	const maxOffset = slideWidth * (slidesCount - 1);
			// 	let offset = 0;

			// 	prev.addEventListener('click', () => {
			// 		offset += slideWidth;
			// 		if (offset > 0) {
			// 			offset = -maxOffset;
			// 		}
			// 		slider.style.transform = `translateX(${offset}px)`;
			// 	});

			// 	next.addEventListener('click', () => {
			// 		offset -= slideWidth;
			// 		if (offset < -maxOffset) {
			// 			offset = 0;
			// 		}
			// 		slider.style.transform = `translateX(${offset}px)`;
			// 	});
			// }

			//slider();
			/* #endregion */

			/* #region  LOAD SLICK SLIDER */

			$(".productos__items").slick({
				waitForAnimate: false,
				waitForLoad: true,
				//lazyLoad: 'ondemand',
				//initialSlide: 0,
				slidesToScroll: 1,
				slidesToShow: 3,
				arrows: true,
				//autoplaySpeed: 1,
				draggable: false,
				rows: 2,
				infinite: false
			});
			$('button.slick-next').html("&#10154;");
			$('button.slick-prev').html("&#10154;");

			if (mediaQuery768.matches) {
				let productosItems = $(".productos__items");
				if (productosItems.hasClass('slick-initialized')) {
					productosItems.slick('unslick');
				}
				productosItems.slick({
					// vertical: true,
					// touchMove: true,
					// rows: 1,
					// slidesToShow: 1,
					// swipe: true,
					// swipeToSlide: true,
					// verticalSwiping: true,
					// swipeDirection: 'vertical',
					// arrows: false,
					// infinite: false
					vertical: true,
					touchMove: true,
					rows: 1,
					swipe: true,
					swipeToSlide: true,
					verticalSwiping: true,
					swipeDirection: 'vertical',
					arrows: false,
					slidesToShow: 1,
					slidesPerRow: 1,
					infinite: false
				});
			}
			/* #endregion */


			/* #endregion */

			/* #region  CALC_SUM */
			function calcSum(e) {
				let id = e.target.parentElement.querySelector('.counter-value').getAttribute('data-id');
				let item = cards.find(item => item.id == id);

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
			divCounter.forEach(function (el) {
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
			for (let i = 0; i < cards.length; i++) {
				//document.querySelectorAll('.addItem')[i].click();
			}
			/* #endregion */

			/* #region PAYMENTS*/
			// document.querySelector('.comprarOfCarrito').addEventListener("click",function(){
			// sell(carritoTotal.map(item => ({
			// 	price: item[0],
			// 	quantity: Number(item[1])
			// })));
			// });

			// function sell(obj) {
			// 	var stripe = Stripe('');

			// 	stripe.redirectToCheckout({
			// 	lineItems: obj,
			// 		mode: 'payment',
			// 		successUrl: 'http://127.0.0.1:3000/index.html',
			// 		cancelUrl: 'http://127.0.0.1:3000/index.html'
			// 	}).then(function (result) {
			// 		if (result.error) {
			// 		console.log(result.error.message);
			// 		}
			// 	});
			// 	console.clear();
			// }

			// lineItems: [{
			//     price: 'price_123',
			//     quantity: 1
			//   }],
			/* #endregion */

			/* #region  FLIP_CARD */
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
					if (cd.querySelector(':before')) { cd.querySelector(':before').style.opacity = 0; }
				});
			});
			/* #endregion */

			/* #region  MODAL */
			document.body.insertAdjacentHTML('afterbegin', `
				<div class="modal">
					<div class="modal-content">
						<form id="addCardForm">
						<span class="close">&times;</span>
							<div class='small'>
								<input autocomplete="off" placeholder='id' class="id" type="text" id="id" name="id">
								<input autocomplete="off" placeholder='name' type="text" id="name" name="name">
								<input autocomplete="off" placeholder='peso' type="text" min max id="peso" name="peso">
								<input autocomplete="off" placeholder='precio' type="number" id="precio" name="precio">
								<input autocomplete="off" placeholder='path' type="text" id="img" name="img">
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
							<button class = 'aplicarCambios'>Aplicar cambios</button>
						</form>
					</div>
				</div>
	`);

			function createList() {
				document.querySelector('#addCardForm').insertAdjacentHTML('afterbegin', '<div class="list"><ul></ul></div>');
				for (let product of Object.values(cards)) {
					document.querySelector('.list > ul').insertAdjacentHTML('beforeend', `
				<li>${product.name}
					<img class='trash' src='img/trash.png'>
				</li>
			`);
				}
			}

			createList();

			function createEventTrash() {
				document.querySelectorAll('.trash').forEach((element) => {
					element.addEventListener('click', (event) => {
						event.preventDefault();
						event.target.parentElement.remove();

						clearList().then(() => {
							createList();
							createEventsList();
							createEventTrash();

							// Отправляем AJAX-запрос на сервер
							$.ajax({
								url: 'https://www.conservasalboran.es/php/query.php', // адрес вашего сервера
								type: 'POST', // метод запроса
								data: JSON.stringify(cards), // данные, которые нужно отправить на сервер
								contentType: "application/json; charset=utf-8",
								dataType: "json", // тип данных, которые отправляем
								success: function (response) {
									console.log('Данные успешно обновлены');
									console.log(response); // ответ от сервера
								},
								error: function (error) {
									console.error('Ошибка при обновлении данных');
									console.error(error); // сообщение об ошибке
								}
							});
						});
						cards.splice(cards.findIndex(card => card.id == document.querySelector('#id').value), 1);

					});
				});
				console.log(cards);
			}
			createEventTrash();

			function clearList() {
				return new Promise(resolve => {
					document.querySelector('.list').remove();
					resolve();
				})
			};

			function clearForm() {
				return new Promise(resolve => {
					const form = document.querySelector('#addCardForm');
					form.reset();
					document.querySelector('#imagePicante').src = 'img/sellos/none.png';
					//document.querySelector('.list').remove();
					resolve();
				});
			}

			function clearActive() {
				const itemsList = document.querySelectorAll('.list > ul > li');
				itemsList.forEach((e) => {
					e.classList.remove('active');
				});

			}

			function createEventsList() {
				const itemsList = document.querySelectorAll('.list > ul > li');
				itemsList.forEach((e) => {
					e.addEventListener('click', (event) => {
						clearActive();
						e.classList.add('active');
						clearForm().then(() => {
							//try {
							const index = Array.from(itemsList).indexOf(event.target);
							document.querySelector('#id').value = cards[index].id;
							document.querySelector('#name').value = cards[index].name;
							document.querySelector('#peso').value = cards[index].peso;
							document.querySelector('#precio').value = cards[index].precio;
							document.querySelector('#img').value = cards[index].img;
							document.querySelector('#descr').value = cards[index].descr;
							document.querySelector('#ingredientes').value = cards[index].ingredientes;
							document.querySelector('#informacion').value = cards[index].informacion;

							for (let i = 0; i < cards[index].sellos.length; i++) {
								switch (cards[index].sellos[i]) {
									case 'picanteM':
										document.querySelector('#imageSelect').selectedIndex = 1;
										document.querySelector('#imagePicante').src = document.querySelector('#imageSelect').value;
										break;
									case 'picanteH':
										document.querySelector('#imageSelect').selectedIndex = 2;
										document.querySelector('#imagePicante').src = document.querySelector('#imageSelect').value;
										break;
									case 'picanteE':
										document.querySelector('#imageSelect').selectedIndex = 3;
										document.querySelector('#imagePicante').src = document.querySelector('#imageSelect').value;
										break;
									default:
										document.querySelector(`#${cards[index].sellos[i]}`).checked = true;
								}
							}
							//} catch {}   
						})
					});
				});
			}
			createEventsList();

			const select = document.getElementById("imageSelect");
			const image = document.getElementById("imagePicante");

			select.addEventListener("change", function () {
				const selectedValue = select.value;
				image.src = selectedValue;
			});

			const addCardForm = document.getElementById('addCardForm');

			let tempSellos = [];

			const inputElement = document.getElementById("open");
			const imgElement = document.getElementById("img");

			imgElement.addEventListener("dblclick", function () {
				inputElement.click();
			});

			inputElement.addEventListener("change", function () {
				const file = inputElement.files[0];
				const reader = new FileReader();

				reader.addEventListener("load", function () {
					imgElement.value = file.name;
				});

				if (file) {
					reader.readAsDataURL(file);
				}
			});

			addCardForm.addEventListener('submit', function (event) {
				tempSellos.length = 0;
				event.preventDefault();
				const id = document.getElementById('id').value;
				const name = document.getElementById('name').value;
				const peso = document.getElementById('peso').value.replace("g", '');
				const descr = document.getElementById('descr').value;
				const ingredientes = document.getElementById('ingredientes').value;
				const image = document.getElementById('img').value;
				const informacion = document.getElementById('informacion').value.split('\n');
				const precio = document.getElementById('precio').value;

				const newCard = {
					id: id,
					name: name,
					peso: peso + 'g',
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

				clearList().then(() => {
					createList();
					createEventsList();
					createEventTrash();
				});

				function updateData() {
					$.ajax({
						url: 'https://www.conservasalboran.es/php/query.php', // адрес вашего сервера
						type: 'POST', // метод запроса
						data: JSON.stringify(cards), // данные, которые нужно отправить на сервер
						contentType: "application/json; charset=utf-8",
						dataType: "json", // тип данных, которые отправляем
						success: function (response) {
							console.log('Данные успешно обновлены');
							console.log(response); // ответ от сервера
						},
						error: function (error) {
							console.error('Ошибка при обновлении данных');
							console.error(error); // сообщение об ошибке
						}
					});
				}

				updateData();

			});


			function clickImgCheck() {
				const images = document.querySelectorAll(".sellosAdd img");
				images.forEach((image) => {
					const imageName = image.src.split("/").pop().split(".")[0];
					const checkbox = document.querySelector(`#${imageName}`);
					if (checkbox) {
						image.addEventListener("click", () => {
							checkbox.checked = !checkbox.checked;
						});
					};
				});
			}

			clickImgCheck();

			/* #region  APLICAR BUTTON */
			function updateCard(id, updatedCard) {
				const index = cards.findIndex(card => card.id == id);
				if (index === -1) {
					console.error(`Карточка с id ${id} не найдена`);
					return;
				}
				const card = cards[index];
				card.name = updatedCard.name;
				card.peso = updatedCard.peso;
				card.descr = updatedCard.descr;
				card.ingredientes = updatedCard.ingredientes;
				card.img = updatedCard.img;
				card.informacion = updatedCard.informacion;
				card.sellos = updatedCard.sellos;
				card.precio = updatedCard.precio;

				const formData = new FormData();
				formData.append('id', card.id);
				formData.append('name', card.name);
				formData.append('peso', card.peso);
				formData.append('descr', card.descr);
				formData.append('ingredientes', card.ingredientes);
				formData.append('img', card.img);
				formData.append('informacion', card.informacion);
				formData.append('sellos', card.sellos.join(','));
				formData.append('precio', card.precio);


				$.ajax({
					url: 'https://www.conservasalboran.es/php/query.php',
					type: 'POST',
					data: JSON.stringify(cards),
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					success: function (response) {
						console.log('Данные успешно обновлены');
						console.log(response);
					},
					error: function (error) {
						console.error('Ошибка при обновлении данных');
						console.error(error);
					}
				});
			};
			/* #endregion */


			document.querySelector('#addCardForm > button').addEventListener('click', (e) => {
				e.preventDefault();
				let aplSellos = [];
				document.querySelectorAll('input[name="sellos"]:checked').forEach(element => {
					aplSellos.push(element.id);
				});

				updateCard(document.querySelector('#id').value, {
					name: document.querySelector('#name').value,
					peso: document.querySelector('#peso').value,
					descr: document.querySelector('#descr').value,
					ingredientes: document.querySelector('#ingredientes').value,
					img: document.querySelector('#img').value,
					informacion: document.querySelector('#informacion').value,
					sellos: aplSellos,
					precio: document.querySelector('#precio').value
				});
			});

			function modalShow() {
				document.querySelector('.b_mail').addEventListener('click', (e) => {
					e.preventDefault();
					if (document.querySelector('.e_mail').value == 'ADD') {
						window.scrollTo({ top: 60, behavior: 'smooth' });
						document.querySelector('.modal').style.display = 'block';
						document.querySelectorAll('.background, .logo, .menu, section, footer').forEach((element) => {
							element.style.filter = 'blur(4px)';
							element.style.pointerEvents = 'none';
						});
						document.querySelector('.e_mail').value = '';
					}
				});
			}

			modalShow();

			function modalHide() {
				document.querySelector('.close').addEventListener('click', () => {
					document.querySelector('.modal').style.display = 'none';
					document.querySelectorAll('.background, .logo, .menu, section, footer').forEach((element) => {
						element.style.filter = '';
						element.style.pointerEvents = '';
					});
				});
			}

			modalHide();
			/* #endregion */

			document.querySelector('.e_mail').addEventListener('keydown', (event) => {
				if (event.shiftKey) {
					document.querySelector('.e_mail').setAttribute("type", "password");
				} else { document.querySelector('.e_mail').setAttribute("type", "text"); }
			})


			// setTimeout(() => {
			// 	document.querySelector('.slick-next').addEventListener('mousedown', function (event) {
			// 		if (event.shiftKey) {
			// 			var slick = $('.productos__items').slick('getSlick');
			// 			var slideCount = slick.slideCount;
			// 			var lastIndex = slideCount - 3;
			// 			slick.slickGoTo(lastIndex);
			// 		}
			// 	});
			// }, 1000);


			/* #region  FORM CONTACTO */
			$('.contactos__informacion__mensaje_form').submit(function (e) {
				e.preventDefault();
				var name = $('.name').val();
				var tel = $('.tel').val();
				var email = $('.email').val();
				var mensaje = $('.text').val();

				$.ajax({
					type: 'POST',
					url: 'https://www.conservasalboran.es/php/mail.php', // укажите правильный путь к файлу на сервере
					data: {
						mail: email,
						to: 'dardreams@gmail.com',
						subject: 'Mensaje de conservasalboran.es',
						body: 'Nombre: ' + name + '\nTeléfono: ' + tel + '\nEmail: ' + email + '\nMensaje: ' + mensaje
					},
					success: function () {
						console.log('Message sent!');
					},
					error: function () {
						console.log('Message failed to send.');
					}
				});
			});
			/* #endregion */
		})
		.catch(function (error) {
			console.log(error, " База данных не найдена");
		});
});  //////////////////  END

