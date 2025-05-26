import { ReactNode } from "react";

export default function Section({
    children,
    topBorder = true,
}: {
    children: ReactNode;
    topBorder?: boolean;
}) {
    let className = "px-8 py-4";
    if (topBorder) className += " border-t-2 border-synth-black/50";

    return <section className={className}>{children}</section>;
}
