import ScoreT from "../components/ScoreT/ScoreT"
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import CardScore from "../components/Tables/CardScoreT"
function ScoreTeacher(){
    return(
        <section>
            <Header />
            <ScoreT />
            <CardScore />
            <Footer />

        </section>
    )
}
export default ScoreTeacher