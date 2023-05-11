$(document).ready(function () {
	const mediaQuery768 = window.matchMedia('(max-width: 768px)');
	const mediaQuery1900 = window.matchMedia('(max-width: 1900px)');
	let cards = {};
	if (!localStorage.getItem("lang")) { localStorage.setItem("lang", "es") };
	axios.get('db.json')
		.then(function (response) {
			const data = response.data;
			if (!data.cards) { cards = data } else { cards = data.cards };
			console.log("first - ", cards);

			/* #region  ANIMATION */
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
			/* #endregion */

			/* #region  CONTENT TEXT */
			let content = {
				menu: ["inicio", "empresa", "productos", "contactos"],
				contactos: ["Teléfono de contacto +34 652 11 79 80",
					"Email: administracion@conservasalboran.es",
					"Dirección: Poligono Industrial Huécija, Paraje Los 15 socios. nave 3. cp 04409 Huecija (Almería) ESPAÑA",
					"Escríbenos un mensaje:",
					"Nombre y apellidos",
					"Teléfono",
					"Email",
					"Mensaje",
					"Enviar"],
				footer: [
					`Empresa dedicada<Br>a la fabricación de<Br>conservas vegetales<br>y platos preparados.`,
					"Inscríbete a nuestra newsletter infórmate de todos nuestros productos y novedades.",
					"Información",
					"introduce email"
				],
				inicio: `
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
			`,
				empresa: `
				<ul>
				<li>
					Empresa nacida en Almería situada en Huécija, un pequeño pueblo ubicado en una de las puertas de la Alpujarra almeriense. 
				</li>
				<br>
				<li>
					Tenemos como premisa la filosofía de ofrecer al consumidor un producto de calidad, elaborados con materia 	prima de calidad ecológica. Queremos ofrecer la contribución de producción de alimentos sanos, que promueva el bienestar de las personas y cuya producción apoye la expansión de la agricultura ecológica y de esta forma se genere un valor añadido en favor de todos los eslabones de la cadena de los productos, desde el campo hasta la mesa. Creemos en trabajar por un mundo digno y justo, en el que la globalización suponga una oportunidad y no una amenaza.
				</li>
				<br>
				<li>El objetivo es alcanzar una “calidad selecta de los productos", utilizando materia prima con una calidad biológica insuperable, resaltando su sabor, proporcionando salud, nutrición y bienestar a través de una alimentación natural de la más alta calidad. Se Ofrecen diversas líneas de productos naturales, vegano — naturales y artesanales mezclando la cocina tradicional con la cocina moderna.</li>
				En Conservas Alborán comprendemos que las principales preocupaciones de los consumidores de hoy, es consumir productos saludables, sin derivados industriales pero con un exquisito sabor. Por ello, nuestros productos son elaborados de forma artesanal, totalmente natural, sin aditivos, sin gluten y sin lactosa.
				</ul>
			`
			}
			/* #endregion */

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
			function setLinks() {
				$(".inicio_link").click(function (e) {
					e.preventDefault();
					document.body.style.setProperty('--header', "'" + document.querySelector("a.inicio_link").textContent + "'");
					menuGoRight();

					$(".overlay").fadeIn();
					$(".inicio").show();
					$(".empresa").fadeOut(1000);
					$(".contactos").fadeOut(1000);
					$(".productos").fadeOut(1000);
					$(".carrito").fadeOut(1000);
					$(".footer").show();

					anime(".inicio", animate);
					document.querySelector('html, body').scrollIntoView({ behavior: 'smooth' });
				});

				$(".empresa_link").click(function (e) {
					e.preventDefault();
					menuGoRight();

					document.body.style.setProperty('--header', "'" + document.querySelector("a.empresa_link").textContent + "'");

					$("html, body").animate({ scrollTop: 0 + "px" });
					$(".overlay").fadeIn();
					$(".empresa").show();
					$(".contactos").fadeOut(1000);
					$(".productos").fadeOut(1000);
					$(".inicio").fadeOut(1000);
					$(".carrito").fadeOut(1000);
					$(".footer").show();

					anime(".empresa", animate);
				});

				$(".contactos_link").click(function (e) {
					e.preventDefault();
					menuGoRight();
					document.body.style.setProperty('--header', "");

					$("html, body").animate({ scrollTop: 0 + "px" });
					$(".overlay").fadeIn();
					$(".inicio").fadeOut(1000);
					$(".empresa").fadeOut(1000);
					$(".productos").fadeOut(1000);
					$(".carrito").fadeOut(1000);
					$(".footer").hide();
					$(".contactos").show();

					anime(".contactos", animate);
				});

				$(".productos_link").click(function (e) {
					e.preventDefault();
					menuGoRight();

					document.body.style.setProperty('--header', "'" + document.querySelector("a.productos_link").textContent + "'");


					document.querySelector('.productos').style.visibility = '';
					//$('button.slick-prev').click();
					$("html, body").animate({ scrollTop: 0 + "px" });
					$(".overlay").fadeIn();
					$(".inicio").fadeOut(1000);
					$(".empresa").fadeOut(1000);
					$(".contactos").fadeOut(1000);
					$(".productos").show();
					$(".carrito").fadeIn();
					$(".footer").hide();
					//$('.productos__items').slick('slickPause');
					anime(".productos", animate);
				});
			}

			setLinks();
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
			const divInicio = document.querySelector('.inicio');
			const divEmpresa = document.querySelector('.empresa');
			const divProductos = document.querySelector('.productos');
			const divContactos = document.querySelector('.contactos');

			function hideMenu() {
				if (divList.classList.contains('animate__slideOutRight') == false) {
					divBurger.click();
					divBurger.removeAttribute('style');
				}
				divBackground.onclick = null;
			}

			divBurger.addEventListener('click', () => {
				divList.classList.add('animate__animated');

				divBackground.onclick = hideMenu;
				divInicio.onclick = hideMenu;
				divEmpresa.onclick = hideMenu;
				divProductos.onclick = hideMenu;
				divContactos.onclick = hideMenu;

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

			/* #region  LANGUAGE INTERFACE */
			document.body.insertAdjacentHTML("afterend", `
				
				<input placeholder = "${localStorage.getItem("lang")}" list="langsList" id="lang" name="lang">
				<datalist id="langsList">
					<option value="En" label="English">
					<option value="Es" label="Español">
					<option value="fr" label="Français">
					<option value="De" label="Deutsch">
					<option value="It" label="Italiano">
					<option value="ru" label="Русский">
					<option value="Ja" label="日本語">
					<option value="Ko" label="한국어">
					<option value="Zh" label="中文">
			  	</datalist>
			`);

			let langList = document.querySelector("#lang");

			setLang(); // Первая загрузка
			document.body.style.cssText = "";

			langList.addEventListener("input", () => {
				if (langList.value.toLowerCase() !== localStorage.getItem("lang").toLowerCase()) {
					localStorage.setItem("lang", langList.value.toLowerCase());
					setLang();
				}
				if (langList.value.toLowerCase() == "es") {
					document.body.style.opacity = "0";
					setTimeout(() => {
						document.body.style.transition = "all .1s ease";
						document.body.style.cssText = "";
					}, 500);
				}
				document.querySelector('#lang').placeholder = document.querySelector('#lang').value;
				langList.value = "";

			});
			/* #endregion */

			/* #region  SET LANGUAGE */
			function lang(selector, res, cont) {
				//	console.log("Selected language: " + localStorage.getItem("lang"));
				if (localStorage.getItem("lang").toLowerCase() == "es") {
					if (cont == "innerHTML") {
						document.querySelector(selector).innerHTML = res;
					} else if (cont == "textContent") {
						document.querySelector(selector).textContent = res;
					} else if (cont == "placeholder") {
						document.querySelector(selector).placeholder = res;
					}
				} else {
					translate(res).then(translatedText => {
						if (cont == "innerHTML") {
							document.querySelector(selector).innerHTML = translatedText;
						} else if (cont == "textContent") {
							document.querySelector(selector).textContent = translatedText;
						} else if (cont == "placeholder") {
							document.querySelector(selector).placeholder = translatedText;
						}
						//document.body.classList.remove('blink');
					}).catch(error => console.error("error language ", error));
				}
			}

			async function langCards(text) {
				if (localStorage.getItem("lang").toLowerCase() == "es") {
					return text;
				} else {
					try {
						const translatedText = await translate(text);
						return translatedText;
					} catch (error) {
						console.error("error language ", error);
						return text;
					}
				}
			}






			function setLang() {
				for (let i = 0; i < content.menu.length; i++) {
					lang(`.${content.menu[i]}_link`, content.menu[i], "textContent")
				}
				lang('.inicio> .container', content.inicio, "innerHTML")

				lang('.empresa >.container', content.empresa, "innerHTML")

				lang('.footer__text_left', content.footer[0], "innerHTML");

				lang(".footer__news_text", content.footer[1], "textContent");

				lang(".footer__informacion", `
					Información: <br> <br><div class="footer__informacion_links">
					<a class="inicio_link" href="">Inicio</a><br>
					<a class="empresa_link" href="">Empresa</a><br>
					<a class="productos_link" href="">Productos</a><br>
					<a class="contactos_link" href="">Contactos</a>
					</div>
				`, "innerHTML");
				setLinks();

				lang("div.tel", content.contactos[0], "textContent");
				lang(".email", content.contactos[1], "textContent");
				lang(".direccion", content.contactos[2], "textContent");
				lang(".contactos__informacion__mensaje_sub", content.contactos[3], "textContent");
				lang(".name", content.contactos[4], "placeholder");
				lang("input.tel", content.contactos[5], "placeholder");
				lang("input.email", content.contactos[6], "placeholder");
				lang("textarea.text", content.contactos[7], "placeholder");
				lang(".button_submit", content.contactos[8], "textContent");
				document.querySelector('iframe').src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1.1m3!1d2211.998792828823!2d-2.605439178379319!3d36.96124486917935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc9217c8222779a86!2zMzbCsDU3JzQ2LjAiTiAywrAzNicxOC43Ilc!5e1!3m2!1ses!2ses!4v1672748299814!5m2!1s${localStorage.getItem("lang")}!2s${localStorage.getItem("lang")}`
				// document.querySelectorAll('.description').forEach(element => {
				// 	console.log(element.className);
				// 	lang(element.className, element.textContent,"textContent");
				// });

				function normalText(selector, cont) {
					const html = new DOMParser().parseFromString(cont, 'text/html');
					const text = html.body.textContent;
					document.querySelector(selector).placeholder = text;
				}

				if (localStorage.getItem("lang").toLowerCase() == "es") {

					normalText('input.e_mail', content.footer[3]);

					//document.querySelector('input.e_mail').placeholder = content.footer[3];
				} else {
					translate(content.footer[3]).then(translatedText => {
						normalText('input.e_mail', translatedText);
					}).catch(error => console.error(error));
				}
			}
			/* #endregion */

			/* #region  TRANSLATE */
			function translate(textToTranslate, retryCount = 0, maxRetries = 3) {
				var targetLanguage = localStorage.getItem("lang").toLowerCase();
				var sourceLanguage = 'es';
				var url = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyBOti4mM-6x9WDnZIjIeyEU21OpBXqWBgw&q=' + encodeURIComponent(textToTranslate) + '&target=' + targetLanguage + '&source=' + sourceLanguage;
				const start = performance.now();
				document.body.classList.add('blink');

				return fetch(url)
					.then(response => response.json())
					.then(data => {
						const end = performance.now();
						const time = end - start;

						if (Math.round(time) <= 200) {
							document.body.style.transition = `all 0.1s ease-out`;
							document.querySelector(".blink").style.transition = `all 0.1s ease-in`;
						} else {
							document.body.style.transition = `all ${Math.round(time / 3)}ms ease-out`;
							document.querySelector(".blink").style.transition = `all ${Math.round(time / 3)}ms ease-in`;
						}

						var translatedText = data.data.translations[0].translatedText;
						return translatedText;
					})
					.catch(error => {
						console.error(error);
						if (retryCount < maxRetries) {
							return translate(textToTranslate, retryCount + 1, maxRetries);
						} else {
							throw new Error('Max retries reached');
						}
					});
			}


			function watchLinkText(link, callback) {
				const observer = new MutationObserver((mutationsList) => {
					for (const mutation of mutationsList) {
						if (mutation.type === 'childList') {
							const newText = mutation.target.textContent;
							callback(newText);
						}
					}
				});
				observer.observe(link, { childList: true });
			}

			watchLinkText(document.querySelector('.inicio_link'), (newText) => {
				setTimeout(() => {
					document.body.classList.remove('blink');
				}, 500);

				//console.log(`Link text changed to: ${newText}`);
			});
			/* #endregion */

			/* #region  LOGO */
			$(".logo").click(function () {
				document.querySelector('.logo__roca').src = `img/LOGO3.png`;
				//location.href = location.origin + '?rand=' + Math.random();
				location.reload(true);
			});
			/* #endregion */

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
					<p class = "description" title =${descr}>${descr}</p>
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
			<!--	<div style = "opacity:0" class = 'carrito'> 
				<div class='container'>
				</div>
				<span class = 'total'>TOTAL  = </span>
				<button id = "checkout-button" class = 'comprarOfCarrito'>Finalizar pedido</button>-->
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
				autoplaySpeed: 1,
				//autoplay: true,
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
					autoplaySpeed: 1,
					//autoplay: true,
					infinite: false,
					waitForAnimate: false,
					waitForLoad: true,
				});
				//$(".productos__items").slickGoTo(0);
				// } else if (mediaQuery1900.matches) {
				// 	//alert('');
				// 	$(".productos__items").slick({
				// 		waitForAnimate: false,
				// 		waitForLoad: true,
				// 		//lazyLoad: 'ondemand',
				// 		//initialSlide: 0,
				// 		slidesToScroll: 1,
				// 		slidesToShow: 3,
				// 		arrows: true,
				// 		//autoplaySpeed: 1,
				// 		draggable: false,
				// 		rows: 2,
				// 		infinite: false
				// 	});
			}
			// $('.productos__items').on('beforeChange', function(event, slick, currentSlide, nextSlide){
			// 	console.log(nextSlide);
			// 	//$('.productos__items').slickPause();
			//   });
				//$('.productos__items').slick({autoplay: false});
				
				//$(".productos__items").slick({slickGoTo: 0});
				//console.log("time");
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

			/* #region  PAYMENTS*/
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

			/* #region  MODAL INTERFACE */
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
				//console.log(cards);
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
							document.querySelector('#informacion').value = cards[index].informacion.join('\n');

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
				const name = document.getElementById('name').value.toLowerCase();
				const peso = document.getElementById('peso').value.replace("g", '');
				const descr = document.getElementById('descr').value;
				const ingredientes = document.getElementById('ingredientes').value;
				const image = document.getElementById('img').value;
				const informacion = document.getElementById('informacion').value.split('\n');
				const precio = document.getElementById('precio').value;

				const newCard = {
					id: id,
					name: name,
					peso: peso,// + 'g',
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
			/* #endregion */

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
				console.log(updatedCard.informacion);
				//console.log(updatedCard.informacion.split('\n'));
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
				card.sellos.push(document.querySelector("#imageSelect").value.split("/").pop().split(".")[0]);
				formData.append('sellos', card.sellos.join(','));

				//formData.append("sellos", document.querySelector("#imageSelect").value.split("/").pop().split(".")[0]);
				//formData.append('sellos', card.sellos.reduce((acc, curr) => acc + ',' + curr));
				//formData.append('sellos', card.sellos.reduce((acc, curr) => acc + ',' + curr, ""));

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
				location.reload();
			};

			/* #endregion */

			/* #region  ADD BUTTON */

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
					img: document.querySelector('#img').value.toLowerCase(),
					//informacion: document.querySelector('#informacion').value.split('.,'),
					informacion: document.querySelector('#informacion').value.split('\n'),
					sellos: aplSellos,
					precio: document.querySelector('#precio').value
				});
			});

			/* #endregion */

			/* #region  MODAL & THEME LIGHT */
			function modalShow() {
				document.querySelector('.b_mail').addEventListener('click', (e) => {
					e.preventDefault();
					if (document.querySelector('.e_mail').value == "white") {
						const style = document.createElement('style');
						style.textContent = `
							.productos__items_item img {
								filter: brightness(150%)
							}

							.item:before {
								border-top-color: var(--yellow);
								border-left-color: var(--yellow);
							}

							.item:after {
								border-bottom-color: var(--yellow);
								border-right-color: var(--yellow);
							}

							button.slick-prev, button.slick-next {
								color: var(--yellow);
							}

							section.footer, footer {
								box-sizing: border-box;
								position: absolute;
								top: 100%;
								width: calc(100vw - 4px);
								background-color: rgb(0 0 0/50%) !important;
								transition: all 1s;
							}

							ul,h3.cap {
								text-shadow: 1px 1px black;
								color: white !important;
								transition: all 1s;
							}

							#inicio>h2, .footer__informacion_links>a {
								color: yellow !important;
								text-shadow: 1px 1px black;
								transition: all 1s;
							}

							.background {
								background: url("../img/bg_light.jpg");
								height: calc(100vh + 200px);
								background-position: center;
								background-repeat: no-repeat;
								background-size: cover;
								background-color: white;
								transition: all 1s;
							}

							.background:before {
								background-color: rgba(0,0,0,.3);
								transition: all 1s;
							}
							.overlay {
								border-radius: 40px;
								transition: all 1s;
							}

							span.button {
							    display: none;
								transition: all 1s;
							}

							.link-ease-in-out a, .contactos__informacion,
							.item, .cap {
								color: white !important;
								text-shadow: 1px 1px black;
								transition: all 1s;
							}

							input, textarea {
								background-color: white !important;
								color: black !important;
								transition: all 1s;
							}
						`;
						document.head.appendChild(style);
					};
					if (document.querySelector('.e_mail').value == 'ADD') {
						window.scrollTo({ top: 60, behavior: 'smooth' });
						document.body.style.overflow = "hidden";
						document.querySelector('.modal').style.display = 'block';
						document.querySelectorAll('.background, .logo, .menu, section, footer').forEach((element) => {
							element.style.filter = 'blur(4px)';
							element.style.pointerEvents = 'none';
						});
						document.querySelector('.e_mail').value = '';
					} else {
						document.querySelector('.e_mail').value = '';
					}
				});
			}

			modalShow();


			function modalHide() {
				document.querySelector('.close').addEventListener('click', () => {
					document.body.style.overflow = "";
					document.querySelector('.modal').style.display = 'none';
					document.querySelectorAll('.background, .logo, .menu, section, footer').forEach((element) => {
						element.style.filter = '';
						element.style.pointerEvents = '';
					});
				});
			}

			modalHide();

			document.querySelector('.e_mail').addEventListener('keydown', (event) => {
				if (event.shiftKey) {
					document.querySelector('.e_mail').setAttribute("type", "password");
				} else { document.querySelector('.e_mail').setAttribute("type", "text"); }
			})
			/* #endregion */

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

			/* #region  UP_LETTER */
			function upLetter(sentence) {
				return sentence.split('. ')
					.map(str => str.charAt(0).toUpperCase() + str.slice(1))
					.join('. ');
			}
			/* #endregion */

		})
		.catch(function (error) {
			console.log(error, " База данных не найдена");
		});
});  //////////////////  END

