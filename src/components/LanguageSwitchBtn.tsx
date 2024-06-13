import { Languages } from "lucide-react";

export const LanguagesSwitchBtn = () => {
  return (
    <div className=" absolute left-0 top-5 flex rounded-r-full justify-center items-center gap-2 z-50 w-fit h-fit p-2 shadow-md  border-y border-r  border-black hover:bg-primary hover:text-white hover:animate-none ">
      <Languages />
    </div>
  );
};
