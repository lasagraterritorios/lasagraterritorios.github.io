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



function mostrarInformacionPorCP() {
    fetch('territories.json')
        .then(response => response.json())
        .then(data => {
                // Usa la información cargada desde el archivo JSON
                const informacionPorCP = data;
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
    });
}




function mostrarInformacionPorCP() {
    
}



window.onload = function() {
    mostrarInformacionPorCP();
    var frame = document.querySelector("iframe");
    console.log(frame)
    var html2 = document.querySelector("html.no-js");
    console.log(html2)
};