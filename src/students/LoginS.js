import logotipo from '../components/Header/Logotipo.png'
import './LoginS.css';
import { Link } from "react-router-dom";
import {useState} from "react"
import BotonV from '../components/botonV/BotonV';
function LoginS (){
    const [usuario, cambiarUsuario] = useState({campo: '', valido: null});
    const [formularioValido, cambiarFormularioValido] = useState(null);
    const expresiones = {
		usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    }
    const onSubmit = (e) => {
		e.preventDefault();

		if(
			usuario.valido === 'true' 
            
        ){
            cambiarFormularioValido(true);
            cambiarUsuario({campo: '', valido: ''});
        }else{
            cambiarFormularioValido(false);
            
        }
    }
    return(
        <section id="login">
        <div class="images-login">
            <img src={logotipo} alt="Logotipo" className="logo"></img>
        </div>

        <div class="form-login">
            <h2>Login</h2>
            <form action="" onSubmit={onSubmit}>
            <div class="form-group">
                <label for="usuario" class="form-label">Usuario</label>
                <input  class="form-input" type="text" name="usuario" id="usuario"  cambiarEstado={cambiarUsuario} leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo."
					expresionRegular={expresiones.usuario} required />
            </div>

            <div class="form-group">
                <label for="password" class="form-label">Contraseña</label>
                <input  class="form-input" type="password" name="password" id="password" required />
            </div>
            <div class="botons">
                <Link to="/login-STEAM">
                <BotonV />
                </Link>
                
            </div>
            {formularioValido === false && <span><p>
						<i></i>
						<b>Error:</b> Por favor rellena el formulario correctamente.
					</p>
				</span>}
            </form>
    
        </div>
        
    </section>
    
    )

}

export default LoginS