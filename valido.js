// INGRESO VALIDO DEL USUARIO-----------------------------------------------------------------
function valido(){
    
    // alert(" Ingreso Valido")
    botonIngresar.parentNode.removeChild(botonIngresar);
    acceso.parentNode.removeChild(acceso);
    
    const div = document.createElement("div")
    div.innerHTML = 
    "<center><h1> Bienvenido a la aplicacion</h1><button id=comenzar>COMENZAR</button></center>";
    document.body.appendChild(div);
    
    botonComenzar = document.getElementById("comenzar");
    botonComenzar.onclick = () => 
    tableroDeTareas();
};  
// TABLERO DE TAREAS PRINCIPAL-----------------------------------------------------------------
function tableroDeTareas(){

    botonComenzar.parentNode.removeChild(botonComenzar);
    
    botonesListaTares = document.createElement("div")
    botonesListaTares.innerHTML = "<center><button id=ingresarAlumnoNuevo> INGRESAR ALUMNO NUEVO</button> <br> <button>LISTA DE ALUMNOS</button><br> <button id = actividades>ACTIVIDADES</button></center>";
    document.body.appendChild(botonesListaTares);
    
    const botonAgregarAlumno = document.getElementById("ingresarAlumnoNuevo");
    const actividades = document.getElementById("actividades")

    botonAgregarAlumno.onclick = () => 
    agregar();

    actividades.onclick =() =>
    actividades1();




}



// //  METODO-> AGREGAR ALUMNO ------------------------------------------------------------------
function agregar(){
    //  botonAgregarAlumn.parentNode.removeChild(botonAgregarAlumn);

    tablaIngresarAlumnoNuevo = document.createElement("center");
    tablaIngresarAlumnoNuevo.innerHTML = "<div id= conteiner><form ><input id= Nombre type=text placeholder=Nombre><input id= edad type=number placeholder=Edad><button id=boton type=reset>AGREGAR</button></form></div><br><button id=volver>VOLVER</button>";
   
//  EL TABLERO PARA AGRAGR ALUMNOS SE AGRGA COMO NODO HIJO DEL DIV PRINCIPAL DE BOTONES DE LISTA
    botonesListaTares.appendChild(tablaIngresarAlumnoNuevo);

//    casa= document.getElementById("conteiner")
   
    volver = document.getElementById("volver");
    volver.onclick= ()=>
    volverF()

}


// DEBO CREAR UN METODO QUE TOME LOS DATOS INGRESADOS Y LOS CONVIERTA EN UN ARRAY, PARA LUEGO GUARDAR ESA INFO EN EL LOCAR STORAGE CON JSON, VOLVERLO A OBJETO PARA QUE ESA INFO SEA UTILIZADA EN LISTA DE ALUMNOS


function volverF() {

    tablaIngresarAlumnoNuevo.parentNode.removeChild(tablaIngresarAlumnoNuevo);


}
