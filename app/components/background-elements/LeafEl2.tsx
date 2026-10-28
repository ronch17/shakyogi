import Image from "next/image";


export default function LeafEl2() {
    return (
        <div className="absolute bottom-5 right-0 pointer-events-none select-none animate-float invert-75">
            <Image src="/assets/image.png" alt="Leaf El" width={100} height={100} />
        </div>
    )
}