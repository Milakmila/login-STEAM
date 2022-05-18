import './Header.css'
import logotipo from './Logotipo.png'

function Header() { 
    return (

    <header>
        <script src="https://kit.fontawesome.com/d5d81529d3.js" crossorigin="anonymous"></script>
        <section className="logo-index">
        <div class="logo">
            <img src={logotipo} alt="Logotipo"></img>
        </div>

        <div class="user">
            <i class="fa-solid fa-circle-user user user-icon"></i>
            <div class="down-arrow">
                <p>Beatriz Pinzon</p>
                <i class="fa-solid fa-caret-down  fa-1x down-arrow arrow"></i>
            </div>
        </div>
        </section>
        <div className="barra">
        <div className="linea-proof">   
            </div>
            <div className="hamburguesa">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div className="linea-proof">   
            </div>

        </div>
        
    </header>
    ) 
}
export default Header;