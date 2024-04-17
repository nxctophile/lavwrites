import {Button} from "@fluentui/react-components";
import '../styles/Home.scss';
import {Link} from "react-router-dom";
import Topbar from "../components/Topbar.tsx";
import background from '../assets/background.mp4';

export default function Home() {
    return (
        <>
        <video className="background" autoPlay loop={true} muted>
            <source src={background}/>
        </video>
        <div className="home-container">
            <Topbar/>
            <div className="hero-container">
                <div className="hero-text">
                    Express Yourself.
                </div>
                <div className="hero-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cumque cupiditate deleniti iusto qui similique totam voluptatibus! Eos quos, reiciendis. Atque dolor ducimus earum fugit quaerat similique sunt tempora velit! Asperiores corporis libero minus molestiae, nobis quod quos similique?
                </div>
                <div className="hero-button-container">
                    <Link className="hero-link" to={"/about"}>
                        <Button className="hero-button" appearance="outline">
                            Know more
                        </Button>
                    </Link>
                    <Link className="hero-link" to={"/signup"}>
                        <Button className="hero-button story-button" appearance="outline">
                            Create your own story
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}