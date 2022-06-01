import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Dcenter from "../components/Dcenter/Dcenter"
import User from "../components/User/user"
import '../index.css'

function Dashboard(){
    return(
        <div>
            <User />
            <Header />
            <Dcenter />
        
            <Footer />
        </div>
    )
}

export default Dashboard