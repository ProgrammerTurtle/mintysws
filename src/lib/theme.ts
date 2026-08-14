/**
 * Browser-chrome colour for the `theme-color` meta tag.
 *
 * A meta tag cannot read a CSS custom property, so this is the one place the
 * page colour is duplicated as hex. It is the exact sRGB value of
 * `--color-screen`, the aged stock, so if that token moves this moves with it.
 */
export const THEME_COLOR = '#efe1c7';
