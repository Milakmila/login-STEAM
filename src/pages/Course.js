import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import {Link, useParams} from "react-router-dom";
import {getCourse} from "../courses";
import '../components/style/modal.css'


function Course(){
    const params=useParams();
    const  course=getCourse(parseInt(params.id));
    return(
        <div>
             {params.id}
            <Header />
            <div>
                <img src={course.banner} alt="imagen"></img>
            </div>
            <div className="card-deliver">
                {params.id}
                <h1>Detalle de </h1>
                <h3>{course.trabajo}</h3>
                <p>{course.descripcion}</p>
                <div class="icons" >
                    <a href="#modal" class="cta"><i class="fa-solid fa-paperclip" ></i></a>
                    <a href="#modal" class="cta"><i class="fa-solid fa-comment"></i></a>
                </div>
               
            </div>
            <section id="modal" class="modal">
        
        <div class="modalContainer">
    
            <form method="post" enctype="multipart/form-data">
                <div>
                  <label for="file">Elige el archivo a cargar</label>
                  <input type="file" id="file" name="file" multiple></input>
                </div>
        
                <textarea name="textarea" className="borde" rows="10" cols="50">Hola profesor...
            
                </textarea>
               </form>
               <Link to="/courses">
                <button class="btn-green">
                    <i class="fa-solid fa-user"></i>
                    <h5>Exportar</h5>
                </button>
            </Link>



        </div>
        </section>



            <Footer />

        </div>
    )
}
export default Course