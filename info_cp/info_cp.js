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
    "28901": {
        paginaWeb: "https://www.mcmxiv.com/alba/print-mk?territory=4087,725549,0,d21274b8&&nv&address_only=0&m=1&o=1&l=1&d=1&c_n=1&c_t=1&c_l=1&c_nt=1&g=0&cl=1&clm=20&clss=1&st=1,2,3",
        empresas: [
            { nombre: "Empresa 1", direccion: "Calle 1, Madrid", googleMaps: "https://maps.google.com/?q=Calle1,Madrid" },
            { nombre: "Empresa 2", direccion: "Calle 2, Madrid", googleMaps: "https://maps.google.com/?q=Calle2,Madrid" }
        ]
    },
    "28902": {
        paginaWeb: "https://www.mcmxiv.com/alba/print-mk?territory=4087,725554,0,d4b9e33c&&nv&address_only=0&m=1&o=1&l=1&d=1&c_n=1&c_t=1&c_l=1&c_nt=1&g=0&cl=1&clm=20&clss=1&st=1,2,3",
        empresas: []
    },
    // Agrega información para otros códigos postales según sea necesario
};

function mostrarInformacionPorCP() {
    const infoSection = document.getElementById("infoSection");
    const empresasSection = document.getElementById("tablaDeEmpresas");

    if (informacionPorCP.hasOwnProperty(codigoPostal)) {
        console.log(true)
        const infoCP = informacionPorCP[codigoPostal];

        const enlace = `
            <p>Accede a traves de Alba <a href="${infoCP.paginaWeb}" target="_blank">Aqui</a></p>
            <p>Accede a través de Google Maps <a href="https://maps.google.com/?q=${codigoPostal}" target="_blank">Aqui</a></p> `;

        console.log(enlace);
        infoSection.innerHTML = enlace;
        if (infoCP.empresas && infoCP.empresas.length > 0) {
            const empresas = `
                ${infoCP.empresas.map(empresa => `
                <tr>
                            <td>${empresa.nombre}</td>
                            <td>${empresa.direccion}</td>
                            <td><a href="${empresa.googleMaps}" target="_blank">Mapa</a></p></td>
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
    console.log("HOla")
    mostrarInformacionPorCP();
};