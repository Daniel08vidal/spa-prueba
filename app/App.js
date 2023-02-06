import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";
import { Tiempo } from "./components/Tiempo.js";


export function App(){
    const $root= document.getElementById("root");

    $root.innerHTML=null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    

    const $header= document.querySelector(".header");
    document.addEventListener("click", e =>{
        if(e.target.matches("#empezar")){
            
            $header.appendChild(Tiempo());
        }
     });

  

    Router();
    
}