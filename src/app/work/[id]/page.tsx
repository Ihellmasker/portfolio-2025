import DeviceImageFrame from "@portfolio/components/my-work/device-image-frame";
import Section from "@portfolio/components/page-layout/section";
import Header3 from "@portfolio/components/typography/header-3";
import { WORK_DATA } from "@portfolio/data/work-data";
import { notFound } from "next/navigation";
import { use } from "react";

export default function WorkPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = use(params);
    const data = WORK_DATA.find((val) => val.id === id);

    if (!data) {
        return notFound();
    }

    return (
        <>
            <Section topBorder={false}>
                <Header3>
                    {data.label}&nbsp;
                    <span className="uppercase text-xs text-white">
                        {data.type}
                    </span>
                </Header3>
                {data.url_active ? (
                    <a href={data.url}>{data.url}</a>
                ) : (
                    <span>{data.url}</span>
                )}
            </Section>
            <Section>
                <div>
                    <code className="text-base blue-white-gradient bg-clip-text text-transparent mb-4">
                        &#47;&#47; {data.tags.join(", ")}
                    </code>
                    {data.content_blocks.map((block) => {
                        return (
                            <div key={block.title} className="pb-4">
                                <h4 className="font-inter font-bold mb-1.5">
                                    {block.title}
                                </h4>
                                <div className="text-base">{block.body}</div>
                            </div>
                        );
                    })}
                </div>
                <div className="relative float-left mr-5 mb-5 w-full md:w-160">
                    <DeviceImageFrame
                        data={data}
                        allowForMobile={!!data.images.mobile}
                    />
                    {data.images.mobile && (
                        <DeviceImageFrame data={data} isMobile />
                    )}
                </div>
            </Section>
        </>
    );
}
