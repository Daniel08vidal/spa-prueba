export function FormTest(){
  const d=document,
      $formTest=d.createElement("form");
      $formTest.id="formulario";
      $formTest.classList.add("row","justify-content-center","align-items-center","mt-2");

      $formTest.innerHTML=`
      <div class="alert bg-light col-10 col-md-11 col-lg-6 shadow-sm" style=" border-left:solid 5px #0d6efd;" role="alert">
        <strong>Nota:</strong> Para pasar la prueba debes de acertar al menos en 4 de las 5 preguntas.
      </div>
      
      <div class="col-11 col-md-11 col-lg-7">
      <div class="card mt-2 card-pregunta">
        <h5 class="card-header bg-light">Pregunta 1 <small class="float-end">1 puntos</small></h5>
        <div class="card-body">
          <h5 class="card-title">¿Qué entiende por CSS?</h5>
          <div class="form-check">
            <input id="respre1" name="respreuno" type="radio" class="form-check-input classuno"  value="1" >
            <label class="form-check-label" for="respre1" >Creative Style System.</label>
          </div>
          <div class="form-check">
            <input id="respreuno2" name="respreuno" type="radio" class="form-check-input classuno"  value="2">
            <label class="form-check-label" for="respreuno2">Class Style Sheet.</label>
          </div>
          <div class="form-check">
          <input id="respreuno3" name="respreuno" type="radio" class="form-check-input classuno " value="3">
            <label class="form-check-label text-success" for="respreuno3" >Cascading Style Sheet. 
        </div>
        <div class="form-check">
          <input id="respreuno4" name="respreuno" type="radio" class="form-check-input classuno" value="4">
            <label class="form-check-label" for="respreuno4" >Cascading Style System. 
        </div>
        </div>
      </div>
    </div>

    <div class="col-11 col-md-11 col-lg-7 pb-2 ">
      <div class="card mt-4 card-pregunta">
        <h5 class="card-header bg-light">Pregunta 2 <small class="float-end">1 puntos</small></h5>
        <div class="card-body">
          <h5 class="card-title">¿Cuál es la sintaxis correcta en CSS?</h5>
          <div class="form-check">
            <input id="respredos1" name="respredos" type="radio" class="form-check-input classuno" value="1">
            <label class="form-check-label" for="respredos1">{p=color:red} </label>
          </div>
          <div class="form-check">
            <input id="respredos2" name="respredos" type="radio" class="form-check-input classuno" value="2">
            <label class="form-check-label" for="respredos2">{p:color=red}</label>
          </div>
          <div class="form-check">
            <input id="respredos3" name="respredos" type="radio" class="form-check-input classuno" value="3">
            <label class="form-check-label" for="respredos3">p{color=red} </label>
          </div>
          <div class="form-check">
              <input id="respredos4" name="respredos" type="radio" class="form-check-input classuno" value="4">
              <label class="form-check-label text-success" for="respredos4">p{color:red} </label>
            </div>
        </div>
      </div>
    </div>

    <div class="col-11 col-md-11 col-lg-7 ">
      <div class="card mt-4 card-pregunta">
        <h5 class="card-header bg-light">Pregunta 3 <small class="float-end">1 puntos</small></h5>
        <div class="card-body">
          <h5 class="card-title">¿Qué atributo de HTML se usa para definir un estilo entre líneas?</h5>
          <div class="form-check">
            <input id="respretres1" name="respretres" type="radio" class="form-check-input classuno " value="1"  >
            <label class="form-check-label" for="respretres1">Code </label>
          </div>
          <div class="form-check">
            <input id="respretres2" name="respretres" type="radio" class="form-check-input classuno" value="2" >
            <label class="form-check-label text-success" for="respretres2">Style </label>
          </div>
          <div class="form-check">
            <input id="respretres3" name="respretres" type="radio" class="form-check-input classuno" value="3" >
            <label class="form-check-label" for="respretres3">Name </label>
          </div>
          <div class="form-check">
              <input id="respretres4" name="respretres" type="radio" class="form-check-input classuno" value="4" >
              <label class="form-check-label" for="respretres4">Value </label>
            </div>
        </div>
      </div>
    </div>

    <div class="col-11 col-md-11 col-lg-7 pb-2">
      <div class="card mt-2 card-pregunta">
        <h5 class="card-header bg-light">Pregunta 4 <small class="float-end">1 puntos</small></h5>
        <div class="card-body">
          <h5 class="card-title">¿Cuál es la sintaxis correcta en HTML para referirse a una hoja de estilo externa?</h5>
          <div class="form-check">
            <input id="resprecuatro1" name="resprecuatro" type="radio" class="form-check-input classdos" value="1"  >
            <label class="form-check-label" for="resprecuatro1">css rel="estilos.css"  </label>
          </div>
          <div class="form-check">
            <input id="resprecuatro2" name="resprecuatro" type="radio" class="form-check-input classdos" value="2" >
            <label class="form-check-label" for="resprecuatro2">style src="/estilos.css" </label>
          </div>
          <div class="form-check">
            <input id="resprecuatro3" name="resprecuatro" type="radio" class="form-check-input classdos" value="3" >
            <label class="form-check-label" for="resprecuatro3">link src = "/stylesheet" name="text/css" href="/estilos.css" </label>
          </div>
          <div class="form-check">
              <input id="resprecuatro4" name="resprecuatro" type="radio" class="form-check-input classdos" value="4" >
              <label class="form-check-label text-success" for="resprecuatro4">link rel = "stylesheet" type="text/css" href="/estilos.css"  </label>
            </div>
        </div>
      </div>
    </div>

    <div class="col-11 col-md-11 col-lg-7 pb-2 ">
      <div class="card mt-4 card-pregunta">
        <h5 class="card-header bg-light">Pregunta 5 <small class="float-end">1 puntos</small></h5>
        <div class="card-body">
          <h5 class="card-title">¿Qúe usamos para establecer el color de fondo?</h5>
          <div class="form-check">
            <input id="resprecinco1" name="resprecinco" type="radio" class="form-check-input classdos"  value="1" >
            <label class="form-check-label text-success" for="resprecinco1">Background-color.  </label>
          </div>
          <div class="form-check">
            <input id="resprecinco2" name="resprecinco" type="radio" class="form-check-input classdos" value="2" >
            <label class="form-check-label" for="resprecinco2">Color.  </label>
          </div>
          <div class="form-check">
            <input id="resprecinco3" name="resprecinco" type="radio" class="form-check-input classdos" value="3" >
            <label class="form-check-label" for="resprecinco3">bgcolor. </label>
          </div>
          <div class="form-check">
              <input id="resprecinco4" name="resprecinco" type="radio" class="form-check-input classdos" value="4"  >
              <label class="form-check-label" for="resprecinco4">Style-color. </label>
            </div>
        </div>
      </div>
    </div>
 
      <div id="resul_encuesta " class="text-center pt-3 pb-2">
          <button type="submit" class="btn btn-primary btn-lg btn-block" disabled id="botonsiguiente">Responder</button>
      </div>
      `;

      const $progress=d.querySelector(".progress-bar"),
      $allCards=$formTest.querySelectorAll(".card-pregunta"),
      $btn=$formTest.botonsiguiente,
      $submit=$formTest;
    //   console.log()
      let allPreguntas=$allCards.length,  //en este caso son 5
          cantxPregunta=100/allPreguntas,     // 20 
          total=0,
          respreuno=0,
          respredos=0,
          respretres=0,
          resprecuatro=0,
          resprecinco=0,
          inicio=0;
  
          let progress = setInterval(function() {
              if(inicio<total){
                  inicio = inicio+1;
                  $progress.style.width=`${inicio}%`;
                  $progress.innerHTML=`<strong>${inicio}%</strong>`;
                  $progress.ariaValueNow=inicio;
              }
          }, 60);  
         
      
      
        $formTest.addEventListener("change",e=>{
            console.log(e.target.name)
          
          if(e.target.name==="respreuno"){
              if(respreuno===0){
              respreuno=cantxPregunta;
              total+=cantxPregunta;
              } 
          }
      
          if(e.target.name==="respredos"){
              if(respredos===0){
              respredos=cantxPregunta;
              total+=cantxPregunta;            
              }
          }
      
          if(e.target.name==="respretres"){
              if(respretres===0){
              respretres=cantxPregunta;
              total+=cantxPregunta;
              }
          }
      
          if(e.target.name==="resprecuatro"){
              if(resprecuatro===0){
                  resprecuatro=cantxPregunta;
                  total+=cantxPregunta;
                  }
          }
      
          if(e.target.name==="resprecinco"){
              if(resprecinco===0){
                  resprecinco=cantxPregunta;
                  total+=cantxPregunta;
                  }
          }
        
          if(respreuno && respredos && respretres && resprecuatro && resprecinco){
           $btn.removeAttribute('disabled');
          }
      
      
      }); //Fin evento Change
      
  
      
      $formTest.addEventListener("submit",e=>{
        e.preventDefault();
         
        let suma=0;
         console.log($submit.respreuno.value);
         if($submit.respreuno.value==="3"){
          suma+=1;
         }
         console.log($submit.respredos.value);
         if($submit.respredos.value==="4"){
          suma+=1;
         }
         console.log($submit.respretres.value);
         if($submit.respretres.value==="2"){
          suma+=1;
         }
         console.log($submit.resprecuatro.value);
         if($submit.resprecuatro.value==="4"){
          suma+=1;
         }
         console.log($submit.resprecinco.value);
         if($submit.resprecinco.value==="1"){
          suma+=1;
         }
          
         suma>3 ?localStorage.setItem("resultado",suma) : localStorage.setItem("resultado",suma);
         location.href="#/resultado";
      
      });


      
      

      return $formTest;
}