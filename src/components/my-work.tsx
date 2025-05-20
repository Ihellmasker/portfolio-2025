import WorkEntry from "@portfolio/components/my-work/work-entry";
import FrontPageHeader from "@portfolio/components/page-layout/front-page-header";
import FrontPageSection from "@portfolio/components/page-layout/front-page-section";
import { WORK_DATA } from "@portfolio/data/work-data";

export function MyWork() {
    return (
        <FrontPageSection>
            <FrontPageHeader>My Work</FrontPageHeader>
            <div className="">
                {WORK_DATA.map((entry) => {
                    return <WorkEntry key={entry.id} entryData={entry} />;
                })}
            </div>
        </FrontPageSection>
    );
}
