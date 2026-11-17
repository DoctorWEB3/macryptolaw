import { BRAND, whatsappUrl } from "@/lib/config";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 rounded-t-[28px] border-b border-musgo/10 bg-marfim/95 backdrop-blur">
      <nav aria-label="Principal" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#topo" className="font-display text-xl text-musgo">
          {BRAND.name}
        </a>

        <ul className="hidden gap-8 text-sm text-musgo/80 md:flex">
          <li>
            <a className="transition hover:text-musgo" href="#historia">
              Sua história
            </a>
          </li>
          <li>
            <a className="transition hover:text-musgo" href="#equipe">
              Equipe
            </a>
          </li>
        </ul>

        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-musgo px-5 py-2 text-sm text-marfim transition hover:bg-musgo/90"
        >
          Falar no WhatsApp
        </a>
      </nav>
    </header>
  );
}
