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
                <div className="mb-5">
                    <div className="mb-4">
                        <code className="text-base">
                            &#47;&#47; {data.tags.join(", ")}
                        </code>
                    </div>
                    {data.content_blocks.map((block) => (
                        <div key={block.title} className="flex flex-row mb-2">
                            <div className="w-2/10 font-inter">
                                <span className="blue-white-gradient bg-clip-text text-transparent">
                                    {block.title}
                                </span>
                            </div>
                            <div className="flex-1 text-base">{block.body}</div>
                        </div>
                    ))}
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
