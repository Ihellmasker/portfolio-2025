"use client";

import { faAt, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IContactFormData, sendEmail } from "@portfolio/app/utils/send-email";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const { register, handleSubmit } = useForm<IContactFormData>();

    function onSubmit(data: IContactFormData) {
        sendEmail(data);
    }

    return (
        <form
            className="flex-1/2 flex flex-col space-y-3"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="relative">
                <input
                    type="text"
                    className="py-2.5 sm:py-3 px-4 ps-11 block w-full bg-synth-black border-transparent rounded-lg sm:text-sm"
                    placeholder="Enter name"
                    {...register("name", { required: true })}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <div className="relative">
                <input
                    type="email"
                    className="py-2.5 sm:py-3 px-4 ps-11 block w-full bg-synth-black border-transparent rounded-lg sm:text-sm"
                    placeholder="Enter email address"
                    {...register("email", { required: true })}
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
                    <FontAwesomeIcon icon={faAt} />
                </div>
            </div>
            <div className="relative">
                <textarea
                    rows={4}
                    className="py-2.5 sm:py-3 px-4 block w-full bg-synth-black border-transparent rounded-lg sm:text-sm"
                    placeholder="Enter message"
                    {...register("message", { required: true })}
                />
            </div>
            <div>
                <button className="py-3 px-10 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-synth-light-pink text-white hover:bg-synth-pink focus:outline-hidden focus:bg-synth-plum disabled:opacity-50 disabled:pointer-events-none">
                    Send
                </button>
            </div>
        </form>
    );
}
