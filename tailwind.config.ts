import type { Config } from "tailwindcss";

/*
 * Paleta pensada para transmitir paz, leveza, segurança e prosperidade:
 * - sol: moldura amarela (calor e prosperidade, sem agressividade)
 * - marfim: fundo principal (leveza e respiro)
 * - musgo: texto e botões (solidez e segurança)
 * - nevoa: superfícies calmas (paz)
 * - ouro: acentos e foco (prosperidade)
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sol: "#F4C542",
        marfim: "#FBF7EE",
        musgo: "#23402F",
        nevoa: "#E4EDE8",
        ouro: "#B8862B",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Figtree", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
