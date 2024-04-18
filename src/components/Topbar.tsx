import {Link} from "react-router-dom";
import {Button, Switch} from "@fluentui/react-components";
import '../styles/components/Topbar.scss';
import icon_active from '../assets/icon-x32.png';
import icon_passive from '../assets/icon-alt-x24.png';
import {useState} from "react";

export default function Topbar () {
    const [icon, setIcon] = useState(icon_passive);

    return (
        <div className="topbar-container">
            <div className="branding-container">
                <Link onMouseOver={() => setIcon(icon_active)} onMouseOut={() => setIcon(icon_passive)} className="branding" to="/">
                    lavWrites_.
                </Link>
                <img className="branding-icon" src={icon} alt="lavWrites icon" />
            </div>

            <div className="navigation-container">
                <div className="links-container">
                    <Link to="/about" className="link text-link">
                        Who are we?
                    </Link>
                    <Link to="/contribute" className="link text-link">
                        Contribute :)
                    </Link>
                </div>

                <div className="links-container">
                    <Link to="/login" className="link">
                        <Button className="link-button" appearance='secondary'>
                            Login
                        </Button>
                    </Link>
                </div>
                
                <div className="switch-container">
                    <div className="switch-option">
                        <span className="material-symbols-rounded">
                            dark_mode
                        </span>
                    </div>
                    <Switch/>
                    <div className="switch-option">
                        <span className="material-symbols-rounded">
                            light_mode
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}