# Landing page: planejamento patrimonial (projeto semente)

Next.js 15 (App Router) + React 19 + Tailwind CSS 3.

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
```

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Nome, número do WhatsApp, mensagem, imagem do banner, OAB | `lib/config.ts` |
| Frase de gatilho, storytelling, texto da equipe, CTA | `lib/content.ts` |
| Cores e fontes | `tailwind.config.ts` |
| Ordem das seções | `app/page.tsx` |

## Ordem da página

1. Navbar (fixa, com botão de WhatsApp)
2. Banner (área reservada para imagem e frase)
3. Frase de gatilho
4. Storytelling (~1 min 30 s de leitura)
5. Equipe
6. CTA para WhatsApp
7. Rodapé com aviso informativo e inscrição OAB

## Antes de publicar

- Substituir `whatsappNumber` pelo número real (somente dígitos, com 55 e DDD).
- Confirmar a fonte do dado "Até 40%" e manter a fonte disponível.
- Revisar textos com a equipe jurídica à luz do Provimento 205/2021 da OAB.
- Trocar o nome placeholder e preencher a inscrição OAB.
- Adicionar analytics e um pixel de conversão, se houver tráfego pago.
- Para performance, a fonte pode migrar para `next/font` quando houver internet no build.
# macryptolaw
