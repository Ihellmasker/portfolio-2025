import Contact from "@portfolio/app/components/contact";
import Footer from "@portfolio/app/components/footer";
import Header from "@portfolio/app/components/header";
import Intro from "@portfolio/app/components/intro";
import { MyWork } from "@portfolio/app/components/my-work";
import Skills from "@portfolio/app/components/skills";

export default function Home() {
    return (
        <main className="ml-40">
            <Header />
            <Intro />
            <Skills />
            <MyWork />
            <Contact />
            <Footer />
        </main>
    );
}
