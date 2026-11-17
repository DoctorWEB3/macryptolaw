import { BRAND } from "@/lib/config";

/*
 * Área reservada para o banner (imagem + frase de impacto).
 * Quando a imagem estiver pronta, preencha BRAND.bannerImage.
 */
export default function Banner() {
  return (
    <section
      id="topo"
      aria-label="Banner"
      className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-b-[28px] bg-gradient-to-b from-nevoa to-marfim md:min-h-[460px]"
    >
      {BRAND.bannerImage && (
        <img src={BRAND.bannerImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}
    </section>
  );
}
