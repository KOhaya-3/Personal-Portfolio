import React from 'react';

interface SocialIcon {
  src: string;
  alt: string;
  className: string;
}

const SocialsSection: React.FC = () => {
  const socialIcons: SocialIcon[] = [
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/41167610cc529095e3e20486ac5b9ddf78b83a315cb47909d48bfa2c2d222a1a?placeholderIfAbsent=true&apiKey=d7c8feab154247419a891a2f63ba71f1",
      alt: "Social Media Icon 1",
      className: "object-contain grow shrink-0 aspect-[0.86] w-[89px] max-md:mt-10"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd63eb4248be11ea37516d8afab388a9c37bd5f892c39e736fdabc4296874594?placeholderIfAbsent=true&apiKey=d7c8feab154247419a891a2f63ba71f1",
      alt: "Social Media Icon 2",
      className: "object-contain grow shrink-0 max-w-full aspect-[1.17] w-[122px] max-md:mt-10"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/69d99e972d740183a95651303bff7bf3f49bf6ae1211d0898275cd37356e3aa4?placeholderIfAbsent=true&apiKey=d7c8feab154247419a891a2f63ba71f1",
      alt: "Social Media Icon 3",
      className: "object-contain grow shrink-0 max-w-full aspect-[0.97] w-[101px] max-md:mt-10"
    },
    {
      src: "https://cdn.builder.io/api/v1/image/assets/TEMP/b076b746e05425573a302c746d1511b890af94509aaffd2e937c7a5986f9621a?placeholderIfAbsent=true&apiKey=d7c8feab154247419a891a2f63ba71f1",
      alt: "Social Media Icon 4",
      className: "object-contain grow shrink-0 max-w-full aspect-[1.43] w-[149px] max-md:mt-10"
    }
  ];

  return (
    <section className="mt-80 max-md:mt-10">
      <h2 className="ml-11 text-6xl font-bold text-center text-white max-md:text-4xl">
        Socials
      </h2>
      <div className="self-start mt-24 w-full max-w-[1185px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {socialIcons.map((icon, index) => (
            <div key={index} className="flex flex-col w-1/4 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src={icon.src}
                alt={icon.alt}
                className={icon.className}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;