// @ts-nocheck
import { koriva as defaultKoriva } from './site-data';
export type KorivaConfig = { gymSlug: string; primaryColor?: string; bgColor?: string; textColor?: string; baseUrl: string; };
export function buildCssVars(cfg: KorivaConfig | null): React.CSSProperties {
  if (!cfg) return {};
  return { ...(cfg.primaryColor && { '--orange': cfg.primaryColor }), ...(cfg.bgColor && { '--bg': cfg.bgColor }), ...(cfg.textColor && { '--text': cfg.textColor }) } as React.CSSProperties;
}
export async function getKorivaConfig(): Promise<KorivaConfig | null> {
  try {
    const res = await fetch(`${defaultKoriva.baseUrl}/api/site-config?slug=${defaultKoriva.gymSlug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return await res.json();
  } catch { return null; }
}
