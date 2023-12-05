document.addEventListener("DOMContentLoaded", function() {
    // Muestra el modal al cargar la página
    showLoadingModal();

    // Simula un cambio de ventana después de 3 segundos
    setTimeout(function() {
        // Oculta el modal después del tiempo especificado (3 segundos)
        hideLoadingModal();
    }, 1500);
});

function showLoadingModal() {
    var modal = document.getElementById("loadingModal");
    modal.style.display = "block";
}

function hideLoadingModal() {
    var modal = document.getElementById("loadingModal");
    modal.style.display = "none";
}