import {
    cards
} from "./cards.js";


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

/////////////PRODUCTOS///////////////









	$(".logo").click(function(){
		document.querySelector('.logo__roca').src = `img/LOGO3.png?${Date.now()};`
		location.reload(true);
	});



////////tienda

const natural 	  = "img/sellos/natural.png";
const sin_gluten  = "img/sellos/sin_gluten.png";
const sin_lactosa = "img/sellos/sin_lactosa.png";
const aove        = "img/sellos/aove.png";
const no_sal      = "img/sellos/no_sal.png";
const picanteM    = "img/sellos/picante_mild.png"
const picanteH    = "img/sellos/picante_hot.png"
const picanteE    = "img/sellos/picante_extra.png"


axios.get('db.json')
  .then(function (response) {
    const data = JSON.parse(response.data);
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });


// const cards = [
// 	{
//       	id: 'price_1Miz3OAEMEnLyKBGotD96Yjf',
// 		name: "Hummus Chili",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Garbanzos, Agua de cocción, Aceite de oliva virgen extra: 5%. Tahini fabricación propia, Jugo de limón, Ajo, Chili en polvo, Sal, Vinagre en polvo, Comino, Goma xantana.",
// 		informacion: br(`
// 			Valor Energético: 649,57 Kj/155,14 Kcal
// 			Proteínas : 5,80 g
// 			Hidratos de carbono: 11,6 g
// 			- Azúcares 2,45 g
// 			Grasas: 11,6 g
// 			- Ácidos Grasos Saturados 1,7 g
// 			Sal 0,47 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
// 		img: "img/productos/mbote_hummus_chili.png",
// 		precio:11
//     },
// 	{
//         id: 83,
//         name: "Mousse de tomate seco",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Pasta de tomate cherry pera (elaboración propia).Tomate seco, Calabaza, Agua, Cebolla, Aceite de oliva virgen extra: 3%, Goma guar, Fibra de guisante, Almendra, Ajo, Sal, Vinagre en polvo, Pimentón Ahumado picante, Pimienta.",
// 		informacion: br(`
// 			Valor Energético: 564,84 Kj/135 Kcal
// 			Proteínas : 1,80 g
// 			Hidratos de carbono: 13,5 g
// 			- Azúcares 3,1 g
// 			Grasas: 29,23 g
// 			- Ácidos Grasos Saturados 3,80 g
// 			Sal 0,8 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
//         img: "img/productos/mbote_mousse_de_tomate_seco.png",
//         precio:82
//     },
// 	{
// 		id: "price_1MizLsAEMEnLyKBGU5CGPCnr",
// 		name: "Hummus Clasico",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Garbanzos, Agua de cocción, Aceite de oliva virgen extra: 5% Tahini fabricación propia, Jugo de limón, Ajo, Sal, Vinagre en polvo, Comino, Goma xantana.	",
// 		informacion: br(`
// 			Valor Energético: 613,4 Kj/146,5 Kcal
// 			Proteínas : 5,30 g
// 			Hidratos de carbono: 11,6 g
// 			- Azúcares 2,17 g
// 			Grasas: 8,41 g
// 			- Ácidos Grasos Saturados 1,0 g
// 			Sal 0,46 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
// 		img: "img/productos/mbote_hummus_clasico.png",
// 		precio:12
//     },
//     {
// 		id: 13,
// 		name: "Hummus Cilantro",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Garbanzos, Agua de cocción, Cilantro, Aceite de oliva virgen extra: 5%, Tahini fabricación propia, Jugo de limón, Ajo, Sal, Vinagre en polvo, Comino, Goma xantana.",
// 		informacion: br(`
// 			Valor Energético: 613,4 Kj/146,5 Kcal
// 			Proteínas : 5,30 g
// 			Hidratos de carbono: 11,6 g
// 			- Azúcares 2,17 g
// 			Grasas: 8,41 g
// 			- Ácidos Grasos Saturados 1,0 g
// 			Sal 0,46 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
// 		img: "img/productos/mbote_hummus_cilantro.png",
// 		precio:13
//     },
//     {
//       	id: 14,
//      	name: "Hummus Pimiento Asado",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Garbanzos, Agua de cocción, Pimiento rojo asado al carbón, Aceite de oliva virgen extra: 5%. Tahini fabricación propia, Jugo de limón, Ajo, Sal, Vinagre en polvo, Comino, Goma xantana.",
// 		informacion: br(`
// 			Valor Energético: 625,8 Kj/149,56 Kcal
// 			Proteínas : 5,30 g
// 			Hidratos de carbono: 10,33 g
// 				- Azúcares 2,38 g
// 			Grasas: 8,41 g
// 				- Ácidos Grasos Saturados 1,0 g
// 			Sal 0,46 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
// 		img: "img/productos/mbote_hummus_pimiento_asado.png",
// 		precio:14
//     },
//     {
// 		id: 15,
// 		name: "Hummus Tomato Seco",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Garbanzos, Agua de cocción, Tomate seco, Aceite de oliva virgen extra: 5%, Tahini fabricación propia, Jugo de limón, Ajo, Sal, Vinagre en polvo, Comino, Goma xantana.",
// 		informacion: br(`
// 			Valor Energético: 649,57 Kj/155,14 Kcal
// 			Proteínas : 5,80 g
// 			Hidratos de carbono: 11,6 g
// 			- Azúcares 2,45 g
// 			Grasas: 11,6 g
// 			- Ácidos Grasos Saturados 1,7 g
// 			Sal 0,47 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
// 		img: "img/productos/mbote_hummus_tomato_seco.png",
// 		precio:15
//     },
//     {
//         id: 21,
//         name: "Mermelada de Tomate",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate, Azúcar de caña, Limón y Goma guar.",
// 		informacion: br(`
// 			Valor Energético: 172 Kj/748 Kcal
// 			Proteínas : 0,8 g
// 			Hidratos de carbono: 36 g
// 			- Azúcares 23,6 g
// 			Grasas: 2,7 g
// 			- Ácidos Grasos Saturados 0,59 g
// 			Sal 0,13 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, natural], 
//         img: "img/productos/mbote_mermelada_de_tomate.png",
//         precio:21
//     },
//     {
//         id: 22,
//         name: "Mermelada de Pimiento",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Pimiento sweet Palermo, Azúcar de caña, Limón y goma guar.",
// 		informacion: br(`
// 			Valor Energético: 542 Kj/128 Kcal
// 			Proteínas : 0,7 g
// 			Hidratos de carbono: 30 g
// 			- Azúcares 28 g
// 			Grasas: 0,4 g
// 			- Ácidos Grasos Saturados 0,1 g
// 			Sal 0,196 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, natural],
//         img: "img/productos/mbote_mermelada_de_pimiento.png",
//         precio:22
//     },
//     {
//         id: 23,
//         name: "Mermelada de Calabaza",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Calabaza, Azúcar de caña, Limón y Goma guar.",
// 		informacion: br(`
// 			Valor Energético: 142 Kj/594 Kcal
// 			Proteínas : 0,46 g
// 			Hidratos de carbono: 36,29g
// 			- Azúcares 34,19 g
// 			Grasas: 0,21 g
// 			- Ácidos Grasos Saturados 0,0 g
// 			Sal 0,0 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, natural],
//         img: "img/productos/mbote_mermelada_de_calabaza.png",
//         precio:23
//     },
//     {
//         id: 31,
//         name: "Mousse de Berenjena",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Berenjena, Cebolla, Almendra, Aceite de oliva virgen extra: 5%, Sal, Ajo, Arroz, Fibra de guisante, Vinagre en polvo, Comino, Pimienta, Matalauva, Orégano, Canela, Pimentón.",
// 		informacion: br(`
// 			Valor Energético: 1104,77 Kj/263 Kcal
// 			Proteínas : 8,98 g
// 			Hidratos de carbono: 7,33 g
// 			- Azúcares 2,53 g
// 			Grasas: 21,98 g
// 			- Ácidos Grasos Saturados 6,10 g
// 			Sal 1,33 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
//         img: "img/productos/mbote_mousse_de_berenjena.png",
//         precio:31
//     },
//     {
//         id: 41,
//         name: "Crema de pimientos y Alcaparaz",
// 		peso: "200g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Pimiento Palermo, Cebolla, Aceite de oliva virgen extra: 7%, Vino Pedro Ximénez, Alcaparra, Sal, Pimentón picante.",
// 		informacion: br(`
// 			Valor Energético: 97,3 Kj/429.6 Kcal
// 			Proteínas : 1,4 g
// 			Hidratos de carbono: 4,1 g
// 			- Azúcares 2,0 g
// 			Grasas: 7,5 g
// 			- Ácidos Saturados 1,3 g
// 			Sal 0,4 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
//         img: "img/productos/mbote_crema_de_pimientos_y_alcaparaz.png",
//         precio:41
//     },
//     {
//         id: 51,
//         name: "Ensalada Alboran",
// 		peso: "420g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate cherry, Pimiento, Aceite de oliva virgen extra: 1%.",
// 		informacion: br(`
// 			Valor Energético 197kj/47 Kcal.
// 			Hidratos de Carbono: 7,1 g.
// 			Grasas: 1,6 g.
// 			Ácidos grasos saturados: 0,2 g.
// 			Proteinas: 1,0 g.
// 			Azúcares: 3,9 g.
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural, no_sal],
//         img: "img/productos/bote_ensalada_alboran.png",
//         precio:51
//     },
// 	{
//         id: 51,
//         name: "Tomate Entero Al Natural",
// 		peso: "420g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate coctel, Agua y Sal.",
// 		informacion: br(`
// 			Valor Energético 88 kj/21 Kcal.
// 			Proteinas: 0,9 g
// 			Hidratos de Carbono: 4,8 g
// 				- Azúcares: 3,9 g
// 			Grasas: 0,2 g
// 				- Ácidos grasos saturados: 0 g
// 			Sal: 0,01 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, natural],
//         img: "img/productos/bote_tomate_entero_al_natural.png",
//         precio:51
//     },
// 	{
//         id: 51,
//         name: "Tomate Rallado Al Natural",
// 		peso: "420g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate, Vinagre en polvo.",
// 		informacion: br(`
// 			Valor Energético 88 kj/21 Kcal.
// 			Proteinas: 0,9 g
// 			Hidratos de Carbono: 4,8 g
// 				- Azúcares: 3,9 g
// 			Grasas: 0,2 g
// 				- Ácidos grasos saturados: 0 g
// 			Sal: 0,01 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, natural, no_sal],
//         img: "img/productos/bote_tomate_rallado_al_natural.png",
//         precio:51
//     },
// 	{
//         id: 51,
//         name: "Tomate Entero Asado Al Carbón",
// 		peso: "420g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Pimiento california, Jugo de pimiento y Sal.",
// 		informacion: br(`
// 			Valor Energético 142 kj/34 Kcal.
// 			Proteinas: 1 g
// 			Hidratos de Carbono: 5,4 g
// 				- Azúcares: 4,4 g
// 			Grasas: 6 g
// 				- Ácidos grasos saturados: 2 g
// 			Sal: 0,9 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, natural],
//         img: "img/productos/bote_pimiento_entero_asado_el_carbon.png",
//         precio:51
//     },
//     {
//         id: 61,
//         name: "Pisto",
//         peso: "420g",
//         descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
//         ingredientes: "Tomate, Pimiento, Berenjena, Calabacin, AOVE:3%, Sal",
//         informacion: br(`
//         Valor energético 72kj/301Kcal.
//         Hidratos de Carbono: 5,58g.
//         Grasas: 5,63g.
//         Grasas saturadas: 0,78g.
//         Proteinas: 0,79g.
//         Azúcares: 2,44g.
//         Sal: 0,5g.
//         `),
//         sellos: [sin_gluten, sin_lactosa, aove, natural],
//         img: "img/productos/bote_pisto.png",
//         precio:61
//     },
//     {
//         id: 71,
//         name: "Salsa De Pimiento Dulce",
// 		peso: "420g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Pimiento sweet palermo, Azúcar de caña, Aceite de oliva virgen extra, Sal, Goma guar y Vinagre en polvo.",
// 		informacion: br(`
// 			Valor Energético 355,64 kj/85 Kcal.
// 			Proteinas: 2,6 g
// 			Hidratos de Carbono: 11 g
// 				- Azúcares: 2,1 g
// 			Grasas: 0,7 g
// 				- Ácidos grasos saturados: 0,2 g
// 			Sal: 1,2 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
//         img: "img/productos/bote_salsa_de_pimiento.png",
//         precio:71
//     },
//     {
//         id: 81,
//         name: "Tomate Frito Casero",
// 		peso: "420g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate, Aceite de oliva virgen extra: 3%, Sal y Azúcar de caña.",
// 		informacion: br(`
// 			Valor energético 200kj/45 Kcal.
// 			Hidratos de Carbono: 10,1 g..
// 			Grasas saturadas: 0,3 g.
// 			Proteingas: 1,1 g.
// 			Azúcares: 0,2 g.
// 			Cloruro de Sodico: 0,1 g.
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
//         img: "img/productos/bote_tomate_frito_casero.png",
//         precio:81
//     },
//     {
//         id: 82,
//         name: "Tomate Frito Casero Sabor Intenso",
// 		peso: "420g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate, Aceite de oliva virgen extra: 3%, Sal y Azúcar de caña",
// 		informacion: br(`
// 			Valor energético 200kj/45 Kcal.
// 			Hidratos de Carbono: 10,1 g..
// 			Grasas saturadas: 0,3 g.
// 			Proteingas: 1,1 g.
// 			Azúcares: 0,2 g.
// 			Cloruro de Sodico: 0,1 g.
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
//         img: "img/productos/bote_tomate_frito_casero_sabor_intenso.png",
//         precio:82
//     },
// 	{
//         id: 84,
//         name: "Salsa De Tomate con Jalapeño",
// 		peso: "230g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate, jalapeño, Aceite virgen extra, Ajo, Sal y Vinagre en polvo",
// 		informacion: br(`
// 			Valor Energético: 117 Kj/28 Kcal
// 			Proteínas : 1 g
// 			Hidratos de carbono: 3 g
// 			- Azúcares 1,3 g
// 			Grasas: 0,4 g
// 			- Ácidos Grasos Saturados 0,1 g
// 			Sal: 1 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural, picanteM],
//         img: "img/productos/sbote_salsa_de_tomate_con_jalapeno.png",
//         precio:82
//     },
// 	{
//         id: 84,
//         name: "Salsa De Pimiento con Habanero",
// 		peso: "230g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Pimiento sweet palermo, Habanero, Aceite de oliva virgen extra, Sal y Vinagre en polvo.",
// 		informacion: br(`
// 			Valor Energético: 79 Kj/19 Kcal
// 			Proteínas : 0,3 g
// 			Hidratos de carbono: 3,5 g
// 			- Azúcares 0,8 g
// 			Grasas: 0,4 g
// 			- Ácidos Grasos Saturados 0,1 g
// 			Sal 1,7 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural, picanteH],
//         img: "img/productos/sbote_salsa_de_pimiento_con_habanero.png",
//         precio:82
//     },
// 	{
//         id: 85,
//         name: "Pasta De Habanero",
// 		peso: "230g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Pimiento habanero, Limón, Agua, Aceite de oliva virgen extra y Vinagre en polvo.",
// 		informacion: br(`
// 			Valor Energético: 85 Kj/20 Kcal
// 			Proteínas : 0,72 g
// 			Hidratos de carbono: 4,75 g
// 			- Azúcares 3,01 g
// 			Grasas: 0,26 g
// 			- Ácidos Grasos Saturados 0,06 g
// 			Sal: 0,9 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural, picanteE],
//         img: "img/productos/sbote_pasta_de_habanero.png",
//         precio:82
//     },
// 	{
//         id: 85,
//         name: "Salsa de Tomate Con Pimiento Asado",
// 		peso: "230g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate , Pimiento, Cebolla, Aceite de oliva virgen extra, Sal,  Ajo,  Vinagre en polvo, Pimentón ahumado y Goma guar.",
// 		informacion: br(`
// 			Valor Energético: 347 Kj/83 Kcal
// 			Proteínas : 1,40 g
// 			Hidratos de carbono: 5,5 g
// 			- Azúcares 2,7 g
// 			Grasas: 5,2 g
// 			- Ácidos Grasos Saturados 0,5 g
// 			Sal 0,9 g
// 		`),
// 		sellos: [sin_gluten, sin_lactosa, aove, natural],
//         img: "img/productos/sbote_salsa_de_tomate_con_pimiento_asado.png",
//         precio:82
//     },
// 	{
//         id: 85,
//         name: "Salsa Barbacoa",
// 		peso: "230g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate cherry, Cebolla, Melaza de caña, Aceite de oliva virgen extra, Salsa de soja, Ajo, Vinagre en polvo, Sal, Pimentón picante, Pimentón dulce.",
// 		informacion: br(`
// 			Valor Energético: 314 Kj/75 Kcal
// 			Proteínas : 1,8 g
// 			Hidratos de carbono: 12,8 g
// 			- Azúcares 3,9 g
// 			Grasas: 1,8 g
// 			- Ácidos Grasos Saturados 0,27 g
// 			Sal 0,8 g
// 		`),
// 		sellos: [sin_lactosa, aove, natural],
//         img: "img/productos/sbote_salsa_barbacoa.png",
//         precio:82
//     },
// 	{
//         id: 85,
//         name: "Salsa Barbacoa",
// 		peso: "230g",
// 		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
// 		ingredientes: "Tomate cherry, Cebolla, Melaza de caña, Aceite de oliva virgen extra, Salsa de soja, Ajo, Vinagre en polvo, Sal, Pimentón picante, Pimentón dulce.",
// 		informacion: br(`
// 			Valor Energético: 314 Kj/75 Kcal
// 			Proteínas : 1,8 g
// 			Hidratos de carbono: 12,8 g
// 			- Azúcares 3,9 g
// 			Grasas: 1,8 g
// 			- Ácidos Grasos Saturados 0,27 g
// 			Sal 0,8 g
// 		`),
// 		sellos: [sin_lactosa, aove, natural],
//         img: "img/productos/sbote_salsa_barbacoa.png",
//         precio:82
//     }
// ];

// function br(text) {
// 	return text.replace(/\n/g, "<br>");
// }


let carrito = [[],[]];
let carritoTotal = [];

//


function createCards(id, img, name, precio, peso, descr, ingredientes, informacion, sellos, number) {
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
				Valor medio 100g de producto.
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
      	<img title = "${sellos[i].replace(/^.*[\\/]/, '').replace(/\.[^.]+$/, '').replace("_"," ")}"src = "${sellos[i]}">
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

  


});  //////////////////  END