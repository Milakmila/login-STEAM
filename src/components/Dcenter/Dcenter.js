import './Dcenter.css'
import '../../index.css'
import hoy from "./trabajo1.png"
import { Link } from "react-router-dom";
function Dcenter(){
    // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


   

    return(
        <div className="PrincipalLogin">
            <div  className="prin">
                <button className="btn-idiom animated-word"> 
                    <p>ES-EN</p>
                </button>

            <h1>¡Hola, de nuevo!</h1>
            </div>
        <div class="today">
            <h2>PARA HOY:</h2>  
            <img src={hoy} alt="imagenestrabajohoy"></img> 
            <h3>Arte</h3>
            <p>Arma el puzzle en el area virtual</p>
        </div>

        <div class="to-do">
        <h2>TO DO'S</h2>
  
  
                <ul id="myUL" className="ul-todo">
                    <li className="list-todo">Rompecabezas de Arte</li>
                    <li className="list-todo checked">Trabajo de matemáticas</li>
                    <li className="list-todo">Juego de matemticas</li>
                    <li className="list-todo">Jugar</li>
                    <li className="list-todo">Leer el articulo de tecnologia</li>
                    <li className="list-todo">Hacer una presentación</li>
                </ul>
        </div>  
        
        <div class="PriorityClass">
            <h2>Clases Prioritarias</h2>
            <div class="class-four">
                <div class="class">
                <Link to="/courses/3">
                    <img src={"https://media1.giphy.com/media/3o72EXSWcDayDDGP60/giphy.gif?cid=ecf05e47f8e353x8podx05gmq5kvjzngkzd1kvdk0t3qgx7l&rid=giphy.gif&ct=g"} alt="matematicas"/>
                    <h3>Mátematica</h3>
                </Link>
                </div>
            </div>

            <div class="class-one">
                <div class="class">
                <Link to="/courses/2">
                    <img src={"https://media3.giphy.com/media/o65WgXSDBVY1G/giphy.gif?cid=ecf05e47aq9zgefha69plm6ov7pi2o79am1sh91m21mzknvi&rid=giphy.gif&ct=g"} alt="imagenestrabajohoy"></img> 
                    <h3>Ciencia</h3>
                </Link>
                </div>
            </div>

    </div>
        </div>
    )
}

export default Dcenter