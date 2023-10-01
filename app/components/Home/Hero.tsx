import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero flex h-full bg-white w-full">
      <div className="background relative w-full h-full">
        <Image
          src="/home/DSC9209-scaled.jpg"
          alt="Proyecto Piranha"
          fill
          className="object-cover"
        />
        <div className="content w-6/12  border flex justify-center p-8 flex-col text-left text-xl absolute bottom-4 right-4 bg-[rgba(0,0,0,0.1)] backdrop-blur-xl">
          <p>Proyecto Piranha es una editorial y productora cultural.</p>
          <p>
            Desde el 2016 colabora con artistas visuales e ilustradores
            latinoamericanxs en la publicación y distribución de su obra.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
