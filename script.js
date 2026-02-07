function abrirModal(elemento) {
    const mensaje = elemento.getAttribute('data-mensaje');
    const autor = elemento.getAttribute('data-autor');

    document.getElementById('modal-texto').innerText = mensaje;
    document.getElementById('modal-autor').innerText = autor;

    document.getElementById('miModal').style.display = "block";
}

function cerrarModal() {
    document.getElementById('miModal').style.display = "none";
}

window.onclick = function(event) {
    const modal = document.getElementById('miModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}