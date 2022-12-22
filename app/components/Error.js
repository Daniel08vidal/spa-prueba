export function Error(){
    const $error=document.createElement("section");
     $error.classList.add("d-flex","col-12","mt-2","justify-content-center");

    $error.innerHTML=`
    <div class="class-error alert col-10 col-md-6 box-shadow mt-2" style="background: #f69fa8; border-left:solid 5px #dc3545;">
    <strong>Error: </strong>  Para ingresar debes estar registrado.
    </div>
    `;
    return $error;
}