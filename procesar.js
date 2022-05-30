
import {Alumno} from "./alumno.js";
import {OP} from "./op.js";

guardar.addEventListener('click',function(e){
    e.preventDefault();
    const op=new OP;

    let nombre=document.getElementById("nombre").value;
    let apellido=document.getElementById("apellido").value;
    let cal=document.getElementById("cal").value;

    if(nombre==="" || apellido==="" || cal===""){
        op.mostrar("Faltan Datos");
    }else{
        const alumno = new Alumno(nombre,apellido,cal);
        op.agregaAlumno(alumno);
        op.mostrar("Se Agregó al Alumno");
    }

    op.limpiar();

});

document.getElementById("listado").addEventListener("click",(e)=>{

    const op=new OP;
  
    if (e.target.id=="eliminar"){
        op.eliminaAlumno(e.target);
    }
})


document.getElementById("listado").addEventListener("click",(e)=>{

    const op = new OP;

    if (e.target.id=="modificar"){
        op.modifica(e.target);
    }

});
