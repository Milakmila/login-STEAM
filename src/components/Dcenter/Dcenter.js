import './Dcenter.css'
import '../../index.css'
import hoy from "./trabajo1.png"
function Dcenter(){
    return(
        <div className="PrincipalLogin">
            <button onClick="hamburguesa" class="btn-idiom animated-word"> 
                <p>ES-EN</p>
            </button>

        <h1>¡Hola, de nuevo!</h1>
        <div class="today">
            <h2>PARA HOY:</h2>  
            <img src={hoy} alt="imagenestrabajohoy"></img> 
            <h3>Arte</h3>
            <p>Arma el puzzle en el area virtual</p>
        </div>

        <div class="to-do">
            <h2>TO DO'S</h2>
    
            <label class="todo-ul">
                
                <li><input class="todo-check" type="checkbox" />Codigo en css</li>
                <li><input class="todo_check" type="checkbox"/>Entrega mátematicas</li>
                <li><input class="todo_check" type="checkbox"/>Arte</li>
                <li><input class="todo_check" type="checkbox"/>Arte</li>
    
            </label>
        </div>  
        
        <div class="PriorityClass">
            <h2>Clases Prioritarias</h2>
            <div class="class-four">
                <div class="class">
                <a href="../Proyecto-STEAM/src/pages/Areas-STEAM/matematica.html">
                    <img src={hoy} alt="imagenestrabajohoy"></img> 
                    <h3>Mátematica</h3>
                </a>
                </div>
            </div>

            <div class="class-one">
                <div class="class">
                <a href="../Proyecto-STEAM/src/pages/Areas-STEAM/ciencia.html">
                    <img src={hoy} alt="imagenestrabajohoy"></img> 
                    <h3>Ciencia</h3>
                </a>
                </div>
            </div>

    </div>
        </div>
    )
}

export default Dcenter