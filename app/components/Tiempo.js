export function Tiempo(){

    const $temporizador =document.createElement("div");
    $temporizador.classList.add("position-absolute","bg-primary","text-white","bottom-10","p-2","ps-3","pe-4","end-0");
    let TiempoPrueba=5*60100, //se convierte los minutos a milisegundos, en este caso son 5 minutos
     limitDate=new Date().getTime()+TiempoPrueba,
     countdownDate=new Date(limitDate).getTime(),
     tiempoRecorrido=0,
     minutesEf=0,
     secondsEf=0,

     countdownTempo=setInterval(()=>{
        let now =new Date().getTime(),
        
        limitTime=countdownDate-now,
        // days=Math.floor(limitTime/(1000*60*60*24)),
        // hours=("0"+Math.floor((limitTime %(1000*60*60*24))/(1000*60*60))).slice(-2),
        minutes=("0"+Math.floor((limitTime %(1000*60*60))/(1000*60))).slice(-2),
        seconds=("0"+Math.floor((limitTime %(1000*60))/(1000))).slice(-2);

        tiempoRecorrido++;
        let multiplodemil=tiempoRecorrido*1000; // se multiplica por mil para pasarlo a milisegundos para la conversion

         minutesEf=("0"+Math.floor((multiplodemil %(1000*60*60))/(1000*60))).slice(-2);
        secondsEf=("0"+Math.floor((multiplodemil %(1000*60))/(1000))).slice(-2);
    
        $temporizador.innerHTML=`<strong>Tiempo:</strong> <label>00:${minutes}:${seconds}</label>`;


          if(limitTime<0){
            clearInterval(countdownTempo);
            $temporizador.innerHTML="";
            const modal = new bootstrap.Modal('#modalfinaltiempo', {});
            modal.innerHTML=null;
            modal.show();
            
          }
  
     },1000); 



       document.addEventListener("click",e =>{
        if(e.target.matches("#botonresponder")){
           clearInterval(countdownTempo);
            let tiemporesultado=`00:${minutesEf}:${secondsEf}`;
            localStorage.setItem("tiempo",tiemporesultado);
        }
      });

      
    return $temporizador;
}






