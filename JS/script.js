/*
    Cuando se hacen referencias a elementos del DOM
    debes escuchar los eventos ya sea ""load"" o ""DOMContentLoaded""
    que indican a partir de que momentos esos elemtnso estan diponible

    En este caso:
    const boton = document.querySelector('.boton');
    const enlaces = document.querySelector('.enlaces-menu');
    const barras = document.querySelectorAll('.boton span');
*/

window.addEventListener('DOMContentLoaded', function() {
    const boton = document.querySelector('.boton');
    const enlaces = document.querySelector('.enlaces-menu');
    const barras = document.querySelectorAll('.boton span');
    
    boton.addEventListener('click', () => {
        enlaces.classList.toggle('activado');
        barras.forEach(child => {child.classList.toggle('animado')});
    });
});