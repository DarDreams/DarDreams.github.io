const natural 	  = "img/sellos/natural.png";
const sin_gluten  = "img/sellos/sin_gluten.png";
const sin_lactosa = "img/sellos/sin_lactosa.png";
const aove        = "img/sellos/aove.png";
const no_sal      = "img/sellos/no_sal.png";
const picanteM    = "img/sellos/picante_mild.png"
const picanteH    = "img/sellos/picante_hot.png"
const picanteE    = "img/sellos/picante_extra.png"

function br(text) {
	return text.replace(/\n/g, "<br>");
}

const cards2 = [
	{
      	id: 'price_1Miz3OAEMEnLyKBGotD96Yjf',
		name: "Hummus Chili",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Garbanzos, Agua de cocción, Aceite de oliva virgen extra: 5%. Tahini fabricación propia, Jugo de limón, Ajo, Chili en polvo, Sal, Vinagre en polvo, Comino, Goma xantana.",
		informacion: br(`
			Valor Energético: 649,57 Kj/155,14 Kcal
			Proteínas : 5,80 g
			Hidratos de carbono: 11,6 g
			- Azúcares 2,45 g
			Grasas: 11,6 g
			- Ácidos Grasos Saturados 1,7 g
			Sal 0,47 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
		img: "img/productos/mbote_hummus_chili.png",
		precio:11
    },
	{
        id: 83,
        name: "Mousse de tomate seco",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Pasta de tomate cherry pera (elaboración propia).Tomate seco, Calabaza, Agua, Cebolla, Aceite de oliva virgen extra: 3%, Goma guar, Fibra de guisante, Almendra, Ajo, Sal, Vinagre en polvo, Pimentón Ahumado picante, Pimienta.",
		informacion: br(`
			Valor Energético: 564,84 Kj/135 Kcal
			Proteínas : 1,80 g
			Hidratos de carbono: 13,5 g
			- Azúcares 3,1 g
			Grasas: 29,23 g
			- Ácidos Grasos Saturados 3,80 g
			Sal 0,8 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
        img: "img/productos/mbote_mousse_de_tomate_seco.png",
        precio:82
    },
	{
		id: "price_1MizLsAEMEnLyKBGU5CGPCnr",
		name: "Hummus Clasico",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Garbanzos, Agua de cocción, Aceite de oliva virgen extra: 5% Tahini fabricación propia, Jugo de limón, Ajo, Sal, Vinagre en polvo, Comino, Goma xantana.	",
		informacion: br(`
			Valor Energético: 613,4 Kj/146,5 Kcal
			Proteínas : 5,30 g
			Hidratos de carbono: 11,6 g
			- Azúcares 2,17 g
			Grasas: 8,41 g
			- Ácidos Grasos Saturados 1,0 g
			Sal 0,46 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
		img: "img/productos/mbote_hummus_clasico.png",
		precio:12
    },
    {
		id: 13,
		name: "Hummus Cilantro",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Garbanzos, Agua de cocción, Cilantro, Aceite de oliva virgen extra: 5%, Tahini fabricación propia, Jugo de limón, Ajo, Sal, Vinagre en polvo, Comino, Goma xantana.",
		informacion: br(`
			Valor Energético: 613,4 Kj/146,5 Kcal
			Proteínas : 5,30 g
			Hidratos de carbono: 11,6 g
			- Azúcares 2,17 g
			Grasas: 8,41 g
			- Ácidos Grasos Saturados 1,0 g
			Sal 0,46 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
		img: "img/productos/mbote_hummus_cilantro.png",
		precio:13
    },
    {
      	id: 14,
     	name: "Hummus Pimiento Asado",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Garbanzos, Agua de cocción, Pimiento rojo asado al carbón, Aceite de oliva virgen extra: 5%. Tahini fabricación propia, Jugo de limón, Ajo, Sal, Vinagre en polvo, Comino, Goma xantana.",
		informacion: br(`
			Valor Energético: 625,8 Kj/149,56 Kcal
			Proteínas : 5,30 g
			Hidratos de carbono: 10,33 g
				- Azúcares 2,38 g
			Grasas: 8,41 g
				- Ácidos Grasos Saturados 1,0 g
			Sal 0,46 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
		img: "img/productos/mbote_hummus_pimiento_asado.png",
		precio:14
    },
    {
		id: 15,
		name: "Hummus Tomato Seco",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Garbanzos, Agua de cocción, Tomate seco, Aceite de oliva virgen extra: 5%, Tahini fabricación propia, Jugo de limón, Ajo, Sal, Vinagre en polvo, Comino, Goma xantana.",
		informacion: br(`
			Valor Energético: 649,57 Kj/155,14 Kcal
			Proteínas : 5,80 g
			Hidratos de carbono: 11,6 g
			- Azúcares 2,45 g
			Grasas: 11,6 g
			- Ácidos Grasos Saturados 1,7 g
			Sal 0,47 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
		img: "img/productos/mbote_hummus_tomato_seco.png",
		precio:15
    },
    {
        id: 21,
        name: "Mermelada de Tomate",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate, Azúcar de caña, Limón y Goma guar.",
		informacion: br(`
			Valor Energético: 172 Kj/748 Kcal
			Proteínas : 0,8 g
			Hidratos de carbono: 36 g
			- Azúcares 23,6 g
			Grasas: 2,7 g
			- Ácidos Grasos Saturados 0,59 g
			Sal 0,13 g
		`),
		sellos: [sin_gluten, sin_lactosa, natural], 
        img: "img/productos/mbote_mermelada_de_tomate.png",
        precio:21
    },
    {
        id: 22,
        name: "Mermelada de Pimiento",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Pimiento sweet Palermo, Azúcar de caña, Limón y goma guar.",
		informacion: br(`
			Valor Energético: 542 Kj/128 Kcal
			Proteínas : 0,7 g
			Hidratos de carbono: 30 g
			- Azúcares 28 g
			Grasas: 0,4 g
			- Ácidos Grasos Saturados 0,1 g
			Sal 0,196 g
		`),
		sellos: [sin_gluten, sin_lactosa, natural],
        img: "img/productos/mbote_mermelada_de_pimiento.png",
        precio:22
    },
    {
        id: 23,
        name: "Mermelada de Calabaza",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Calabaza, Azúcar de caña, Limón y Goma guar.",
		informacion: br(`
			Valor Energético: 142 Kj/594 Kcal
			Proteínas : 0,46 g
			Hidratos de carbono: 36,29g
			- Azúcares 34,19 g
			Grasas: 0,21 g
			- Ácidos Grasos Saturados 0,0 g
			Sal 0,0 g
		`),
		sellos: [sin_gluten, sin_lactosa, natural],
        img: "img/productos/mbote_mermelada_de_calabaza.png",
        precio:23
    },
    {
        id: 31,
        name: "Mousse de Berenjena",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Berenjena, Cebolla, Almendra, Aceite de oliva virgen extra: 5%, Sal, Ajo, Arroz, Fibra de guisante, Vinagre en polvo, Comino, Pimienta, Matalauva, Orégano, Canela, Pimentón.",
		informacion: br(`
			Valor Energético: 1104,77 Kj/263 Kcal
			Proteínas : 8,98 g
			Hidratos de carbono: 7,33 g
			- Azúcares 2,53 g
			Grasas: 21,98 g
			- Ácidos Grasos Saturados 6,10 g
			Sal 1,33 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
        img: "img/productos/mbote_mousse_de_berenjena.png",
        precio:31
    },
    {
        id: 41,
        name: "Crema de pimientos y Alcaparaz",
		peso: "200g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Pimiento Palermo, Cebolla, Aceite de oliva virgen extra: 7%, Vino Pedro Ximénez, Alcaparra, Sal, Pimentón picante.",
		informacion: br(`
			Valor Energético: 97,3 Kj/429.6 Kcal
			Proteínas : 1,4 g
			Hidratos de carbono: 4,1 g
			- Azúcares 2,0 g
			Grasas: 7,5 g
			- Ácidos Saturados 1,3 g
			Sal 0,4 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
        img: "img/productos/mbote_crema_de_pimientos_y_alcaparaz.png",
        precio:41
    },
    {
        id: 51,
        name: "Ensalada Alboran",
		peso: "420g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate cherry, Pimiento, Aceite de oliva virgen extra: 1%.",
		informacion: br(`
			Valor Energético 197kj/47 Kcal.
			Hidratos de Carbono: 7,1 g.
			Grasas: 1,6 g.
			Ácidos grasos saturados: 0,2 g.
			Proteinas: 1,0 g.
			Azúcares: 3,9 g.
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural, no_sal],
        img: "img/productos/bote_ensalada_alboran.png",
        precio:51
    },
	{
        id: 51,
        name: "Tomate Entero Al Natural",
		peso: "420g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate coctel, Agua y Sal.",
		informacion: br(`
			Valor Energético 88 kj/21 Kcal.
			Proteinas: 0,9 g
			Hidratos de Carbono: 4,8 g
				- Azúcares: 3,9 g
			Grasas: 0,2 g
				- Ácidos grasos saturados: 0 g
			Sal: 0,01 g
		`),
		sellos: [sin_gluten, sin_lactosa, natural],
        img: "img/productos/bote_tomate_entero_al_natural.png",
        precio:51
    },
	{
        id: 51,
        name: "Tomate Rallado Al Natural",
		peso: "420g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate, Vinagre en polvo.",
		informacion: br(`
			Valor Energético 88 kj/21 Kcal.
			Proteinas: 0,9 g
			Hidratos de Carbono: 4,8 g
				- Azúcares: 3,9 g
			Grasas: 0,2 g
				- Ácidos grasos saturados: 0 g
			Sal: 0,01 g
		`),
		sellos: [sin_gluten, sin_lactosa, natural, no_sal],
        img: "img/productos/bote_tomate_rallado_al_natural.png",
        precio:51
    },
	{
        id: 51,
        name: "Tomate Entero Asado Al Carbón",
		peso: "420g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Pimiento california, Jugo de pimiento y Sal.",
		informacion: br(`
			Valor Energético 142 kj/34 Kcal.
			Proteinas: 1 g
			Hidratos de Carbono: 5,4 g
				- Azúcares: 4,4 g
			Grasas: 6 g
				- Ácidos grasos saturados: 2 g
			Sal: 0,9 g
		`),
		sellos: [sin_gluten, sin_lactosa, natural],
        img: "img/productos/bote_pimiento_entero_asado_el_carbon.png",
        precio:51
    },
    {
        id: 61,
        name: "Pisto",
        peso: "420g",
        descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
        ingredientes: "Tomate, Pimiento, Berenjena, Calabacin, AOVE:3%, Sal",
        informacion: br(`
        Valor energético 72kj/301Kcal.
        Hidratos de Carbono: 5,58g.
        Grasas: 5,63g.
        Grasas saturadas: 0,78g.
        Proteinas: 0,79g.
        Azúcares: 2,44g.
        Sal: 0,5g.
        `),
        sellos: [sin_gluten, sin_lactosa, aove, natural],
        img: "img/productos/bote_pisto.png",
        precio:61
    },
    {
        id: 71,
        name: "Salsa De Pimiento Dulce",
		peso: "420g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Pimiento sweet palermo, Azúcar de caña, Aceite de oliva virgen extra, Sal, Goma guar y Vinagre en polvo.",
		informacion: br(`
			Valor Energético 355,64 kj/85 Kcal.
			Proteinas: 2,6 g
			Hidratos de Carbono: 11 g
				- Azúcares: 2,1 g
			Grasas: 0,7 g
				- Ácidos grasos saturados: 0,2 g
			Sal: 1,2 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
        img: "img/productos/bote_salsa_de_pimiento.png",
        precio:71
    },
    {
        id: 81,
        name: "Tomate Frito Casero",
		peso: "420g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate, Aceite de oliva virgen extra: 3%, Sal y Azúcar de caña.",
		informacion: br(`
			Valor energético 200kj/45 Kcal.
			Hidratos de Carbono: 10,1 g..
			Grasas saturadas: 0,3 g.
			Proteingas: 1,1 g.
			Azúcares: 0,2 g.
			Cloruro de Sodico: 0,1 g.
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
        img: "img/productos/bote_tomate_frito_casero.png",
        precio:81
    },
    {
        id: 82,
        name: "Tomate Frito Casero Sabor Intenso",
		peso: "420g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate, Aceite de oliva virgen extra: 3%, Sal y Azúcar de caña",
		informacion: br(`
			Valor energético 200kj/45 Kcal.
			Hidratos de Carbono: 10,1 g..
			Grasas saturadas: 0,3 g.
			Proteingas: 1,1 g.
			Azúcares: 0,2 g.
			Cloruro de Sodico: 0,1 g.
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
        img: "img/productos/bote_tomate_frito_casero_sabor_intenso.png",
        precio:82
    },
	{
        id: 84,
        name: "Salsa De Tomate con Jalapeño",
		peso: "230g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate, jalapeño, Aceite virgen extra, Ajo, Sal y Vinagre en polvo",
		informacion: br(`
			Valor Energético: 117 Kj/28 Kcal
			Proteínas : 1 g
			Hidratos de carbono: 3 g
			- Azúcares 1,3 g
			Grasas: 0,4 g
			- Ácidos Grasos Saturados 0,1 g
			Sal: 1 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural, picanteM],
        img: "img/productos/sbote_salsa_de_tomate_con_jalapeno.png",
        precio:82
    },
	{
        id: 84,
        name: "Salsa De Pimiento con Habanero",
		peso: "230g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Pimiento sweet palermo, Habanero, Aceite de oliva virgen extra, Sal y Vinagre en polvo.",
		informacion: br(`
			Valor Energético: 79 Kj/19 Kcal
			Proteínas : 0,3 g
			Hidratos de carbono: 3,5 g
			- Azúcares 0,8 g
			Grasas: 0,4 g
			- Ácidos Grasos Saturados 0,1 g
			Sal 1,7 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural, picanteH],
        img: "img/productos/sbote_salsa_de_pimiento_con_habanero.png",
        precio:82
    },
	{
        id: 85,
        name: "Pasta De Habanero",
		peso: "230g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Pimiento habanero, Limón, Agua, Aceite de oliva virgen extra y Vinagre en polvo.",
		informacion: br(`
			Valor Energético: 85 Kj/20 Kcal
			Proteínas : 0,72 g
			Hidratos de carbono: 4,75 g
			- Azúcares 3,01 g
			Grasas: 0,26 g
			- Ácidos Grasos Saturados 0,06 g
			Sal: 0,9 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural, picanteE],
        img: "img/productos/sbote_pasta_de_habanero.png",
        precio:82
    },
	{
        id: 85,
        name: "Salsa de Tomate Con Pimiento Asado",
		peso: "230g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate , Pimiento, Cebolla, Aceite de oliva virgen extra, Sal,  Ajo,  Vinagre en polvo, Pimentón ahumado y Goma guar.",
		informacion: br(`
			Valor Energético: 347 Kj/83 Kcal
			Proteínas : 1,40 g
			Hidratos de carbono: 5,5 g
			- Azúcares 2,7 g
			Grasas: 5,2 g
			- Ácidos Grasos Saturados 0,5 g
			Sal 0,9 g
		`),
		sellos: [sin_gluten, sin_lactosa, aove, natural],
        img: "img/productos/sbote_salsa_de_tomate_con_pimiento_asado.png",
        precio:82
    },
	{
        id: 85,
        name: "Salsa Barbacoa",
		peso: "230g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate cherry, Cebolla, Melaza de caña, Aceite de oliva virgen extra, Salsa de soja, Ajo, Vinagre en polvo, Sal, Pimentón picante, Pimentón dulce.",
		informacion: br(`
			Valor Energético: 314 Kj/75 Kcal
			Proteínas : 1,8 g
			Hidratos de carbono: 12,8 g
			- Azúcares 3,9 g
			Grasas: 1,8 g
			- Ácidos Grasos Saturados 0,27 g
			Sal 0,8 g
		`),
		sellos: [sin_lactosa, aove, natural],
        img: "img/productos/sbote_salsa_barbacoa.png",
        precio:82
    },
	{
        id: 85,
        name: "Salsa Barbacoa",
		peso: "230g",
		descr: "Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum harum labore error quae.",
		ingredientes: "Tomate cherry, Cebolla, Melaza de caña, Aceite de oliva virgen extra, Salsa de soja, Ajo, Vinagre en polvo, Sal, Pimentón picante, Pimentón dulce.",
		informacion: br(`
			Valor Energético: 314 Kj/75 Kcal
			Proteínas : 1,8 g
			Hidratos de carbono: 12,8 g
			- Azúcares 3,9 g
			Grasas: 1,8 g
			- Ácidos Grasos Saturados 0,27 g
			Sal 0,8 g
		`),
		sellos: [sin_lactosa, aove, natural],
        img: "img/productos/sbote_salsa_barbacoa.png",
        precio:82
    }
];


export {cards2}