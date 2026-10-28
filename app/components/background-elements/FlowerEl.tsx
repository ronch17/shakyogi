import Image from "next/image";

export default function FlowerEl() {
  return (
     <div className="absolute top-20 left-0 pointer-events-none select-none animate-float">
        <Image
          src="/assets/_.png"
          alt=""
          width={70}
          height={70}
          className="object-contain"
        />
      </div>
  );
}