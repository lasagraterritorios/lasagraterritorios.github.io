function obtenerCodigoPostalDeURL() {
    // Obtiene la cadena de consulta de la URL
    const queryString = window.location.search;

    // Crea un objeto URLSearchParams para facilitar la obtención de parámetros de consulta
    const urlParams = new URLSearchParams(queryString);

    // Obtiene el valor del parámetro 'cp'
    const codigoPostal = urlParams.get('cp');

    return codigoPostal;
}

const codigoPostal = obtenerCodigoPostalDeURL();

// Establece el título de la página con el código postal
document.title = "Info de " + codigoPostal
document.getElementById("codigoPostal").innerText = codigoPostal;


const informacionPorCP = {
    "28300": {
        paginaWeb: "",
        empresas: [
            { nombre: "Boutique Donaire (Ana Sousa - Cuatro De Salme C.B.)", direccion: "C/ Stuart, 106", googleMaps: "https://maps.google.com/?q=Calle+Stuart,+106,+28300+Aranjuez" },
            { nombre: "Vanesa Shop", direccion: "Calle Stuart 76", googleMaps: "https://maps.google.com/?q=Calle+Stuart,+76,+28300+Aranjuez" },
        ]
    },
    "28320": {
        paginaWeb: "",
        empresas: [
            { nombre: "Alves & Santos sl Contenedores", direccion: "C/ Pablo Picasso 1", googleMaps: "https://maps.google.com/?q=Calle+Pablo+Picasso,1,28320,Pinto" },
            { nombre: "Talleres El Brasileño 2009 Sl.", direccion: "C/ Fuentevieja, 41", googleMaps: "https://maps.google.com/?q=Calle+Fuentevieja,41,28320,Pinto" },
            { nombre: "Henrique Guedes SL", direccion: "Ctra Pinto-San Martín de la Vega Km 1 Nave26", googleMaps: "https://maps.google.com/?q=Ctra+Pinto-San+Mart%C3%ADn+de+la+Vega+Km+1+Nave26,28320,Pinto" }
        ]
    },
    "28330": {
        paginaWeb: "",
        empresas: [
            { nombre: "Gaseosa La Portuguesa S.L.", direccion: "C/ Uranio (Pg Aimayr Cl), 16", googleMaps: "https://maps.google.com/?q=Calle+Uranio+(Pg+Aimayr+Cl),+16,28330,San+Mart%C3%ADn+de+la+Vega" }
        ]
    },
    "28340": {
        paginaWeb: "",
        empresas: [
            { nombre: "LAR SERVICIOS INTEGRALES PARA LA EMPRESA Y EL COMERCIO SL", direccion: "Avda Del, Mediterraneo 61 3º A", googleMaps: "https://maps.google.com/?q=Avda+Del,+Mediterraneo+61+3%C2%BA+A,28340,Valdemoro" }
        ]
    },
    "28341": {
        paginaWeb: "",
        empresas: [
            { nombre: "Brasil Minerales Sl.", direccion: "C/ Ulises, 20", googleMaps: "https://maps.google.com/?q=Calle+Ulises,20,28341,Valdemoro" },
            { nombre: "Tartas de Ana Bakery", direccion: "Av. del Mar Mediterráneo, 103", googleMaps: "https://maps.google.com/?q=Av.+del+Mar+Mediterr%C3%A1neo,103,28341,Valdemoro" }
        ]
    },
    "28342": {
        paginaWeb: "",
        empresas: [
            { nombre: "Spaciu's Peluqueria y estética", direccion: "C/ Negritas, 28", googleMaps: "https://maps.google.com/?q=Calle+Negritas,28,28342,Valdemoro" },
            { nombre: "Pollos Picapollo", direccion: "C/ Eloy Gonzalo, 9", googleMaps: "https://maps.google.com/?q=Calle+Eloy+Gonzalo,9,28342,Valdemoro" },
            { nombre: "Bar Cafetería Ely", direccion: "C/ Ruiz de Alda, 43", googleMaps: "https://maps.google.com/?q=Calle+Ruiz+de+Alda,43,28342,Valdemoro" },
            { nombre: "Cafeteria Restaurante Portugal C.b.", direccion: "C/ Miguel Hernandez, 9", googleMaps: "https://maps.google.com/?q=Calle+Miguel+Hernandez,9,28342,Valdemoro" },
            { nombre: "DuchaCar Tintado de Lunas", direccion: "Av/ Madrid, 11", googleMaps: "https://maps.google.com/?q=Av/Madrid,11,28342,Valdemoro" },
            { nombre: "Patricia Nails", direccion: "Calle Ruiz de Alda 19", googleMaps: "https://maps.google.com/?q=Calle+Ruiz+de+Alda,19,28342,Valdemoro" }
        ]
    },
    "28343": {
        paginaWeb: "",
        empresas: [
            { nombre: "Confeccoes Texteis Do Brasil S.l.", direccion: "C/ Gran Canaria, 25", googleMaps: "https://maps.google.com/?q=Calle+Gran+Canaria,25,28343,Valdemoro" }
        ]
    },
    "28350": {
        paginaWeb: "",
        empresas: [
            { nombre: "Xodo Brasileiro Sl.", direccion: "C/ Jeronimo Del Moral, 69", googleMaps: "https://maps.google.com/?q=Calle+Jeronimo+Del+Moral,69,28350,Ciempozuelos" },
            { nombre: "Zetta Movil Ciempozuelos", direccion: "Pl. de Ventura Rodríguez, 14, local 2", googleMaps: "https://maps.google.com/?q=Pl.+de+Ventura+Rodr%C3%ADguez,14,local+2,28350,Ciempozuelos" }
        ]
    },
    "28901": {
        paginaWeb: "https://www.mcmxiv.com/alba/print-mk?territory=4087,725549,0,d21274b8&&nv&address_only=0&m=1&o=1&l=1&d=1&c_n=1&c_t=1&c_l=1&c_nt=1&g=0&cl=1&clm=20&clss=1&st=1,2,3",
        empresas: [
            { nombre: "Kaisara moda Brasileña", direccion: "C/ San vicente 13", googleMaps: "https://maps.google.com/?q=Calle+San+Vicente,13,28901,Getafe" },
            { nombre: "Mocca Café", direccion: "Calle Toledo, 1", googleMaps: "https://maps.google.com/?q=Calle+Toledo,1,28901,Getafe" },
            { nombre: "M Couto Alves Construcciones Sl", direccion: "C/ Madrid 14 1º B", googleMaps: "https://maps.google.com/?q=Calle+Madrid,14,1%C2%BA+B,28901,Getafe" },
            { nombre: "Peluquería Victoria", direccion: "C. Pizarro, 2", googleMaps: "https://maps.google.com/?q=Calle+Pizarro,2,28902,Getafe" },
            { nombre: "cafe moreno", direccion: "Escaño 38", googleMaps: "https://maps.google.com/?q=Esca%C3%B1o,38,28902,Getafe" },
            { nombre: "La cocina de María", direccion: "C/ Camelias, 5", googleMaps: "https://maps.google.com/?q=Calle+Camelias,5,28903,Getafe" },
            { nombre: "Locutorio Cabo Verde S.l.", direccion: "Av. de Los Angeles, 65", googleMaps: "https://maps.google.com/?q=Av.+de+Los+Angeles,65,28903,Getafe" },
            { nombre: "Vieira & Ferreira", direccion: "C/ Artillería, 1, 5A", googleMaps: "https://maps.google.com/?q=Calle+Artiller%C3%ADa,1,5A,28903,Getafe" },
            { nombre: "La Mariposa Edinfa", direccion: "Paseo Maria Lejarra 6", googleMaps: "https://maps.google.com/?q=Paseo+Maria+Lejarra,6,28905,Getafe" }
        ]
    },
    "28911": {
        paginaWeb: "",
        empresas: [
            { nombre: "Avenida Brasil Rodizio", direccion: "El Charco 3", googleMaps: "https://maps.google.com/?q=El+Charco,3,28911,Leganes" },
            { nombre: "Bedecar Sa", direccion: "Plaza Ventura Rodriguez, 3", googleMaps: "https://maps.google.com/?q=Plaza+Ventura+Rodriguez,3,28911,Leganés" },
            { nombre: "CASA GUSMAO FERRETERIA - PINTURA - BRICOLAJE", direccion: "C. Puerto de Pajares, 20", googleMaps: "https://maps.google.com/?q=Calle+Puerto+de+Pajares,20,28911,Leganés" },
            { nombre: "Bissauferros Sl.", direccion: "Av. Doctor Martin-Vegue, 2", googleMaps: "https://maps.google.com/?q=Av.+Doctor+Martin-Vegue,2,28912,Leganés" },
            { nombre: "Sintra Instalaciones S.L.", direccion: "C/ de La Alcarria, 18", googleMaps: "https://maps.google.com/?q=Calle+de+La+Alcarria,18,28915,Leganés" },
            { nombre: "Juan Sousa SL", direccion: "Av/ Euskadi, NAVE 7 (Polígono)", googleMaps: "https://maps.google.com/?q=Av/Euskadi,NAVE+7+(Pol%C3%ADgono),28917,Leganés" },
            { nombre: "Editora Brasil Vox C.b.", direccion: "C/ Haya, 70", googleMaps: "https://maps.google.com/?q=Calle+Haya,70,28918,Leganes" }
        ]
    },
    "28921": {
        paginaWeb: "",
        empresas: [
            { nombre: "Locutorio MoneyGram", direccion: "C/ Badajoz, 1-3", googleMaps: "https://maps.google.com/?q=Calle+Badajoz,1-3,28921,Alcorcón" }
        ]
    },
    "28922": {
        paginaWeb: "",
        empresas: [
            { nombre: "Río Samba Show", direccion: "C/ Fuente Cisneros, 68", googleMaps: "https://maps.google.com/?q=Calle+Fuente+Cisneros,68,28922,Alcorcón" }
        ]
    },
    "28925": {
        paginaWeb: "",
        empresas: [
            { nombre: "Roes Futuro Sl Monofasica Angola Sa Ute Ley 18/1982", direccion: "C/ Autovia M-40, 5", googleMaps: "https://maps.google.com/?q=Calle+Autovia+M-40,5,28925,Alcorcón" },
            { nombre: "Praia Verde Investments Sl.", direccion: "C/ Avenida M-40, 21", googleMaps: "https://maps.google.com/?q=Calle+Avenida+M-40,21,28925,Alcorcón" }
        ]
    },
    "28933": {
        paginaWeb: "",
        empresas: [
            { nombre: "Toda Bonita Peluqueria Brasileña", direccion: "Juan de Juanes 1", googleMaps: "https://maps.google.com/?q=Juan+de+Juanes,1,28933,Mostoles" }
        ]
    },
    "28939": {
        paginaWeb: "",
        empresas: [
            { nombre: "Gusto De Brasil Sl.", direccion: "Calle Galileo Galilei, 40", googleMaps: "https://maps.google.com/?q=Calle+Galileo+Galilei,40,28939,Arroyomolinos" }
        ]
    },
    "28942": {
        paginaWeb: "",
        empresas: [
            { nombre: "M3 CAR", direccion: "C/ mostoles, 93", googleMaps: "https://maps.google.com/?q=Calle+mostoles,93,28942,Fuenlabrada" }
        ]
    },
    "28971": {
        paginaWeb: "",
        empresas: [
            { nombre: "A Mercadoria", direccion: "avd Humanes, 187", googleMaps: "https://maps.google.com/?q=avd+Humanes,187,28971,Griñon" }
        ]
    },
    "28977": {
        paginaWeb: "",
        empresas: [
            { nombre: "Portugalia 2006 S.l.", direccion: "C/ Lleida, 18", googleMaps: "https://maps.google.com/?q=Calle+Lleida,18,28977,Casarrubuelos" }
        ]
    },
    "28982": {
        paginaWeb: "",
        empresas: [
            { nombre: "Taberna La Mar", direccion: "C/ Jaime I el Conquistador, 41", googleMaps: "https://maps.google.com/?q=Calle+Jaime+I+el+Conquistador,41,28982,Parla" }
        ]
    }
};

function mostrarInformacionPorCP() {
    const infoSection = document.getElementById("infoSection");
    const empresasSection = document.getElementById("tablaDeEmpresas");

    if (informacionPorCP.hasOwnProperty(codigoPostal)) {
        console.log(true)
        const infoCP = informacionPorCP[codigoPostal];

        const enlace = `
            <iframe src="${infoCP.paginaWeb}" frameborder="0" width="100%" height="400px"></iframe>
            <div class="territory-buttons">
            <a href="${infoCP.paginaWeb}" target="_blank"><i class="fa-regular fa-eye"></i><span data-translate-key="territory_alba_link"></span></a>
            <a href="https://maps.google.com/?q=${codigoPostal}" target="_blank"><i class="fa-solid fa-diamond-turn-right"></i> <span data-translate-key="territory_googlemaps_link"></span></a>
            </div> `;

        console.log(enlace);
        infoSection.innerHTML = enlace;
        if (infoCP.empresas && infoCP.empresas.length > 0) {
            const empresas = `
                ${infoCP.empresas.map(empresa => `
                <tr>
                            <td>${empresa.nombre}</td>
                            <td>${empresa.direccion}</td>
                            <td><a href="${empresa.googleMaps}" target="_blank"><i class="fa-solid fa-map-location" style="color:black;"></i></a></td>
                        </tr>
                `).join('')}
        `;

        empresasSection.innerHTML = empresas;

        } else {
            console.log("vacio")
            empresasSection.closest(".col-md-6").style.display = "none";
            empresasSection.closest("section").querySelector("#empresasSection").innerText = "No hay empresas asignadas a este territorio";

        }       
       
    } else {
        console.log(false)
    }
}



window.onload = function() {
    mostrarInformacionPorCP();
    var frame = document.querySelector("iframe");
    console.log(frame)
    var html2 = document.querySelector("html.no-js");
    console.log(html2)
};