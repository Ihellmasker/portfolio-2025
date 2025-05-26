import Contact from "@portfolio/components/contact";
import Footer from "@portfolio/components/footer";
import Header from "@portfolio/components/header";
import Intro from "@portfolio/components/intro";
import { MyWork } from "@portfolio/components/my-work";
import Skills from "@portfolio/components/skills";

export default function Home() {
    return (
        <>
            <Header />
            <Intro />
            <Skills />
            <MyWork />
            <Contact />
            <Footer />
        </>
    );
}
