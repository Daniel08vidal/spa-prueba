export function  ModalBody(){
  const $modal=document.createElement("div");

  $modal.innerHTML=`
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header d-flex justify-content-center">
            <h5 class="modal-title " id="staticBackdropLabel">Tenga en cuenta...</h5>
            <button type="button" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <ul class="list-group list-group-light">
              <div class="alert bg-light col-12 shadow-sm" style=" border-left:solid 5px #0d6efd;" role="alert">
                <strong>Nota:</strong> Para pasar la prueba debes de acertar al menos en 4 de las 5 preguntas.
              </div>
                <li class="list-group-item">Tienes 5 minutos para realizar la prueba</li>
                <li class="list-group-item">Click en el boton para iniciar la prueba </li>
            </ul>
          </div>
          <div class="modal-footer d-flex justify-content-center pt-3">
            <button type="button" id="empezar" class="btn btn-secondary" data-bs-dismiss="modal">Empezar Prueba</button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="modalfinaltiempo" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header bg-danger d-flex justify-content-center">
         <h5 class="modal-title text-white " id="staticBackdropLabl">¡Atencion!</h5>
         <button type="button" class="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
          <div class="alert bg-light col-12 shadow-sm" style=" border-left:solid 5px #dc3545;" role="alert">
           <strong text-danger>Nota:</strong> Se acabo el tiempo de la prueba.
         </div>
       </div>
       <div class="modal-footer d-flex justify-content-center pt-3">
         <button type="button" id="empezar" class="btn btn-secondary" data-bs-dismiss="modal">Intentar de nuevo</button>
       </div>
     </div>
   </div>
 </div>
  `;


  return $modal;
}
