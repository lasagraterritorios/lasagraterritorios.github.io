function validarNumero(input) {
    // Elimina cualquier caracter no numérico
    input.value = input.value.replace(/[^0-9]/g, '');
}

const codigosPostales = ["28300", "28320", "28330", "28340", "28341", "28342", "28350", "28359", "28360", "28370", "28380", "28390", "28391", "28530", "28607",
    "28901", "28902", "28903", "28904", "28905", "28906", "28907", "28911", "28912", "28913", "28914", "28915", "28916", "28917", "28918", "28919", "28921", "28922",
    "28923", "28924", "28925", "28931", "28932", "28933", "28934", "28935", "28936", "28937", "28938", "28939", "28941", "28942", "28943", "28944", "28945", "28946",
    "28947", "28950", "28970", "28971", "28977", "28978", "28979", "28981", "28982", "28983", "28984", "45122", "45200", "45210", "45211", "45212", "45213", "45214",
    "45215", "45216", "45217", "45220", "45221", "45222", "45223", "45224", "45230", "45240", "45250", "45260", "45270", "45290", "45291", "45300", "45311", "45312",
    "45313", "45314", "45340", "45350", "45360", "45520", "45529", "45590", "45591", "45592", "45750", "45760"
];


function validarCodigoPostal() {
    event.preventDefault();

    // Obtén el valor del input
    const codigoPostalInput = document.getElementById("codigoPostalInput").value;

    // Verifica si el código postal está en la lista
    if (codigosPostales.includes(codigoPostalInput)) {
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
    const nuevaPaginaURL = "/info_cp.html?cp=" + codigoPostal;

    // Redirige a la nueva página
    window.location.href = nuevaPaginaURL;
}

function openModal() {
    document.querySelector("#imgModal").classList.add("show");
}

function closeModal() {
    document.querySelector("#imgModal").classList.remove("show");
}