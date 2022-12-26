export function Certificado(){
    const $certificado=document.createElement("section");
    let fechaActual=new Date().toLocaleDateString(),
          nombre = localStorage.getItem("valor");

       $certificado.classList.add("d-flex","col-12","vh-100","mt-0","justify-content-center");
       $certificado.style.background="#e9ecef";
    
    $certificado.innerHTML=`
    <div class="col-10  col-lg-7 mt-2">
        <canvas id="canvas" height="1414" width="2000" class="img-fluid box-shadow" alt="responsive image"></canvas>
        
        <div class="d-flex justify-content-center pt-1">
          <button id="png" class="btn  btn-outline-success png"  >Descargar Png</button>&nbsp; &nbsp; 
          <button id="pdf" class="btn  btn-outline-primary pdf"  >Descargar Pdf</button>&nbsp; &nbsp; 
          <a  id="inicio" href="#/" class="btn btn-outline-secondary">Volver a Inicio</a>
       </div>

        
    </div>
  
    `;

    function obtenerCertificado(){
    const canvas=document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    const image= new Image();
    image.src='app/assets/Certificado.png';

    image.onload = function(){
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        ctx.font="bold 80px Arial";
        ctx.textAlign="center";
        ctx.textBaseline="middle";
        var x = canvas.width/2;

        ctx.fillText(""+nombre+"", x, 700);

        ctx.font="45px Arial";
        ctx.fillText("Fecha de realización : "+fechaActual+"", x, 1130);

        
      }

      const $btnInicio = document.getElementById("inicio").id;

      document.addEventListener("click",(e) =>{
        if(e.target.matches("#png")){
           let dpng= document.createElement("a");
           dpng.download="Certificado.png";
           dpng.href=canvas.toDataURL();
           dpng.click();
        }
        if(e.target.matches("#pdf")){
          let dpdf = canvas.toDataURL("image/png");
          let doc = new jsPDF("l","mm");
          doc.addImage(dpdf, "PNG", 0, 0, 300, 214);
          doc.save("Certificado.pdf");
       }
       if(e.target.id ===$btnInicio){
          localStorage.removeItem("valor");
       }     
    });
     
  }


    setTimeout(() =>obtenerCertificado(), 100);

    return $certificado;
}