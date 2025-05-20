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

    return <>{data.label}</>;
}
