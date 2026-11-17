import { BRAND } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="rounded-b-[28px] border-t border-musgo/10 bg-nevoa px-6 py-10 text-center text-sm text-musgo/75">
      <p>
        {BRAND.name} · {BRAND.oabNotice}
      </p>
      <p className="mx-auto mt-3 max-w-2xl">
        As informações deste site têm caráter informativo e geral. Cada situação exige análise individual.
      </p>
    </footer>
  );
}
