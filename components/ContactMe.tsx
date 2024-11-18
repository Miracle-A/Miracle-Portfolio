import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:madeoye@ttu.edu?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (Email: ${formData.email})`;
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 se:top-24 md:top-20 uppercase tracking-[12px] sm:tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col gap-4 se:gap-[30px] sm:space-y-10">
        <h4 className="text-lg se:text-xl sm:text-3xl md:text-4xl font-semibold text-center p-0 mt-16 se:mt-0">
          I have got just what you need. <br></br>
          <span className="decoration-[#F7AB0A]/50 underline">Let us Talk</span>
        </h4>
        <div className="space-y-2 sm:space-y-7 md:space-y-10">
          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-lg se:text-xl md:text-2xl">+1281876****</p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-lg se:text-xl md:text-2xl">
              adeoyemiracle123@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5 sm:h-7 sm:w-7 animate-pulse" />
            <p className="text-lg se:text-xl md:text-2xl">Sugar Land, Texas</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-80 sm:w-fit mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-2 se:py-3 md:py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
