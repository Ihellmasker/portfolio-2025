import Link from "next/link";

export default function Logo() {
    return (
        <Link
            href={{
                pathname: "/",
            }}
        >
            <div className="flex flex-col">
                <div className="mx-auto font-inter pink-purple-gradient bg-clip-text text-transparent uppercase text-3xl font-light tracking-wider">
                    Andys
                </div>
                <div className="mx-auto font-inter pink-purple-gradient bg-clip-text text-transparent uppercase text-2xl font-light tracking-widest -mt-4">
                    Things
                </div>
            </div>
        </Link>
    );
}
