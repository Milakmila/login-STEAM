
import './Header.css'
import '../Navbar/Navbar.css'
import logotipo from './Logotipo.png'
import Navbar from '../Navbar/Navbar'
import {useState} from "react";

function Header() { 
    /*Creacion Hook*/
    const[button, setButton]=useState({
        nombre:'',
        apellido:''
    });
    
    /*Constantes que funcionas con eventos*/
    const click=e=>{
        console.log("Afecto button")
        const {target}=e;
        const{name,value}=target;

        const newValor={
            ...button,
            [name]:value,

        };
        setButton(newValor);

        
    }
    return (

    <header>
        <script src="https://kit.fontawesome.com/d5d81529d3.js" crossorigin="anonymous"></script>
        <section className="logo-index">
        <div class="logo">
            <img src={logotipo} alt="Logotipo"></img>
        </div>

        <div class="user">
            <i class="fa-solid fa-circle-user user user-icon"></i>
            <p>Beatriz Pinzon</p>
            <div class="down-arrow">
                <section class="arrow-dropdown">
                <div class="down-arrow">
                  <input type="checkbox" id="chk-setting"></input>
                  <label for="chk-setting" class="btn-dropdown">
                      <i class="fa-solid fa-caret-down  fa-1x down-arrow"></i>
                  </label>
                  <div class="items">
                  <a href="../Login/dashboard.html"class="item">Ajustes</a>
                  <a href="../Login/login-general/perfil.html"class="item">Perfil</a>
                  <a href="../../../index.html"class="item">Log out</a>
                </div>
                </div>
                </section>
            </div>
        </div>
        </section>


        <div className="barra">
        <div className="linea-proof"></div>   
            <section className="bar-dropdown">
            <input type="checkbox" id="chk-bar"></input>
                    <div className="hamburguesa">
                  <label for="chk-bar" class="btn-menu">
                  <i class="fa-solid fa-bars"></i>
                      </label>
        

                    </div>
                    <div className="items-bar">
                        <Navbar />

                    </div>

            </section>
            </div>

           
    </header>
    
    
    ) 
}
export default Header;