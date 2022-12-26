import { Certificado } from "./Certificado.js";
import { Error } from "./Error.js";
import { FormTest } from "./Form_test.js";
import { Login } from "./Login.js";
import { Resultado } from "./Resultado.js";

export function Router(){
    const d=document,
    w=window,
    $main=d.getElementById("main");
    const $root= document.getElementById("root");

    let {hash}=location;
    console.log(hash)

    $main.innerHTML=null;

    if(!hash || hash==="#/"){

        
        $root.removeChild($root.firstElementChild); //remueve el nav de la vista
        $main.appendChild(Login());

    }

    else if(hash==="#/principal"){

        if(localStorage.getItem("valor")){
            $main.appendChild(FormTest());
        }else{
            $main.appendChild(Error());
        }
    }

    else if(hash==="#/resultado"){
        if(localStorage.getItem("valor")){
            $main.appendChild(Resultado());
        }else{
            $main.appendChild(Error());
        }

    }

    else if(hash==="#/certificado"){
        $root.removeChild($root.firstElementChild);  //remueve el nav de la vista
        $main.appendChild(Certificado());
    }

}