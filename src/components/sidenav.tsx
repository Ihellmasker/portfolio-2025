import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@portfolio/components/logo";
import Link from "next/link";

export default function Sidenav() {
    return (
        <nav className="w-40 h-screen bg-synth-black fixed top-0 border-r-4 border-synth-pink px-4 pt-8">
            <section className="mb-10">
                <Logo />
            </section>
            <section className="mb-40">
                <ul className="flex flex-row justify-center">
                    <li>
                        <Link href={"https://github.com/ihellmasker"}>
                            <FontAwesomeIcon
                                icon={faGithub}
                                fixedWidth
                                size="xl"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={"https://www.linkedin.com/in/ihm-andrew/"}>
                            <FontAwesomeIcon
                                icon={faLinkedin}
                                fixedWidth
                                size="xl"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href={"mailto:ihm.andrew@gmail.com"}>
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                fixedWidth
                                size="xl"
                            />
                        </Link>
                    </li>
                </ul>
            </section>
            <section>
                <ul className="flex flex-col">
                    <li>Nav 1</li>
                    <li>Nav 2</li>
                    <li>Nav 3</li>
                    <li>Nav 4</li>
                </ul>
            </section>
        </nav>
    );
}
