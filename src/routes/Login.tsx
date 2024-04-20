import {Button, Input} from "@fluentui/react-components";
import '../styles/Login.scss';
import {Link} from "react-router-dom";

export default function Login() {
    return (
        <div className="login-container">
            <div className="login-form">
                <h1 className="login-header">
                    Login
                </h1>

                <form className="login-form-container">
                    <Input className="login-input" type="text" placeholder="Username" />
                    <Input className="login-input" type="password" placeholder="Password" />
                    <Button className="login-button" appearance='primary'>
                        Login
                    </Button>
                    <Link to='/signup'>
                        <Button className="login-button" appearance='secondary'>
                            Create an account
                        </Button>
                    </Link>
                </form>
            </div>
        </div>
    );
}