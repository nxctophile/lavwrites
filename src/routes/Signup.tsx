import '../styles/Signup.scss';
import {Button} from "@fluentui/react-components";
import {Link} from "react-router-dom";

export default function Signup() {
    return (
        <div className="signup-container">
            <h1>Never gonna give you up</h1>
            <h1>Never gonna let you down</h1>
            <h1>Never gonna run around and</h1>
            <h1>Desert you</h1>
            <Link to='https://youtu.be/dQw4w9WgXcQ?si=DFEIvzQK277760Sl'>
                <Button appearance='primary'>
                    Go back to home
                </Button>
            </Link>
        </div>
    );
}