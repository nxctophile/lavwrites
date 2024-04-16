import {Button} from "@fluentui/react-components";
import '../styles/Home.scss';
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="container">
                <div className="title">
                    Hey, I'm the next page!
                </div>
                <Link to={"/"}>
                    <Button className="button-primary" appearance="secondary">
                        Go to the prev page
                    </Button>
                </Link>
            </div>
        </>
    )
}