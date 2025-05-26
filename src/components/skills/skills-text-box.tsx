import { ReactNode } from "react";

export default function SkillsTextBox({
    children,
    title,
}: {
    children: ReactNode;
    title: string;
}) {
    return (
        <div className="mb-6 basis-xs grow">
            <h4 className="text-xl font-semibold mb-2 text-center">{title}</h4>
            <div className="mb-3 [--gradient-bg:var(--color-synth-orange)]/80 bg-[linear-gradient(to_right,_transparent_0%,_var(--gradient-bg)_9.27%,_var(--gradient-bg)_90.7%,_transparent_100%)] w-full h-px"></div>
            {children}
        </div>
    );
}
