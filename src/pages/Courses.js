import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/courses.css'

import {getAllCourses} from '../courses'
import { Link } from "react-router-dom";
function Courses(){
    const courses=getAllCourses();
    return(
        <div>
            <Header />
                <div className="courses">
                    <h1>Mis cursos</h1>
                {courses.map(s=>
                    <div className="course" key={s.id}>
                   
                    <div className="cursos"> 
                    <Link to={`${s.id}`}>
                    <img src={courses.image} alt="imagen"></img>

                        <div className="image">{s.image}</div>
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
