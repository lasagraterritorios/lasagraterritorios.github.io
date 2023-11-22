const codigosPostalesGetafe = ["28901", "28902", "28903", "28904", "28905"];



function validarCodigoPostal() {

    // Obtén el valor del input
    const codigoPostalInput = document.getElementById("codigoPostalInput").value;

    // Verifica si el código postal está en la lista
    if (codigosPostalesGetafe.includes(codigoPostalInput)) {
        // El código postal está en la lista
        document.getElementById("mensajeError").style.display = "none";

        // Muestra un mensaje con SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Bienvenido a Getafe!',
            text: 'Código postal válido.'
        });
    } else {
        // El código postal no está en la lista
        document.getElementById("mensajeError").style.display = "block";
    }
}