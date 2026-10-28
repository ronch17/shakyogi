import ContactForm from "../ui/ContactForm";
import Reveal from "../ui/Reveal";

import ContactBg from "@/public/assets/aboutme-bg.png";

export default function ContactSection({ id }: { id: string }) {
    return (
        <section id={id} className="flex flex-col items-center gap-10 py-20 px-6 bg-cover bg-center" style={{ backgroundImage: `url(${ContactBg.src})` }}>
            <Reveal className="w-full flex justify-center">
                <ContactForm />
            </Reveal>
        </section>
    )
}