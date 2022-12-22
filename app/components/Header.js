export function Header(){
  const $inicio=document.createElement("header");
   $inicio.classList.add("box-shadow","sticky-top");
   let nombre = localStorage.getItem("valor") ||"";
   let display="";
   console.log(location.hash)

   if(!(location.hash==="#/principal"))display="d-none";
   


  $inicio.innerHTML=`
  <nav class="navbar navbar-expand-lg d-flex  justify-content-center justify-content-sm-center justify-content-md-center  navbar-light bg-light justify-content-lg-between">
    <a class="navbar-brand  mb-0 h1 ps-4 " href="${location.hash}">Prueba de Conocimiento</a>
    <div class="col-11  progreso  p-2 bg-light col-md-10 col-lg-6 ${display}">
      <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">0%</div>
      </div>
    </div>
      <span class="navbar-text ps-4 pe-4">
        ${nombre}
      </span>
  </nav>`;

  return $inicio;
}