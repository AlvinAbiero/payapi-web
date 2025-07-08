"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import tesla from "@/public/shared/desktop/tesla.svg";
import hp from "@/public/shared/desktop/hewlett-packard.svg";
import microsoft from "@/public/shared/desktop/microsoft.svg";
import oracle from "@/public/shared/desktop/oracle.svg";
import google from "@/public/shared/desktop/google.svg";
import nvidia from "@/public/shared/desktop/nvidia.svg";
import Cta from "./Cta";

type FormValues = {
  name: string;
  email: string;
  company: string;
  title: string;
  message: string;
  subscribe: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log("Form data:", data);

    reset();
  };

  return (
    <div>
      <section className="max-w-176 lg:max-w-full mx-auto lg:px-24 lg:pb-36 md:px-16 pb-24 px-8">
        <h2 className="text-police-blue font-serif lg:text-[5rem] lg:leading-[5rem] max-w-6xl lg:text-left text-center md:text-[4.2rem] text-[3.2rem] leading-[3.6rem] pb-0">
          Submit a help request and we will get in touch shortly
        </h2>
        <div className="grid lg:grid-cols-2 items-center lg:gap-52 xl:gap-16 grid-cols-1 gap-28">
          {/* form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-start gap-10"
          >
            <div className="w-full">
              {/* Name */}
              <div>
                <input
                  {...register("name", {
                    required: "This field can't be empty",
                  })}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="bg-transparent py-7 px-5 border-b border-police-blue/50 w-full outline-0 placeholder:text-[1.5rem] text-[1.5rem] text-police-blue leading-[2.5rem]"
                />
                {errors.name && (
                  <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                    {errors.name.message}
                  </p>
                )}
              </div>
              {/* email */}
              <div>
                <input
                  {...register("email", {
                    required: "This field can't be empty",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="bg-transparent py-7 px-5 border-b border-police-blue/50 w-full outline-0 placeholder:text-[1.5rem] text-[1.5rem] text-police-blue leading-[2.5rem]"
                />
                {errors.email && (
                  <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* company */}
              <div>
                <input
                  {...register("company", {
                    required: "This field can't be empty",
                  })}
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="bg-transparent py-7 px-5 border-b border-police-blue/50 w-full outline-0 placeholder:text-[1.5rem] text-[1.5rem] text-police-blue leading-[2.5rem]"
                />
                {errors.company && (
                  <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                    {errors.company.message}
                  </p>
                )}
              </div>
              {/* Title */}
              <div>
                <input
                  {...register("title", {
                    required: "This field can't be empty",
                  })}
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="bg-transparent py-7 px-5 border-b border-police-blue/50 w-full outline-0 placeholder:text-[1.5rem] text-[1.5rem] text-police-blue leading-[2.5rem]"
                />
                {errors.title && (
                  <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                    {errors.title.message}
                  </p>
                )}
              </div>
              {/* Message */}
              <div>
                <textarea
                  {...register("message", {
                    required: "This field can't be empty",
                  })}
                  rows={3}
                  placeholder="Message"
                  className="bg-transparent resize-none py-7 px-5 border-b border-police-blue/50 w-full outline-0 placeholder:text-[1.5rem] text-[1.5rem] text-police-blue leading-[2.5rem]"
                />
                {errors.message && (
                  <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>

            {/* check box  */}
            <div>
                <div className="flex items-center gap-6">
                    <input type="checkbox"  id="checkbox" className="opacity-0"
                    {...register('subscribe', {required: "Please check the box to proceed"})}
                     />
                     <label htmlFor="checkbox" className="flex items-center gap-6 -ml-12">
                        <div className="h-10 w-10 relative bg-police-blue opacity-25 lg:w-16 "></div>
                        <p className="text-police-blue text-[1.5rem] leading-[2.5rem] ">
                            Stay up-to-date with company announcements and updates to our API
                        </p>
                     </label>
                </div>
                {errors.subscribe && (
                    <p className="text-red-500 mt-2 px-5 text-[1.1rem] opacity-70">
                        {errors.subscribe.message}
                    </p>
                )}

            </div>

            {/* Submit */}
            <button
              type="submit"
              className="py-6 px-20 border rounded-[2.4rem] border-police-blue block text-[1.5rem] text-police-blue font-[700] leading-normal hover:bg-police-blue hover:text-ghost-white transition-all duration-300"
            >
              Submit
            </button>
          </form>
          {/* Companies */}
          <div className="flex flex-col gap-16">
            <h3 className="text-police-blue text-[2.4rem] leading-[3.2rem] text-center lg:text-left">
              Join the thousands of innovators already building with us
            </h3>
            <div className="grid lg:grid-cols-3 grid-cols-2 items-center gap-x-24 gap-y-20 lg:row-span-full lg:pb-28 justify-items-center">
              <Image src={tesla} alt="tesla" className="h-7 w-52 fill-white" />
              <Image
                src={microsoft}
                alt="microsoft"
                className="h-12 w-60 fill-white"
              />
              <Image
                src={hp}
                alt="hewlet-packard"
                className="h-11 w-56 fill-white"
              />
              <Image
                src={oracle}
                alt="oracle"
                className="h-7 w-52 fill-white"
              />
              <Image
                src={google}
                alt="google"
                className="h-14 w-40 fill-white"
              />
              <Image
                src={nvidia}
                alt="nvidia"
                className="h-11 w-56  fill-white"
              />
            </div>
          </div>
        </div>
        <div className="mt-32">
            <Cta/>
        </div>
        
      </section>
    </div>
  );
};

export default Contact;
