import profilePic from "../assets/profilePic.jpg"

function IntroSection() {
  return (
    <section className="self-stretch max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[66%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-12 text-white max-md:mt-10 max-md:max-w-full">
            <h1 className="text-6xl font-bold border-2 border-white border-solid max-md:max-w-full max-md:text-4xl">
              My Name is Kelvin Ohaya
            </h1>
            <p className="mt-20 mr-12 ml-5 text-3xl border-2 border-white border-solid max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
              An aspiring Software Engineer with an interest <br />
              in web and game development
            </p>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[34%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={profilePic}
            alt="Kelvin Ohaya"
            className="object-contain grow w-full rounded-xl aspect-[0.94] max-md:mt-10"
          />
        </div>
      </div>
    </section>
  );
};

export default IntroSection;