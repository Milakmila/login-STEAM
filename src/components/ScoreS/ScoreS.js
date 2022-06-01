import './ScoreS.css'
import '../../index.css'
import { Link } from 'react-router-dom';
import BotonV from '../botonV/BotonV';
import BotonI from '../botonI/BotonI';
function ScoreS(){
    return(
        <div className="students-calificaciones">
        <BotonI />
        <div class="botons">
            <Link to="/ScoreTeacher">
             <BotonV />
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



    <div class="table">
        <table>
            <tr class="rowprincipal"> 
                <th class="activity-students"> Actividad:</th>
                <th class="date-students">Fecha de entrega:</th>
                <th class="score-students">Puntaje:</th>
                <th class="de-students">De:</th>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>
            <tr class="row"> 
                <td class="activity">Trabajo: lorem ipsum</td>
                <td class="date">10/10/2022</td>
                <td class="puntaje">10</td>
                <td class="de">10</td>
            </tr>

        </table>

    </div>
    </div>
    )
}

export default ScoreS;