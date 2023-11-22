function validarNumero(input) {
    // Elimina cualquier caracter no numérico
    input.value = input.value.replace(/[^0-9]/g, '');
}



const codigosPostalesGetafe = ["28901", "28902", "28903", "28904", "28905"];



function validarCodigoPostal() {
    event.preventDefault();

    // Obtén el valor del input
    const codigoPostalInput = document.getElementById("codigoPostalInput").value;

    // Verifica si el código postal está en la lista
    if (codigosPostalesGetafe.includes(codigoPostalInput)) {
        // El código postal está en la lista
        document.getElementById("mensajeError").style.display = "none";
        document.getElementById("codigoPostalInput").style.outline = "0";

        // Redirige a la página con la información del código postal
        redirigirAPaginaConInfo(codigoPostalInput);
    } else {
        // El código postal no está en la lista
        document.getElementById("mensajeError").style.display = "block";
        document.getElementById("codigoPostalInput").style.outline = "1px solid red";

    }
}

function redirigirAPaginaConInfo(codigoPostal) {
    // Construye la URL de la página con la información del código postal
    const nuevaPaginaURL = "/info_cp/info_cp.html?cp=" + codigoPostal;

    // Redirige a la nueva página
    window.location.href = nuevaPaginaURL;
}