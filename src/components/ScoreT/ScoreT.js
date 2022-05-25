import './ScoreT.css'
import { Link } from 'react-router-dom'
function ScoreT(){
    return(
    <section>
    <button  class="btn-idiom animated-word">
        <p>ES-EN</p>
        </button>
        <div class="botons">
            <Link to="/score-teacher">
                <button class="btn-green">
                    <i class="fa-solid fa-user"></i>
                    <h5>Ingresar</h5>
                </button>
            </Link>
        </div>

        <div id="search">
            <label for="buscar">
            <input type="search" name="search" class="search" required></input>
            <a href="mis-cursos.html">
                <i class="fa-solid fa-magnifying-glass buscador fa-1.5x"></i>
            </a>
            </label>
        </div>
  
      
        </section>
)
}
export default ScoreT