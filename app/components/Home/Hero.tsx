import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero flex h-[calc(100dvh-80px)] bg-white w-full border-b">
      <div className="background relative w-full h-full">
        <Image
          src="/home/DSC9209-scaled.jpg"
          alt="Proyecto Piranha"
          fill
          className="object-cover"
        />
      </div>
      <div className="content w-5/12 h-full border-l flex justify-center text-left text-lg bg-black backdrop-blur-xl flex-col">
        <div className="text-[12px] xl:text-[16px] p-4 border-b h-1/3">
          <p>
            Proyecto Piranha es una editorial y productora cultural.
          </p>
          <p>
            Desde el 2016 colabora con artistas visuales e ilustradores
            latinoamericanxs en la publicación y distribución de su obra.
          </p>
        </div>
        <div className="border-b h-1/3 p-4">
          <div className="relative w-full h-full">
            <Image 
              src="/home/DSC_5568-scaled.jpg"
              fill
              alt="Piranha"
            />
          </div>
        </div>
        <div className="h-1/3 p-4">
          <div className="relative w-full h-full">
            <Image 
              src="/home/IMG_7626-min-scaled.jpg"
              fill
              alt="Piranha"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
