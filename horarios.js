// METODOS EN "ACTIVIDADES"

function actividades1(){
    actividades.parentNode.removeChild(actividades);
    // BOTONES DE LAS ACTIVIDADES
    actividades = document.createElement("center");
    actividades.innerHTML = "<div class= conteiner><button id= ef >ENTRENAMIENTO FUNCIONAL</BUTTON</br><button id= gap>GAP</BUTTON><button id= rehabilitacion >REHABILITACION</BUTTON><button id= bodyFit >BODY FIT</BUTTON></div>";
    document.body.appendChild(actividades);
    
    // BOTONES DE LOS HORARIOS Y SUS METODOS

        // ENTRENAMIENTO FUNCIONAL
        entrenamientoFuncional = document.getElementById("ef");
        entrenamientoFuncional.onclick=()=>
        EntrenamientoFuncional();
        
        // GAP
        gap = document.getElementById("gap");
        gap.onclick=()=>
        Gap();

        // REHABILITACION
        rehabilitacion = document.getElementById("rehabilitacion");
        rehabilitacion.onclick=()=>
        Rehabilitacion();

        // BODY FIT
        bodyFit = document.getElementById("bodyFit");
        bodyFit.onclick=()=>
        BodyFit();


    


}


// METODOS DE CADA BOTON DE LAS ACTIVIDADES

// entrenamiento funcional
function EntrenamientoFuncional(){
    entrenamientoFuncional.parentNode.removeChild(entrenamientoFuncional);

    entrenamientoFuncional = document.createElement("center")
    entrenamientoFuncional.innerHTML="<center><h1>ENTRENAMIENTO FUNCIONAL</H1><button id= h14>14hs</button><button id= 17>17hs</button><button id= 18>18hs</button></center>"
    document.body.appendChild(entrenamientoFuncional);

    horario14 = document.getElementById("h14");
    horario14.onclick=()=>
    h14();

    

    }

// gap
function Gap(){
gap.parentNode.removeChild(gap);

gap = document.createElement("center")
gap.innerHTML="<center><h1>GAP</H1><button id= 15>15hs<button><button id= 18>18hs<button><button id= 19>19hs<button></center>"
document.body.appendChild(gap);
    
        // h14 = document.getElementById("14");
        // h14.onclick= () => 
        // horariosEF();
    
}

// rehabilitacion
function Rehabilitacion(){
rehabilitacion.parentNode.removeChild(rehabilitacion);
    
rehabilitacion = document.createElement("center")
rehabilitacion.innerHTML="<center><h1>REHABILITACION</H1><button id= 15>15hs<button><button id= 18>18hs<button><button id= 19>19hs<button></center>"
document.body.appendChild(rehabilitacion);
        
h14 = document.getElementById("14");
h14.onclick= () => 
horariosEF();
        
}

// body fit
function BodyFit(){
bodyFit.parentNode.removeChild(bodyFit);
        
bodyFit = document.createElement("center")
bodyFit.innerHTML="<center><h1>BODY FIT</H1><button id= 177>17hs</button></center>"
document.body.appendChild(bodyFit);
            
h14 = document.getElementById("177");
h14.onclick= () => 
horariosEF();
            
}
        
    