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
    // Agrega información para otros códigos postales según sea necesario
};

function mostrarInformacionPorCP() {
    const infoSection = document.getElementById("infoSection");
    const empresasSection = document.getElementById("empresasSection");

    if (informacionPorCP.hasOwnProperty(codigoPostal)) {
        console.log(true)
        const infoCP = informacionPorCP[codigoPostal];

        const enlace = `
            <p>Visita la página web: <a href="${infoCP.paginaWeb}" target="_blank">Aqui</a></p>`;

        console.log(enlace);
        const empresas = `
            <ul>
                ${infoCP.empresas.map(empresa => `
                    <li>
                        <strong>${empresa.nombre}</strong><br>
                        Dirección: ${empresa.direccion}<br>
                        Enlace a Google Maps: <a href="${empresa.googleMaps}" target="_blank">Ver en Google Maps</a>
                    </li>
                `).join('')}
            </ul>
        `;

        console.log(empresas);
        infoSection.innerHTML = enlace;
        empresasSection.innerHTML = empresas
    } else {
        console.log(false)
    }
}

window.onload = function() {
    console.log("HOla")
    mostrarInformacionPorCP();
};