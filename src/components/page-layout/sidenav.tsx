import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@portfolio/components/logo";
import SidenavLinks from "@portfolio/components/page-layout/sidenav-links";

export default function Sidenav() {
    return (
        <nav className="invisible md:visible md:w-40 h-screen bg-synth-black fixed top-0 border-r-4 border-synth-pink pt-8">
            <section className="mb-10 px-4">
                <Logo />
            </section>
            <section className="mb-40 px-4">
                <ul className="flex flex-row justify-center">
                    <li>
                        <a
                            href="https://github.com/ihellmasker"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faGithub}
                                fixedWidth
                                size="xl"
                            />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/ihm-andrew/"
                            target="_blank"
                        >
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                fixedWidth
                                size="xl"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ihm.andrew@gmail.com" target="_blank">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                fixedWidth
                                size="xl"
                            />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <SidenavLinks />
            </section>
        </nav>
    );
}
