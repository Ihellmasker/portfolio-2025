"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLink {
    id: string;
    pathname: string;
    label: string;
}

export default function SidenavLinks() {
    const pathname = usePathname();

    const navLinks: INavLink[] = [
        {
            id: "about",
            pathname: "/",
            label: "About",
        },
        {
            id: "skills",
            pathname: "/skills",
            label: "Skills",
        },
        {
            id: "work",
            pathname: "/work",
            label: "My work",
        },
        {
            id: "contact",
            pathname: "/contact",
            label: "Contact",
        },
    ];

    return (
        <ul className="flex flex-col">
            {navLinks.map((link) => (
                <li key={link.id}>
                    <Link
                        href={{
                            pathname: link.pathname,
                        }}
                        className="flex flex-row"
                    >
                        <div className="flex-1 text-right pr-2">
                            {link.label}
                        </div>
                        {pathname === link.pathname && (
                            <div className="bg-linear-to-b from-synth-bluegrey from-0% to-white/20 to-75% text-white/90 w-2"></div>
                        )}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
