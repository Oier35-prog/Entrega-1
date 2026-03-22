function contacto() {
    let nombreCliente = document.getElementsByName("cliente")[0].value;
    let nombreEmailEmpresa = document.getElementsByName("email_empresa")[0].value;
    let proyecto =document.getElementsByName("proyecto_explicado")[0].value;

    if(nombreCliente !="" && nombreEmailEmpresa !="" && proyecto !=""){
        alert("Formulario enviado a: " + nombreEmailEmpresa+" por el encargo de "+nombreCliente);
    }else{
        alert("Completa los campos monimos de :CLIENTE , EMAIL EMPRESA y ¿DE QUE TRATA EL PROYECTO?. Para poder recivir la informacion minima de cara el presupuesto.")
    }
}
let usuariosRegistrados = [];
let contrasenaRegistrados = [];

function crearUsuarios() {
    let nuevoUsuario = document.getElementsByName("nuevo_usuario")[0].value;
    let nuevoEmail = document.getElementsByName("email_nuevo")[0].value;
    let nuevaContrasena = document.getElementsByName("nueva_contraseña")[0].value;

    if (nuevaContrasena != "" && nuevoEmail != "" && nuevoUsuario != "") {
        usuariosRegistrados.push(nuevoUsuario);
        contrasenaRegistrados.push(nuevaContrasena);
        alert("Nuevo usuario creado: " + nuevoUsuario);
    } else {
        alert("ERROR, completa todos los requisitos");
    }
}

function iniciarSesion() {
    let Usuario = document.getElementsByName("usuario")[0].value;
    let Contrasena = document.getElementsByName("contraseña")[0].value;
    let OK = false;

    for (let i = 0; i < usuariosRegistrados.length; i++) {
        if (usuariosRegistrados[i] == Usuario && contrasenaRegistrados[i] == Contrasena) {
            OK = true;
        }
    }

    if (OK == true) {
        alert("Inicio de sesion completado");
    } else {
        alert("ERROR; usuario o contraseña incorrectos");
    }
}
