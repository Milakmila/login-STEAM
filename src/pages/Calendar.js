import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

import '../index.css'
import Calendar from "../components/calendar/Calendar"

function Calendar2(){
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
            <Calendar />
            </div>
            <Footer />
        </div>
    )
}

export default Calendar2