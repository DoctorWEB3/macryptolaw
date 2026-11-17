import { STORY } from "@/lib/content";

export default function Storytelling() {
  return (
    <section id="historia" className="px-6 pb-20 md:pb-28">
      <div className="mx-auto max-w-2xl space-y-6 text-lg leading-relaxed text-musgo/90">
        {STORY.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
