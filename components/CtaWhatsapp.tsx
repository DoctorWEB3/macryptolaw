import { whatsappUrl } from "@/lib/config";
import { CTA } from "@/lib/content";

export default function CtaWhatsapp() {
  return (
    <section className="px-6 py-20 text-center md:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl text-musgo md:text-4xl">{CTA.title}</h2>
        <p className="mt-4 text-lg text-musgo/80">{CTA.text}</p>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-musgo px-8 py-4 text-lg text-marfim transition hover:bg-musgo/90"
        >
          {CTA.button}
        </a>
      </div>
    </section>
  );
}
