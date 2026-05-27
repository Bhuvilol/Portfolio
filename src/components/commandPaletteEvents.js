export const openCommandPalette = () => {
  window.dispatchEvent(new CustomEvent('bhuvi:open-command-palette'));
};
