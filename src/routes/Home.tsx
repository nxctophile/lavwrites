import {Button} from "@fluentui/react-components";
import '../styles/Home.scss';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="title">
                    Hey, I'm home page!
                </div>
                <Link to={"/next"}>
                    <Button className="button-primary" appearance="primary">
                        Go to next page
                    </Button>
                </Link>
            </div>
        </>
    )
}