const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/**
 * Join a site-root-relative path onto Astro's configured `base`.
 * `BASE_URL` may or may not carry a trailing slash depending on config, so
 * never interpolate it directly — that produced `/mintyswsaltoids-tin.png`.
 */
export function withBase(path: string): string {
  const suffix = path.replace(/^\/+/, '');
  return suffix ? `${BASE}/${suffix}` : `${BASE}/`;
}
