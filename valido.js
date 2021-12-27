// INGRESO VALIDO DEL USUARIO-----------------------------------------------------------------
function valido(){
    alert(" Ingreso Valido")
    botonIngresar.parentNode.removeChild(botonIngresar);

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

    let botonesListaTares = document.createElement("center")
    botonesListaTares.innerHTML = "<button id=ingresarAlumnoNuevo> INGRESAR ALUMNO NUEVO</button> <br> <button>LISTA DE ALUMNOS</button><br> <button>ACTIVIDADES</button>";
    document.body.appendChild(botonesListaTares);

    const botonAgregarAlumno = document.getElementById("ingresarAlumnoNuevo");
   
    botonAgregarAlumno.onclick = () => 
    agregar();



};
//  METODO-> AGREGAR ALUMNO ------------------------------------------------------------------
function agregar(){
    tablaIngresarAlumnoNuevo = document.createElement("center");
    tablaIngresarAlumnoNuevo.innerHTML = "<div class= conteiner><form ><input id= Nombre type=text placeholder=Nombre><input id= edad type=number placeholder=Edad><button id=boton type=reset>AGREGAR</button></form></div>";
    document.body.appendChild(tablaIngresarAlumnoNuevo);}