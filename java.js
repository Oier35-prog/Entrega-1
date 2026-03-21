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