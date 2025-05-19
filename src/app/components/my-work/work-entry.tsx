import { IWorkData } from "@portfolio/data/work-data";
import Image from "next/image";

function GradientLine({ side }: { side: "top" | "left" | "bottom" | "right" }) {
    let lineClass =
        "absolute [--gradient-bg:var(--color-synth-orange)]/80 transition-all duration-400 group-hover:bg-synth-orange";

    if (side === "left" || side === "right")
        lineClass +=
            " bg-[linear-gradient(to_bottom,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] top-0 bottom-0 w-px group-hover:top-4 group-hover:bottom-4";
    else
        lineClass +=
            " bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] left-0 right-0 h-px group-hover:left-4 group-hover:right-4";

    switch (side) {
        case "top":
            lineClass += " top-4";
            break;
        case "left":
            lineClass += " left-4";
            break;
        case "bottom":
            lineClass += " bottom-4";
            break;
        case "right":
            lineClass += " right-4";
            break;
    }

    return <div className={lineClass}></div>;
}

export default function WorkEntry({ entryData }: { entryData: IWorkData }) {
    return (
        <button className="inline-block relative p-6 group">
            <GradientLine side="top" />
            <GradientLine side="left" />
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
            <GradientLine side="right" />
            <GradientLine side="bottom" />
            <div className="absolute left-8 right-8 top-1/10 text-center opacity-0 font-bold text-shadow-lg/30 transition-all group-hover:opacity-100 group-hover:top-3/10">
                {entryData.label}
            </div>
            <div className="absolute bg-synth-plum border-4 border-synth-light-pink px-3 py-2 rounded-lg left-1/2 -translate-1/2 bottom-1/10 text-center opacity-0 font-bold text-shadow-lg/30 transition-all group-hover:opacity-100 group-hover:bottom-3/10">
                More info
            </div>
        </button>
    );
}
