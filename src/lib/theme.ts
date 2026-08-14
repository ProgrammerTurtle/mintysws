/**
 * Browser-chrome colours for the `theme-color` meta tag.
 *
 * A meta tag cannot read a CSS custom property, so these are the one place the
 * cabinet colour is duplicated as hex. They are the exact sRGB values of
 * `--color-cabinet` in each theme, so if that token moves, these move with it.
 * They had drifted before this was centralised: the tag claimed #c9a882 and
 * #2a2118 while the tokens resolved to #c5ac93 and #291c12.
 */
export const THEME_COLOR = {
  /** --color-cabinet in .theme-light: oklch(0.76 0.045 68) */
  light: '#c5ac93',
  /** --color-cabinet in @theme (dark base): oklch(0.24 0.028 58) */
  dark: '#291c12',
} as const;
