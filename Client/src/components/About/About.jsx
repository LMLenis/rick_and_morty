import me from "../../assets/me2.jpg"
import styledAbout from './About.module.css'

const About = () => {
    return(
        <div className={styledAbout.card}>
            <h2>LuisMa</h2>
            <h2>Humanoid</h2>
            <h2>Male</h2>
            <h2>Alive</h2>
            <h2>Colombia</h2>
            <img className={styledAbout.cardImage} src= {me} alt='' />
        </div>

    )
}

export default About;