import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/courses.css'

import {getAllCourses} from '../courses'
import { Link } from "react-router-dom";
import BotonI from '../components/botonI/BotonI';
function Courses(){
    const courses=getAllCourses();
    return(
        <div>
            <Header />
            <div className="c-div">
                    <h1 className="cursos-title">Mis cursos</h1>
                    <BotonI />
                    </div>
                <div className="courses">
        
                {courses.map(s=>
                    <div className="course" key={s.id}>
                   
                    <div className="cursos"> 
                    <Link to={`${s.id}`}>
                    <img src={s.image} alt="imagen" className="clas" />

                      
                        <h2>{s.title}</h2>
                     </Link>
                    </div> 

                    
                   
                    </div>
                )};

                </div>




            <Footer />

        </div>
    )
}

export default Courses
