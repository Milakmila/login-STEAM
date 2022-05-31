import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import {useParams} from "react-router-dom";
import {getCourse} from "../courses";


function Course(){
    const params=useParams();
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
        
                <textarea name="textarea" rows="10" cols="50">Hola profesor...
            
                </textarea>
                <button class="btn-verde">Enviar</button>
               </form>

               



        </div>
        </section>

            <Footer />

        </div>
    )
}
export default Course