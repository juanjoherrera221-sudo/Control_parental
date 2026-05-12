function mostrar_password(){

    const password =
        document.getElementById("password");

    
    if(password.type === "password"){

        password.type = "text";
}
    else{

        password.type = "password";

    }
}
function verificar(){

    const usuario =
        document
        .getElementById("user")
        .value
        .toLowerCase();

    const password =
        document
        .getElementById("password")
        .value;

    const resultado =
        document.getElementById("output");

    if(usuario === "herrera" && password === "1234" || usuario === "gatico" && password === "1234"){

        resultado.innerHTML =
            "<h6>Acceso concedido 🔥</h6>";
        window.location.href =
            "Acceso.html";
    
    }
    
    else{

        resultado.innerHTML =
            "<h6>Usuario o contraseña incorrectos ❌</h6>";
    }

}