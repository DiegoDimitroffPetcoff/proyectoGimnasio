// const contenedorPrincipal = document.getElementById("primero");
// console.log(contenedorPrincipal.innerHTML);
// contenedorPrincipal.style.background= "grey";

$("body").css({background:'grey', color:'black'});

const botonIngresar = document.createElement("center");
botonIngresar.innerHTML = "<h1>Primer prototipo de Applicacion </h1><br><button>Ingresar a la aplicacion</button>";
document.body.appendChild(botonIngresar);

// METODO PARA INGRESAR CONTRASE-----------------------------------------------------------------
botonIngresar.onclick = () => {
    usuario = prompt("Usuario").toLowerCase();
    password = prompt("password");



    console.log(usuario);
    console.log(password)

    
    if ( usuario == "diego" & password == "123"){
    valido();

    } else{
        
        
    
        const div = document.createElement("div")
        div.innerHTML = 
        "<center><h1> INGRESO INVALIDO INTENTELO NUEVAMENTE</h1></center>";
        document.body.appendChild(div);

    } 
}


