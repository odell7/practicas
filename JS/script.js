const boton = document.querySelector('.boton');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.boton span');

boton.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});