import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Dcenter from "../components/Dcenter/Dcenter"
import User from "../components/User/user"
import '../index.css'
import Navbar from "../components/Navbar/Navbar"


function Dashboard(){
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

</section> <Dcenter />
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard