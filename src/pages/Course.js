import Header from "../components/Header/Header"
<<<<<<< HEAD
import {Link, useParams} from "react-router-dom";
import {getCourse} from "../courses";
import '../components/style/modal.css'
=======
import Footer from "../components/Footer/Footer"
import {useParams} from "react-router-dom";
import {getCourse} from "../courses";
>>>>>>> 8712c3d6a8c8627b63b73420c305467a16aff2fb


function Course(){
    const params=useParams();
<<<<<<< HEAD
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
=======
    const  cours=getCourse(parseInt(params.id));

    return(
        <div>
            {params.id}
            <Header />
            <div>
                IMAGEN como array
            </div>
            <div className="card-deliver">
                <h3>{cours.trabajo}</h3>
                <p><strong>Descripción: </strong>{cours.descripción}</p>
>>>>>>> 8712c3d6a8c8627b63b73420c305467a16aff2fb
                <div class="icons" >
                    <a href="#modal" class="cta"><i class="fa-solid fa-paperclip" ></i></a>
                    <a href="#modal" class="cta"><i class="fa-solid fa-comment"></i></a>
                </div>
<<<<<<< HEAD
               
=======
                
        
>>>>>>> 8712c3d6a8c8627b63b73420c305467a16aff2fb
            </div>
            <section id="modal" class="modal">
        
        <div class="modalContainer">
    
            <form method="post" enctype="multipart/form-data">
                <div>
                  <label for="file">Elige el archivo a cargar</label>
                  <input type="file" id="file" name="file" multiple></input>
                </div>
        
<<<<<<< HEAD
                <textarea name="textarea" className="borde" rows="10" cols="50">Hola profesor...
            
                </textarea>
               </form>
               <Link to="/courses">
                <button class="btn-green">
                    <i class="fa-solid fa-user"></i>
                    <h5>Exportar</h5>
                </button>
            </Link>
=======
                <textarea name="textarea" rows="10" cols="50">Hola profesor...
            
                </textarea>
                <button class="btn-verde">Enviar</button>
               </form>

               
>>>>>>> 8712c3d6a8c8627b63b73420c305467a16aff2fb



        </div>
        </section>
<<<<<<< HEAD


=======
>>>>>>> 8712c3d6a8c8627b63b73420c305467a16aff2fb

            <Footer />

        </div>
    )
}
export default Course