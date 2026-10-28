import QuoteSlider from "../ui/QuoteSlider";
import Reveal from "../ui/Reveal";
import BgImage from "@/public/assets/aboutme-bg.png";

const philosophyQuotes = [
    { text: "מה שנראה כמו חוסר נוחות הוא לעיתים שער לשינוי" },
    {
        text: "Yoga is the journey of the self, through the self, to the self.",
        author: "The Bhagavad Gita",
    },
    {
        text: "Change only happens in the present moment. The past is already done. The future is just energy and intention.",
        author: "Kino MacGregor",
    },
    { text: "Suffering comes from identification with what is temporary" },
    { text: "היכולת להישאר היא תרגול בפני עצמו" },
    { text: "כשאנחנו מפסיקים להיאבק, מתחילה תנועה של ריפוי" },
];

export default function QuoteSection() {
    return (
        <section className="flex  flex-col  items-center gap-10 py-20 px-6 bg-section-2" >
            <Reveal className="flex flex-col items-center gap-10">
                <h2 className="text-4xl font-bold text-primary">פילוסופיית התרגול</h2>
                <QuoteSlider quotes={philosophyQuotes} />
            </Reveal>
        </section>
    )
}