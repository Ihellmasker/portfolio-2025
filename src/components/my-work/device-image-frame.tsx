import { faEllipsisV, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IWorkData } from "@portfolio/data/work-data";
import Image from "next/image";

export default function DeviceImageFrame({
    data,
    isMobile = false,
    allowForMobile = false,
}: {
    data: IWorkData;
    isMobile?: boolean;
    allowForMobile?: boolean;
}) {
    return (
        <div
            className={`relative ${
                isMobile
                    ? "z-1 w-3/10 -mt-40 md:-mt-70 float-right"
                    : `z-0 ${allowForMobile ? "w-9/10" : "w-full"}`
            }`}
        >
            <div className="bg-gray-300 px-1.5 pb-1.5 rounded-sm shadow-2xl">
                <div className="h-11 flex justify-between">
                    <div className="flex-1 flex h-full items-center overflow-hidden">
                        <div className="flex-1 h-6 ml-0.5 pl-2.5 pr-1.5 rounded-xl overflow-hidden text-xs flex items-center bg-white text-black">
                            <div className="mr-2">
                                <FontAwesomeIcon icon={faLock} />
                            </div>
                            <div className="overflow-hidden whitespace-nowrap text-ellipsis">
                                {data.url}
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${isMobile && "hidden"} flex gap-0.5 ml-10`}
                    >
                        <div className="bg-black/20 h-7 w-7 duration-300 hover:opacity-70"></div>
                        <div className="bg-black/20 h-7 w-7 duration-300 hover:opacity-70"></div>
                        <div className="bg-orange-700 h-7 w-7 duration-300 hover:opacity-70"></div>
                    </div>
                    <div
                        className={`${
                            !isMobile && "hidden"
                        } flex items-center ml-2`}
                    >
                        <div className="h-7 w-7 rounded-full duration-300 text-black text-center hover:bg-black/20">
                            <FontAwesomeIcon icon={faEllipsisV} fixedWidth />
                        </div>
                    </div>
                </div>
                {isMobile && data.images.mobile && (
                    <Image
                        src={data.images.mobile}
                        alt="Screenshot"
                        className="rounded-sm"
                    />
                )}
                {!isMobile && data.images.desktop && (
                    <Image
                        src={data.images.desktop}
                        alt="Screenshot"
                        className="rounded-sm"
                    />
                )}
            </div>
        </div>
    );
}
