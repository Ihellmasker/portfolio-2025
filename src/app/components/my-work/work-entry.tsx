import { IWorkData } from "@portfolio/app/data/work-data";
import Image from "next/image";

function GradientLine({ vertical }: { vertical?: boolean }) {
    let lineClass =
        "absolute [--gradient-bg:var(--color-synth-orange)]/80 transition-all duration-400 group-hover:bg-synth-orange";
    if (vertical)
        lineClass +=
            " bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] top-0 bottom-0 left-4 w-px group-hover:top-4 group-hover:bottom-4";
    else
        lineClass +=
            " bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] left-0 right-0 top-4 h-px group-hover:left-4 group-hover:right-4";

    return <div className={lineClass}></div>;
}

export default function WorkEntry({ entryData }: { entryData: IWorkData }) {
    return (
        <div className="inline-block relative p-6 group">
            <GradientLine />
            <GradientLine vertical />
            {entryData.images.thumbnail ? (
                <Image
                    src={entryData.images.thumbnail}
                    alt={`Screen shot of ${entryData.label} website`}
                    className="relative transition-all duration-400 group-hover:blur-[2px]"
                />
            ) : (
                <div>No image</div>
            )}
            <div className="absolute top-6 left-6 bottom-6 right-6 transition-all duration-400 blue-white-gradient opacity-0 group-hover:opacity-50"></div>
            {/* <div
                className={`absolute top-0 bottom-0 right-4 w-px ${gradientBase(
                    "to_bottom"
                )} group-hover:top-4 group-hover:bottom-4`}
            ></div>
            <div
                className={`absolute bottom-4 left-0 right-0 h-px ${gradientBase(
                    "to_right"
                )} group-hover:left-4 group-hover:right-4`}
            ></div> */}
            {/* <div className="absolute left-8 right-8 top-1/10 text-center opacity-0 font-bold text-shadow-lg/30 transition-all group-hover:opacity-100 group-hover:top-3/10">
                {entryData.label}
            </div>
            <div className="absolute bg-synth-plum border-4 border-synth-light-pink px-3 py-2 rounded-lg left-1/2 -translate-1/2 bottom-1/10 text-center opacity-0 font-bold text-shadow-lg/30 transition-all group-hover:opacity-100 group-hover:bottom-3/10">
                More info
            </div> */}
        </div>
    );
}
