import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import '../components/courses.css'
import Navbar from '../components/Navbar/Navbar'

import {getAllCourses} from '../courses'
import { Link } from "react-router-dom";
import BotonI from '../components/botonI/BotonI';
function Courses(){
    const courses=getAllCourses();
    return(
        <div>
            <Header />
            <div className="dashboard-nav-center">
            <section className="bar-dropdown">

<input type="checkbox" id="chk-bar"></input>
        <div className="hamburguesa">
      <label for="chk-bar" class="btn-menu">
      <i class="fa-solid fa-bars"></i>
          </label>


        </div>
        <div className="items-bar">
            <Navbar />
        </div>

    </section>
                

                <div className="courses">
                <div className="c-div">
                <h1 className="cursos-title">Mis cursos</h1>
                    <BotonI />
                    </div>  
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
</div>



            <Footer />

        </div>
    )
}

export default Courses