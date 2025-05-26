import WorkEntry from "@portfolio/components/my-work/work-entry";
import Section from "@portfolio/components/page-layout/section";
import Header3 from "@portfolio/components/typography/header-3";
import { WORK_DATA } from "@portfolio/data/work-data";

export function MyWork() {
    return (
        <Section>
            <Header3>My Work</Header3>
            <div className="">
                {WORK_DATA.map((entry) => {
                    return <WorkEntry key={entry.id} entryData={entry} />;
                })}
            </div>
        </Section>
    );
}
