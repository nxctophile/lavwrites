import {Button} from "@fluentui/react-components";
import '../styles/Home.scss';
import {Link} from "react-router-dom";
import Topbar from "../components/Topbar.tsx";
import background from '../assets/background.mp4';
import ui_icon from '../assets/ui.png';
import writing_icon from '../assets/writing-x128.png';
import cross_platform_icon from '../assets/cross-platform-x128.png';
import open_source_icon from '../assets/open-source-x128.png';

export default function Home() {
    return (
        <>
        <video className="background" autoPlay loop={true} muted>
            <source src={background}/>
        </video>
        <div className="home-container">
            <Topbar/>
            <section className="hero-container">
                <div className="hero-text">
                    Express Yourself.
                </div>
                <p className="hero-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cumque cupiditate deleniti iusto qui similique totam voluptatibus! Eos quos, reiciendis. Atque dolor ducimus earum fugit quaerat similique sunt tempora velit! Asperiores corporis libero minus molestiae, nobis quod quos similique?
                </p>
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
            </section>
            <section className="features-container">
                <div className="features-title">
                    Why lavWrites? you might ask...
                </div>
                <div className="features-description">
                    Well we got our reasons
                </div>

                <div className="features">
                    <div className="feature">
                        <img src={ui_icon} alt='Feature icon' className="feature-icon"/>
                        <div className="feature-title">
                            Beautiful UI/UX
                        </div>
                        <div className="feature-description">
                            Something you've never seen before :P
                        </div>
                    </div>
                    <div className="feature">
                        <img src={writing_icon} alt='Feature icon' className="feature-icon"/>
                        <div className="feature-title">
                            Tell your story
                        </div>
                        <div className="feature-description">
                            We have all the writing tools you'll need
                        </div>
                    </div>
                    <div className="feature">
                        <img src={cross_platform_icon} alt='Feature icon' className="feature-icon"/>
                        <div className="feature-title">
                            Cross platform
                        </div>
                        <div className="feature-description">
                            Available for all your devices
                        </div>
                    </div>
                    <div className="feature">
                        <img src={open_source_icon} alt='Feature icon' className="feature-icon"/>
                        <div className="feature-title">
                            Open source
                        </div>
                        <div className="feature-description">
                            We believe in the power of community
                        </div>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}