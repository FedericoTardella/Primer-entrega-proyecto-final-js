let enviar = document.getElementById('enviar');
let resetear = document.getElementById('resetear');
let formulario = document.getElementById('formulario');
let datos = []

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
});

resetear.addEventListener('click', (e) => {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let contraseña = document.getElementById('contraseña');
    let celular = document.getElementById('celular');
    let fecha = document.getElementById('fecha');

    nombre.value = '';
    apellido.value = '';
    email.value = '';
    contraseña.value = '';
    celular.value = '';
    fecha.value = '';

});

enviar.addEventListener('click', (e) => {
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let email = document.getElementById('email');
    let contraseña = document.getElementById('contraseña');
    let celular = document.getElementById('celular');
    let fecha = document.getElementById('fecha');
    
    nombre = nombre.value;
    localStorage.setItem('nombre', nombre);

    apellido = apellido.value;
    localStorage.setItem('apellido', apellido);
    
    email = email.value;
    localStorage.setItem('email', email);

    contraseña = contraseña.value;
    localStorage.setItem('contraseña', contraseña);

    celular = celular.value;
    localStorage.setItem('celular', celular);

    fecha = fecha.value;
    localStorage.setItem('fecha', fecha);

});

datos.push(nombre,apellido,email,contraseña,celular,fecha)

datosJSON = JSON.stringify(datos)

localStorage.setItem('datos',datosJSON)

const datosBack = localStorage.getItem('datos')
const datosBackParse = JSON.parse('datosBack')

console.log(datosBackParse)