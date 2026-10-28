import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/", label: "בית" },
  { href: "#about", label: "אודות" },
  { href: "#pricing", label: "מחירון" },
  { href: "#contact", label: "צרו קשר" },
];

const socialLinks = [
  {
    label: "אינסטגרם",
    href: "https://www.instagram.com/shakyogi?stkn=ZWdxcWxmaHk4em9u",
    icon: (
      <path d="M12 2c2.7 0 3.05.01 4.12.06 1.07.05 1.8.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.63.42 1.36.47 2.43.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.22 1.8-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.63.25-1.36.42-2.43.47-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.8-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.63-.42-1.36-.47-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.07.22-1.8.47-2.43.26-.66.6-1.22 1.15-1.77a4.9 4.9 0 0 1 1.77-1.15c.63-.25 1.36-.42 2.43-.47C8.95 2.01 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm5.2-2.7a1.17 1.17 0 1 0 0 2.34 1.17 1.17 0 0 0 0-2.34Z" />
    ),
  },
  {
    label: "פייסבוק",
    href: "https://www.facebook.com/profile.php?id=100077475270702&ref=1",
    icon: (
      <path d="M13.5 21v-8.1h2.7l.4-3.14h-3.1V7.87c0-.91.25-1.53 1.55-1.53h1.66V3.53C15.93 3.4 15 3.32 13.9 3.32c-2.3 0-3.87 1.4-3.87 3.98v2.46H7.32v3.14H10V21h3.5Z" />
    ),
  },
  {
    label: "יוטיוב",
    href: "https://www.youtube.com/@SabakuNoGaara242",
    icon: (
      <path d="M23.5 7.2a3 3 0 0 0-2.1-2.1C19.5 4.6 12 4.6 12 4.6s-7.5 0-9.4.5A3 3 0 0 0 .5 7.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-4.8ZM9.6 15.5V8.5L15.8 12l-6.2 3.5Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white/90">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-right">
        <div className="flex flex-col items-center sm:items-start gap-4">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="ShakYogi"
              width={80}
              height={80}
              className="w-20 h-20 bg-white rounded-full"
            />
          </Link>
          <p className="text-sm text-white/70 leading-relaxed text-center sm:text-right">
            מרחב של שקט, ריפוי וחיבור עצמי — יוגה לכל שלבי החיים.
          </p>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-3">
          <h3 className="font-semibold text-white">ניווט מהיר</h3>
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center sm:items-start gap-3">
          <h3 className="font-semibold text-white">יצירת קשר</h3>
          <a
            href="tel:0547974939"
            className="text-sm text-white/70 hover:text-white transition-colors"
            dir="ltr"
          >
            054-797-4939
          </a>
          <a
            href="mailto:shaked2424@hotmail.com"
            className="text-sm text-white/70 hover:text-white transition-colors"
            dir="ltr"
          >
            shaked2424@hotmail.com
          </a>
          <a
            href="#contact"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            שליחת הודעה
          </a>
        </div>

        <div className="flex flex-col items-center sm:items-start gap-3">
          <h3 className="font-semibold text-white">עקבו אחרינו</h3>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/30 text-white/80 hover:bg-white hover:text-primary-dark transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  {social.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 px-6 text-center text-sm text-white/60">
        © {new Date().getFullYear()} ShakYogi — כל הזכויות שמורות.
      </div>
    </footer>
  );
}
