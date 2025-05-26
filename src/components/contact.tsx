import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactForm from "@portfolio/components/contact-form";
import Section from "@portfolio/components/page-layout/section";
import Header3 from "@portfolio/components/typography/header-3";

export default function Contact() {
    return (
        <Section>
            <Header3>Get in touch</Header3>
            <div className="flex gap-12">
                <ContactForm />
                <div className="flex-1/2">
                    <h4 className="font-inter font-semibold text-2xl pink-purple-gradient bg-clip-text text-transparent pb-3">
                        Contact Info:
                    </h4>
                    <div className="space-y-3">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                            <span className="ml-3">
                                <a
                                    href="mailto:ihm.andrew@gmail.com"
                                    target="_blank"
                                    className="underline hover:no-underline"
                                >
                                    ihm.andrew@gmail.com
                                </a>
                            </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                            <span className="ml-3">
                                <a
                                    href="https://www.linkedin.com/in/ihm-andrew/"
                                    target="_blank"
                                    className="underline hover:no-underline"
                                >
                                    linkedin.com/in/ihm-andrew
                                </a>
                            </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                            <span className="ml-3">
                                <a
                                    href="https://github.com/ihellmasker"
                                    target="_blank"
                                    className="underline hover:no-underline"
                                >
                                    github.com/ihellmasker
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
