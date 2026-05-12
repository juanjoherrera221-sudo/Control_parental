document
    .getElementById("input")
    .addEventListener("input", verificar);

function verificar(){

    const valor =
        document
        .getElementById("input")
        .value
        .toLowerCase();

    const resultado =
        document.getElementById("output");

    if(valor === "hola"){

        resultado.innerHTML =
            "<h6>Hola humano 👋</h6>";

    }

    else if(valor === "gato"){

        resultado.innerHTML =
            "<img src='https://placekitten.com/300/200'>";

    }

    else if(valor === "admin"){

        resultado.innerHTML =
            "<h6>Acceso concedido</h6>";

    }


    else if(valor === "herrera es gilipollas"){

        resultado.innerHTML =
            "<h6>toda la razon :)</h6>";

    }

    else if(valor === "gato es gay"){

        resultado.innerHTML =
            "<h6>toda la razon :)</h6>";

    }
    
    else{

        resultado.innerHTML =
            "<h6>No entiendo eso xd</h6>";

    }

}