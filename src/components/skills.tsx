import Section from "@portfolio/components/page-layout/section";
import SkillsTextBox from "@portfolio/components/skills/skills-text-box";
import Header3 from "@portfolio/components/typography/header-3";

export default function Skills() {
    return (
        <Section>
            <Header3>The Skills I Offer</Header3>
            <div className="flex flex-wrap gap-8">
                <SkillsTextBox title="Frontend Excellence">
                    <p>
                        With over a decade of experience in web development, I
                        specialise in building high-quality, responsive frontend
                        applications using modern frameworks like{" "}
                        <strong>React</strong> and <strong>Ember.js</strong>.
                        I&apos;m fluent in <strong>TypeScript</strong>,{" "}
                        <strong>JavaScript</strong>, and{" "}
                        <strong>Agile development practices</strong>, with a
                        strong foundation in <strong>OOP</strong> and{" "}
                        <strong>SOLID principles</strong>.
                    </p>
                </SkillsTextBox>
                <SkillsTextBox title="Project Leadership">
                    <p>
                        I’ve led projects as a tech lead, collaborated with
                        cross-functional teams, and consistently delivered
                        pixel-perfect UIs from Figma and Adobe designs. I’m
                        comfortable owning the frontend, mentoring juniors, and
                        working directly with stakeholders to turn requirements
                        into reality.
                    </p>
                </SkillsTextBox>
                <SkillsTextBox title="Delivering Value">
                    <p>
                        Whether it’s building dynamic web apps, improving design
                        systems, or bringing your brand to life online, I can
                        jump in and add value quickly. I care about clean code,
                        great UX, and delivering results that matter.
                    </p>
                </SkillsTextBox>
            </div>

            <div>
                <SkillsTextBox title="Tools &amp; Technologies">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 list-disc list-inside">
                        <li>React</li>
                        <li>Ember.js</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Next.js</li>
                        <li>HTML5 / CSS3</li>
                        <li>Tailwind / SASS</li>
                        <li>Figma</li>
                        <li>Adobe Creative Suite</li>
                        <li>Jest</li>
                        <li>MongoDB / MySQL</li>
                        <li>Git / Bitbucket</li>
                    </ul>
                </SkillsTextBox>
            </div>
        </Section>
    );
}
