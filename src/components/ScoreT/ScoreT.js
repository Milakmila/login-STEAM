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
                    <h5>Exportar</h5>
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


            <table className="table">
                <tr className="rowprincipal-teacher"> 
                    <th class="student-teacher"> Estudiante:</th>
                    <th class="email-teacher">Correo:</th>
                    <th class="workshop-teacher">Trabajos:</th>
                    <th class="score-teacher">Puntaje:</th>
                    <th class="average-teacher">Promedio:</th>
                </tr>
                <tr className="row-teacher"> 
                    <td class="student"> 
                        <a href="#modal" class="estudiantenombre"><i class="fa-solid fa-pencil"></i></a>
                        Arias Catalina
                    </td>

                        <article id="modal" className="modal">
                            <div class="modalContainer2">
                                <div class="imagenestudiante">
                                <i class="fa-solid fa-circle-user userss"></i>
                                </div>
                                <h2 class="nombre">Arias Catalina</h2>
                                <h3 class="grado">9 Grado</h3>
                                <div class="lista">
                                <h4>Trabajos:</h4>
                                <ul>
                                    <li>Nombre trabajo1</li>
                                    <li>Nombre trabajo2</li>
                                    <li>Nombre trabajo3</li>
                                </ul>
                        
                                </div>
                                <div class="lista2">
                                    <h4>notas:</h4>
                                    <ul>
                                        <li>7</li>
                                        <li>5</li>
                                        <li>10</li>
                                    </ul>
                                </div>
                                

                                <a href="">
                                    <button class="btn-volver">Volver</button>
                                    </a>
                            </div>
                            
                        
                        </article>
                    
                    <td class="email">catalinarias@colegiosanpatricio.com</td>
                    <td class="workshop">
                        
                        <div class="worskhop-two">
                        <a href="#modal2">
                        <i class="fa-solid fa-paperclip"></i>Trabajo:Lorem ipsum
                        </a>
                        </div>
                    </td>
                    <div class="worskshop-three">
                            <a href="#modal2">
                                <i class="fa-solid fa-paperclip"></i>Trabajo:Lorem ipsum
                                </a>
                        </div>
                        <div class="workshop-four">
                            <a href="#modal2">
                                <i class="fa-solid fa-paperclip"></i>Trabajo:Lorem ipsum
                                </a>
                        </div>
                    </tr>
                    
        </table>
    </section>
)
}
export default ScoreT