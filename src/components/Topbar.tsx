import {Link} from "react-router-dom";
import {Button, Switch} from "@fluentui/react-components";
import '../styles/components/Topbar.scss';

export default function Topbar () {
    return (
        <div className="topbar-container">
            <div className="branding-container">
                <Link className="branding" to="/">
                    lavWrites
                </Link>
            </div>

            <div className="navigation-container">
                <div className="links-container">
                    <Link to="/about" className="link">
                        Who are we?
                    </Link>
                    <Link to="/contact" className="link">
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