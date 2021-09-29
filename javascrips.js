let Funcion = function(){
    let usuario = document.getElementById("user").value;
    let contraseña = document.getElementById("password").value;
    if (usuario !="" && contraseña !=""){
        return(
        
            alert("Los datos ingresados fueron. " + "\n"+
            "----> "+ "Usuario= "+ usuario +  "\n" +
            "----> "+ "Contraseña= "+ contraseña)
        );
    } else {
        alert("Faltan campos por llenar.")
    }
    
}