import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faAt, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "@portfolio/components/page-layout/section";
import Header3 from "@portfolio/components/typography/header-3";

export default function Contact() {
    return (
        <Section>
            <Header3>Get in touch</Header3>
            <div className="flex gap-12">
                <form className="flex-1/2 flex flex-col space-y-3">
                    <div className="relative">
                        <input
                            type="text"
                            className="py-2.5 sm:py-3 px-4 ps-11 block w-full bg-synth-black border-transparent rounded-lg sm:text-sm"
                            placeholder="Enter name"
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            className="py-2.5 sm:py-3 px-4 ps-11 block w-full bg-synth-black border-transparent rounded-lg sm:text-sm"
                            placeholder="Enter email address"
                        />
                        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                            <FontAwesomeIcon icon={faAt} />
                        </div>
                    </div>
                    <div className="relative">
                        <textarea
                            rows={4}
                            className="py-2.5 sm:py-3 px-4 block w-full bg-synth-black border-transparent rounded-lg sm:text-sm"
                            placeholder="Enter message"
                        />
                    </div>
                </form>
                <div className="flex-1/2">
                    <h4 className="font-inter font-semibold text-2xl pink-purple-gradient bg-clip-text text-transparent pb-3">
                        Contact Info:
                    </h4>
                    <div className="space-y-3">
                        <div>
                            <FontAwesomeIcon icon={faEnvelope} fixedWidth />
                            <span className="ml-3">ihm.andrew@gmail.com</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                            <span className="ml-3">
                                linkedin.com/in/ihm-andrew
                            </span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                            <span className="ml-3">github.com/ihellmasker</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}
