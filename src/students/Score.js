import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import ScoreS from "../components/ScoreS/ScoreS";
import Navbar from "../components/Navbar/Navbar";

function Score(){
    return(
        <div>
            <Header />
            <div className="dashboard-nav-center">
            <div className="bar-dropdown">

<input type="checkbox" id="chk-bar"></input>
        <div className="hamburguesa">
      <label for="chk-bar" class="btn-menu">
      <i class="fa-solid fa-bars"></i>
          </label>


        </div>
        <div className="items-bar">
            <Navbar />
        </div>

</div>
            <ScoreS />
            </div>
            <Footer />
        </div>
    )
}
export default Score