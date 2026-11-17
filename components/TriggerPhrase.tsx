import { TRIGGER } from "@/lib/content";

export default function TriggerPhrase() {
  return (
    <section className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-display text-4xl leading-tight text-musgo md:text-6xl">{TRIGGER.headline}</h1>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-musgo/80 md:text-2xl">
          {TRIGGER.subline}
        </p>
      </div>
    </section>
  );
}
