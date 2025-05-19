import { ReactNode } from "react";

export default function FrontPageHeader({ children }: { children: ReactNode }) {
    return (
        <h3 className="font-inter font-semibold text-4xl pink-purple-gradient bg-clip-text text-transparent pb-3">
            {children}
        </h3>
    );
}
