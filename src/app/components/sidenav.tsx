import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidenav() {
    return (
        <nav className="w-40 h-screen bg-synth-black fixed top-0 border-r-4 border-synth-pink px-4">
            <section>
                <div>AndysThings</div>
            </section>
            <section>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faGithub} fixedWidth />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                    </li>
                </ul>
            </section>
            <section>
                <ul>
                    <li>Nav 1</li>
                    <li>Nav 2</li>
                    <li>Nav 3</li>
                    <li>Nav 4</li>
                </ul>
            </section>
        </nav>
    );
}
