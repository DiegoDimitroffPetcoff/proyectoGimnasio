// const contenedorPrincipal = document.getElementById("primero");
// console.log(contenedorPrincipal.innerHTML);
// contenedorPrincipal.style.background= "grey";

$("body").css({background:'grey', color:'black'});
// CREO BOTON PARA COMENZAR INGRESO-----------------------------------------------------------------
const botonIngresar = document.createElement("center");
botonIngresar.innerHTML = "<h1>Primer prototipo de Applicacion </h1><br><button id= ingresarAlaApp>Ingresar a la aplicacion</button>";
document.body.appendChild(botonIngresar);
const ingresarAlaApp = document.getElementById("ingresarAlaApp")

// METODO PARA INGRESAR-----------------------------------------------------------------
ingresarAlaApp.onclick = () => {
    acceso = document.createElement("center");
    // elimino el boton para ingresar
    ingresarAlaApp.parentNode.removeChild(ingresarAlaApp);
   
    // creo imput y boton para poner contrase y usuario
    
    acceso.innerHTML = "<div class= conteiner><form ><input id = usuario type=text placeholder=Usuario><input id= password type=password placeholder=Password><button id=ingresar type=reset>INGRESAR</button></form></div>";
    document.body.appendChild(acceso);
    
    // genero metodo del boton desp de ingresar contra y usu
    let ingresar = document.getElementById("ingresar");
        ingresar.onclick= () =>
        {    
        datosIngresados()



        if ( usuario == "diego" & password == "123"){
            valido();
        
            } else{
                
                
            alert("INVALIDO")
                // const div = document.createElement("div")
                // div.innerHTML = 
                // "<center><h1> INGRESO INVALIDO INTENTELO NUEVAMENTE</h1></center>";
                // document.body.appendChild(div);

                // ingresar.onclick= () => div.parentNode.removeChild(div)
                
                
        
            } 






        }
            
            // metodo del boton para ingresar datos 
            function datosIngresados (){
                usuario = document.getElementById("usuario").value;
                console.log(usuario);
            
                password = document.getElementById("password").value;
                console.log(password);}
        





    

}




