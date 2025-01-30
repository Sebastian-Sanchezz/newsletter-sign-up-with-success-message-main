const form = document.getElementById('form-subscribe');

const btnCerrar = document.getElementById('btn-ocultar');
const inputCorreo = document.getElementById('correo-formulario');

const contenedorFormulario = document.getElementById('contenedor-formulario');
const contenedorExito = document.getElementById('contenedor-exito');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (inputCorreo.value === '') {
        alert('Debes ingresar un correo');
    }else {
        correoSuscripcion.textContent = inputCorreo.value;
        contenedorFormulario.style.display = 'none';
        contenedorExito.style.display = 'flex';

        btnCerrar.addEventListener('click', () => {
            contenedorFormulario.style.display = 'flex';
            contenedorExito.style.display = 'none';

            inputCorreo.value = '';
        });
    }
})