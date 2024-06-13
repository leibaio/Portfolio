import DownLoadResumeBtn from "@/components/DownLoadResumeBtn";
import GithubBtn from "@/components/GithubBtn";
import HeroImage from "@/components/HeroImage";
import HeroTexts from "@/components/HeroTexts";
import { LanguagesSwitchBtn } from "@/components/LanguageSwitchBtn";
import SocialLinks from "@/components/SocialLinks";

export const siteConfig = {
  name: "leibaio",
  description: "I am a Passionate Software Developer",
  ogImage: "https://mdTaquiImam.vercel.app/og-image.png",
  url: "https://mdTaquiImam.vercel.app",
};
export default function Home() {
  return (
    <>
      {/* LEFT SIDE  */}
      <div className=" h-full w-auto flex flex-col justify-start gap-4">
        <HeroTexts />
        <div className="h-fit w-full p-4 flex gap-3">
          <SocialLinks />
        </div>
        <DownLoadResumeBtn />
      </div>
      {/* RIGHT SIDE image  */}
      <div className="h-full w-[47%] relative block max-lg:hidden">
        {/* IMAGE  */}
        <HeroImage />
      </div>

      {/* GITHUB BUTTON  */}
      <GithubBtn />

      {/* language switch button */}
      <LanguagesSwitchBtn />
    </>
  );
}
