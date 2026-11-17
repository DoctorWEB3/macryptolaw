import { TEAM } from "@/lib/content";

export default function Team() {
  return (
    <section id="equipe" className="bg-nevoa px-6 py-20 md:py-28">
      <div className="mx-auto max-w-2xl">
        <h2 className="font-display text-3xl text-musgo md:text-4xl">{TEAM.title}</h2>
        <p className="mt-6 text-lg leading-relaxed text-musgo/90">{TEAM.text}</p>
      </div>
    </section>
  );
}
