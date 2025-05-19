import { ReactNode } from "react";

export default function FrontPageSection({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <section className="px-8 py-4 border-t-2 border-synth-black/50">
            {children}
        </section>
    );
}
