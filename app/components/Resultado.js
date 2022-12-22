export function Resultado(){
    const $resultado=document.createElement("section");
       $resultado.classList.add("row","justify-content-center","align-items-center","mt-2");
      let resulT=localStorage.getItem("resultado"),
      respuesta ={
        message:"",
        classText:"",
        small:"",
        boton:""
      };


      if(resulT>3 ){
        respuesta.message="¡Aprobaste!";
        respuesta.classText="success";
        respuesta.small="Excelente puedes descargar tu certificado de participación" ;
        respuesta.boton=`<a href="#/certificado" class="btn btn-secondary">Descargar certificado</a>`;
      }else{
        respuesta.message="¡Fallaste!";
        respuesta.classText="danger" ;
        respuesta.small="Para aprobar debes acertar 4 de las 5 preguntas";
        respuesta.boton=`<a href="#/principal" class="btn btn-secondary">Intentar de nuevo</a>`;
      }

    $resultado.innerHTML=`
    <div class="row justify-content-center  resultado">
    <div class="col-12 mt-4 col-md-11 col-lg-4 ">
      <div class="card text-center box-shadow">
        <div class="card-header bg-${respuesta.classText} text-white">
          Resultado
        </div>
        <div class="card-body">
          <h5 class="card-title text-${respuesta.classText} fw-bold" id="textMensaje">${ respuesta.message}</h5>
          <p  class="card-text"><strong id="numresultado">${resulT}</strong> respuestas acertadas de <strong>5</strong></p>
          <small>${respuesta.small}</small><br><br>${respuesta.boton}
        </div>
      </div>
  </div><br>
  </div>
    `;

    return $resultado;
}