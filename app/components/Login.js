export function Login(){
 const d= document,
 $login=d.createElement("section");
 let $styles=d.getElementById("estiloLogin");
 $login.classList.add("frmLogin","m-0","vh-100","row","d-flex","justify-content-center","align-items-center")
 

 $styles.innerHTML=`
 #aqui:hover{
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
 }

 `;

 $login.innerHTML=`
  <div class="bg-image h-100">
    <div class="mask d-flex align-items-center h-100" >
      <div class="container">
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-lg-9 col-xl-8">
            <div class="card box-shadow" style="border-radius: 1rem;">
              <div class="row g-0">
                <div class="col-md-4 d-none d-md-block">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Others/sidenav2.jpg"
                    alt="login form"
                    class="img-fluid" style="border-top-left-radius: 1rem; border-bottom-left-radius: 1rem;"
                  />
                </div>
                <div class="col-md-8 d-flex align-items-center">
                  <div class="card-body py-5 px-4 p-md-5">

                    <form id="form-login">
                      <h4 class="fw-bold mb-4" style="color: #92aad0;">Registro</h4>
                      <p class="mb-4" style="color: #45526e;">Ingresa su nombre completo para realizar la prueba.</p>

                      <div class="form-outline mb-4">
                        <input type="text" name="name" id="form2Example1" autocomplete="off" class="form-control" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú\\s]+$" required title="El nombre solo debe llevar letras y espacios en blanco" />
                        <label class="form-label" for="form2Example1">Nombre</label>
                      </div>

                      <div class="d-flex justify-content-end pt-1 mb-4">
                        <button id="aqui" class="btn  rounded-pill" type="submit" style="background-color: #92aad0; color:#fff;">Registrarme</button>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 `;

 function sendName(){
 const formLogin=document.getElementById("form-login");
 
 formLogin.addEventListener(("submit"),e =>{
  e.preventDefault();
  localStorage.setItem("valor",e.target.name.value.toUpperCase());
  console.log("ok")
  location.href="#/principal";
 });


 const $span=d.createElement("label");
 let input=d.querySelector(".frmLogin [required]");
 let label=d.querySelector(".form-label");
 $span.id=input.name;
 $span.textContent=input.title;
 $span.classList.add("contact-form-error","none");

 $login.addEventListener("keyup",e=>{
   if (e.target.matches(".frmLogin [required]")){
     let $input=e.target,
     pattern=$input.pattern;
     if($input.value ===""){
      input.classList.remove("is-invalid");
      label.textContent="Nombre";
      label.classList.remove("invalid-feedback");
      label.classList.remove("valid-feedback");
      input.classList.remove("is-valid");
     }
     if (pattern && $input.value !=="") {
 
       let regex =new RegExp(pattern);
         if(!regex.exec($input.value)){
          label.textContent=input.title;
          label.classList.add("invalid-feedback");
          input.classList.add("is-invalid")
         }else{
          label.textContent="Nombre";
          label.classList.remove("invalid-feedback");
          input.classList.remove("is-invalid");
          label.classList.add("valid-feedback");
          input.classList.add("is-valid");
         }
   }
   }
 });



}
  // Eliminar el background del modal al regresar de pagina
  const modalhide=document.querySelector(".modal-backdrop");
  if(document.body.lastChild === modalhide){
    document.body.removeChild(modalhide);
    document.body.classList.remove("modal-open");
    document.body.style.removeProperty("overflow","padding-right");
    document.body.style.removeProperty("padding-right");
  }



setTimeout(() =>sendName(), 100);

 return $login;

}