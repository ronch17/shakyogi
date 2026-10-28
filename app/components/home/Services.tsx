import Image from "next/image";
import Button from "@/app/components/ui/Button";
import LeafEl from "../background-elements/LeafEl";
import Reveal from "../ui/Reveal";

import VINYASA from "@/public/photos/vinyasa-ashtanga-yoga/1.jpg";
import KIDS from "@/public/photos/kids-yoga/yoga-kids.jpg";
import ELDERLY from "@/public/photos/elderly-yoga/yoga-elderly.jpg";

const services = [
    {
        title: "יוגה ויניאסה ואשטנגה",
        description: "אני רון, מורה יוגה מוסמכת ומעמיקה. בהנחייתי, משלבת מע over 10 years of experience in yoga, meditation, and mindfulness. I am a certified yoga teacher and a mindfulness coach. I have been teaching yoga for over 10 years and have helped thousands of people to improve their health and well-being.",
        image: VINYASA
    },
        {
        title: "יוגה לילדים",
        description: "אני רון, מורה יוגה מוסמכת ומעמיקה. בהנחייתי, משלבת מע over 10 years of experience in yoga, meditation, and mindfulness. I am a certified yoga teacher and a mindfulness coach. I have been teaching yoga for over 10 years and have helped thousands of people to improve their health and well-being.",
        image: KIDS
    },  
     {
        title: "יוגה לבני הגיל השלישי",
        description: "אני רון, מורה יוגה מוסמכת ומעמיקה. בהנחייתי, משלבת מע over 10 years of experience in yoga, meditation, and mindfulness. I am a certified yoga teacher and a mindfulness coach. I have been teaching yoga for over 10 years and have helped thousands of people to improve their health and well-being.",
        image: ELDERLY
    }
]

export default function Services() {
    return (
         <>
        <section id="services" className="relative bg-[#FFF] overflow-x-hidden min-h-[100vh] flex flex-col items-center justify-center py-20">
                    <LeafEl className="top-60 left-[-30] rotate-180 scale-y-[-1] animate-float delay-anim-600" />

            <Reveal className="flex flex-col items-center">
                <h2 className="text-4xl font-bold text-primary">השרותים שלי</h2>
                <p className="text-lg text-text-muted leading-relaxed max-w-md">
                    מרחב של שקט, ריפוי וחיבור עצמי. בהנחיית שמי שקד, מורה מוסמכת
                    המשלבת מעל עשור של ניסיון עם גישה טיפולית מעמיקה.
                </p>
            </Reveal>
            <div className="flex flex-row gap-4">
            {services.map((item, i) => (
                <Reveal className="max-w-sm mx-auto" delay={i * 150} key={item.title}>
                <div className="flex flex-col gap-4 items-center justify-center px-6 py-20 animate-float">
               
                    <div className="relative w-70 h-70 rounded-tl-[100px] rounded-br-[100px] overflow-hidden">
                        <Image className="object-cover" src={item.image} alt={item.title} fill sizes="280px" />
                    </div>
                         <h2 className="text-2xl font-bold ">{item.title}</h2>
                    <p>{item.description}</p>
                    <Button>למידע נוסף</Button>
                </div>
                </Reveal>
            ))}
            </div>
        </section>
        </>
    )
}