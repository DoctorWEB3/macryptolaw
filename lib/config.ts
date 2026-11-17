// Dados do negócio. Preencha antes de publicar.
export const BRAND = {
  name: "Seu Escritório",
  // Formato internacional, somente dígitos: 55 + DDD + número. Ex.: 5521999998888
  whatsappNumber: "5500000000000",
  whatsappMessage: "Olá! Gostaria de conversar sobre planejamento patrimonial.",
  // Caminho da imagem do banner (ex.: "/banner.jpg") quando estiver pronta. Vazio = área reservada.
  bannerImage: "",
  oabNotice: "Inscrição OAB: [preencher]",
};

export function whatsappUrl(message: string = BRAND.whatsappMessage): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
