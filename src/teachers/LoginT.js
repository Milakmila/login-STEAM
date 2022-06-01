import logotipo from '../components/Header/Logotipo.png'
import '../students/LoginS.css'
import { Link } from "react-router-dom";
function LoginT(){
    return(
        <section id="login">
        <div class="images-login">
            <img src={logotipo} alt="Logotipo"></img>
        </div>

        <div class="form-login">
            <h2>Login</h2>

            <div class="form-group">
                <label for="usuario" class="form-label">Usuario</label>
                <input  class="form-input" type="text" name="usuario" id="usuario" required />
            </div>

            <div class="form-group">
                <label for="password" class="form-label">Contraseña</label>
                <input  class="form-input" type="password" name="password" id="password" required />
            </div>
            <div class="botons">
                <Link to="/login-STEAM">
                <button class="btn-verde">
                    <i class="fa-solid fa-user"></i>
                    <h5>Ingresar</h5>
                </button>
                </Link>
            </div>
    
        </div>
        
    </section>
    
    )

}

export default LoginT