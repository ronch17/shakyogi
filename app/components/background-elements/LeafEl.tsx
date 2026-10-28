import Image from "next/image";

export default function LeafEl( props: { className?: string } ) {
  return (
       <div className={`absolute  pointer-events-none select-none animate-float invert-75  ${props.className}`}>
        <Image
          src="/assets/banner_right_top_shape.png"
          alt=""
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
  );
}