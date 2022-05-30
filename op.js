
export class OP{

    agregaAlumno(alumno){
    
      const listado =document.getElementById("datost");
      const al= document.createElement("tr");

      al.innerHTML=`
      
        <td id="nombreT">${alumno.nombre}</td>
        <td id="apellidoT">${alumno.apellido}</td>
        <td id="calT">${alumno.cal}</td>
        
        <td id="bot"> 
        <a href="#" id="eliminar" class="btn-alumno" name="eliminar">Eliminar</a> <a href="#" id="modificar" class="btn-alumno" name="modificar">Modificar</a> 
        </td>     
        
      `;

    //   listado es hijo y al es la etiqueta padre 
      listado.appendChild(al);

    }    
    
    mostrar(aviso){

      // let div=`<div class="alerta">${aviso}</div>`;


      const div=document.createElement("div");
      div.className="alerta";
      div.appendChild(document.createTextNode(aviso));

      const mensaje=document.querySelector(".mensaje");
      mensaje.appendChild(div);
      
      setTimeout(function(){

        document.querySelector(".alerta").remove();

      },2000);


    }
   
    eliminaAlumno(elemento){
  

      elemento.parentElement.parentElement.remove();
      this.mostrar("Alumno Eliminado");

 

    }
   

    limpiar(){
        document.getElementById("falumnos").reset();
        document.getElementById("nombre").focus();
    }

    modifica(elemento){
      let nombre = elemento.parentElement.parentElement.cells[0].innerHTML;
      let apellido = elemento.parentElement.parentElement.cells[1].innerHTML;
      let cal = elemento.parentElement.parentElement.cells[2].innerHTML;

      document.getElementById("nombre").value=nombre;
      document.getElementById("apellido").value=apellido;
      document.getElementById("cal").value=cal;
      document.getElementById("listado").disabled=true;

      document.getElementById("guardar").value="Actualizar";
      document.getElementById("guardar").id="actualizar";

      actualizar.addEventListener("click",()=>{

        elemento.parentElement.parentElement.remove();
        elemento.parentElement.parentElement.remove();
        elemento.parentElement.parentElement.remove();

        document.getElementById("actualizar").value="Guardar";
       document.getElementById("actualizar").id="guardar";

       this.mostrar("Alumno Editado");


      });





    }



}