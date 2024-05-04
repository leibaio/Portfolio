import TextRotator from "./TextRotator";

const HeroTexts = () => {
  return (
    <>
      <h3 className="font-poppins text-2xl max-sm:text-xl">我是</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl ">
        汤伟杰. <br />
      </h1>
      {/* <h3 className="font-poppins text-2xl max-sm:text-xl" >My Name is</h3>
      <h1 className="font-rubik text-8xl name_underline text-primary max-sm:text-6xl " >
        Md Taqui <br /> Imam .
      </h1> */}
      <TextRotator />
    </>
  );
};
export default HeroTexts;
