import './user.css'
import { Link } from 'react-router-dom'
function User(){
    return(
    
            <section>
            <div class="down-user">
              <input type="checkbox" id="chk-user"></input>
              <label for="chk-user" class="user-dropdown">
                <i class="fa-solid fa-circle-user user user-icon"></i>
              </label>
              <div class="users">
                <Link to="/estudiantes" class="uu">Estudiantes</Link>
                <Link to="/profesores" class="uu">Profesores</Link>
        
            </div>
            </div>
    
            </section>
 
    )
}
export default User