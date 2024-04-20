import {Button} from "@fluentui/react-components";
import '../styles/Home.scss';
import {Link} from "react-router-dom";
import Topbar from "../components/Topbar.tsx";
import background_dark from '../assets/background.mp4';
import background_light from '../assets/background_light.mp4';
import ui_icon from '../assets/ui.png';
import writing_icon from '../assets/writing-x128.png';
import cross_platform_icon from '../assets/cross-platform-x128.png';
import open_source_icon from '../assets/open-source-x128.png';
import saturn from '../assets/saturn.gif';
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {
    darkButton,
    darkFeatureCard, darkFeaturesSection, darkSaturn,
    darkTopbar,
    lightButton,
    lightFeatureCard, lightFeaturesSection, lightSaturn,
    lightTopbar
} from "../theming/themes.ts";

export default function Home() {
    // State declarations
    const [darkMode, setDarkMode] = useState(true);
    const [background, setBackground] = useState(background_dark);
    const [topbarStyles, setTopbarStyles] = useState(darkTopbar);
    const [topbarButtonStyles, setTopbarButtonStyles] = useState(darkButton);
    const [featureCardStyles, setFeatureCardStyles] = useState(darkFeatureCard);
    const [saturnStyles, setSaturnStyles] = useState(darkSaturn);
    const [featuresSectionStyles, setFeaturesSectionStyles] = useState(darkFeaturesSection);

    // Function declarations
    const handleDarkModeState: Dispatch<SetStateAction<boolean>> = (value) => {
        setDarkMode(value);
    };

    // Listening to changes in "darkMode" state
    useEffect(() => {
        if(darkMode) {
            setBackground(background_dark);
            setTopbarStyles(darkTopbar);
            setTopbarButtonStyles(darkButton);
            setFeatureCardStyles(darkFeatureCard);
            setSaturnStyles(darkSaturn);
            setFeaturesSectionStyles(darkFeaturesSection);
        } else {
            setBackground(background_light);
            setTopbarStyles(lightTopbar);
            setTopbarButtonStyles(lightButton);
            setFeatureCardStyles(lightFeatureCard);
            setSaturnStyles(lightSaturn);
            setFeaturesSectionStyles(lightFeaturesSection);
        }
    }, [darkMode]);

    return (
        <>
        <video className="background" autoPlay loop={true} muted key={background}>
            <source src={background}/>
        </video>
            <div className="home-container">
                <Topbar darkMode={darkMode} setDarkMode={handleDarkModeState} topbarStyles={topbarStyles}
                        topbarButtonStyles={topbarButtonStyles}/>
                <section className="hero-container">
                    <div className="hero-section">
                        <div className="hero-text">
                            Express Yourself.
                        </div>
                        <p className="hero-description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus architecto cumque
                            cupiditate
                            deleniti iusto qui similique totam voluptatibus! Eos quos, reiciendis. Atque dolor ducimus
                            earum
                            fugit quaerat similique sunt tempora velit! Asperiores corporis libero minus molestiae,
                            nobis
                            quod quos similique?
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
                    </div>
                    <div style={saturnStyles} className="saturn">
                        <img src={saturn} alt="Saturn GIF"/>
                    </div>
                </section>

                <section className="what-section">
                    <div className="what-section-title">
                        What exactly is lavWrites? you might ask...
                    </div>
                    <div className="what-section-description">
                        We gotchu!
                    </div>
                </section>

                <section style={featuresSectionStyles} className="features-section">
                    <div className="features-title">
                        Why lavWrites? you might ask...
                    </div>
                    <div className="features-description">
                        Well we got our reasons
                    </div>

                    <div className="features-container">
                        <div className="features">
                            <div style={featureCardStyles} className="feature-card">
                                <img src={ui_icon} alt='Feature icon' className="feature-icon"/>
                                <div className="feature-title">
                                    Beautiful UI/UX
                                </div>
                                <div className="feature-description">
                                    Something you've never seen before :P
                                </div>
                            </div>
                            <div style={featureCardStyles} className="feature-card">
                                <img src={writing_icon} alt='Feature icon' className="feature-icon"/>
                                <div className="feature-title">
                                    Tell your story
                                </div>
                                <div className="feature-description">
                                    We have all the writing tools you'll need
                                </div>
                            </div>
                            <div style={featureCardStyles} className="feature-card">
                                <img src={cross_platform_icon} alt='Feature icon' className="feature-icon"/>
                                <div className="feature-title">
                                    Cross platform
                                </div>
                                <div className="feature-description">
                                    Available for all your devices
                                </div>
                            </div>
                            <div style={featureCardStyles} className="feature-card">
                                <img src={open_source_icon} alt='Feature icon' className="feature-icon"/>
                                <div className="feature-title">
                                    Open source
                                </div>
                                <div className="feature-description">
                                    We believe in the power of community
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="last-section">
                    <div className="last-container">
                        <div className="last-section-title">
                            Got more questions? try using it :)
                        </div>
                        <Button className="last-section-button">
                            Login
                        </Button>
                        <Button className="last-section-button">
                            Create an account
                        </Button>
                    </div>

                    <footer style={featuresSectionStyles} className="home-footer">
                    </footer>
                </section>
            </div>
        </>
    )
}