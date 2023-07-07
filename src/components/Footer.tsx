import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-whitePrimary p-5">
      <div className="flex gap-1">
        <Image src="/logoIcon.png" height={23} width={23} alt="Logo NexTrip" />
        <h1 className="font-2xl text-primary font-semibold">NextTrip</h1>
      </div>
      <p className="text-primaryDarker mt-1 text-sm font-medium">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
