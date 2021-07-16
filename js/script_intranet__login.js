document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);

let contenedor_login_register = document.querySelector(".contenedor__login-register");
let formulario_login = document.querySelector(".formulario__login");
let formulario_register = document.querySelector(".formulario__register");
let caja_trasera_login = document.querySelector(".caja__trasera-login");
let caja_trasera_register = document.querySelector(".caja__trasera-register");

function iniciarSesion() {
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity  = "0";

}

function register() {
    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity  = "1";

} 

//formulario para entrar dosente

let botondos = document.getElementById("entrardos");
let userdocente;
let contraseñadocente;

function entrasdosente(){
    userdocente = document.getElementById("usuariodos").value;
    contraseñadocente = document.getElementById("contraseñados").value;
    array_correo_dos= ["correo@dos.1", "correo@dos.2", "correo@dos.3"];
    array_password_dos= ["contraseña1", "contraseña2", "contraseña3"];

    for (let i = 0; i < array_correo_dos.length, array_password_dos.length; i++) {
        if(array_correo_dos[0] == userdocente && array_password_dos[0] == contraseñadocente){
            window.location.href = 'intranet_docente.html'
        }
        else if(array_correo_dos[1] == userdocente && array_password_dos[1] == contraseñadocente){
            window.location.href = 'intranet_docente.html'
        }
        else if(array_correo_dos[2] == userdocente && array_password_dos[2] == contraseñadocente){
            window.location.href = 'intranet_docente.html'
        } else{
            alert("usuario o contraseña inválido(s)");
        }
        break; 
    }
}

botondos.addEventListener("click", entrasdosente);


//formulario entrar alumno

let botonAlum = document.getElementById("entraralum");
let userAlum;
let contraseñaAlum;

function entrasalumno(){
    userAlum = document.getElementById("usuarioalum").value;
    contraseñaAlum = document.getElementById("contraseñaalum").value;
    array_correo_Alum = ["correo@alum.1", "correo@alum.2", "correo@alum.3"];
    array_password_Alum = ["contraseña11", "contraseña22", "contraseña33"];

    for (let i = 0; i < array_correo_Alum.length, array_password_Alum.length; i++) {
        if(array_correo_Alum[0] == userAlum && array_password_Alum[0] == contraseñaAlum){
            window.location.href = 'intranet_alumno.html'
        }
        else if(array_correo_Alum[1] == userAlum && array_password_Alum[1] == contraseñaAlum){
            window.location.href = 'intranet_alumno.html'
        }
        else if(array_correo_Alum[2] == userAlum && array_password_Alum[2] == contraseñaAlum){
            window.location.href = 'intranet_alumno.html'
        } else{
            alert("usuario o contraseña inválido(s)");
        }
        break; 
    }
}

botonAlum.addEventListener("click", entrasalumno);