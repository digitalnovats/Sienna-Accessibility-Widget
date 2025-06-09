import renderMenu from "./renderMenu";
import toggleMenu from "./toggleMenu";
import translateWidget from "./translateWidget";

export let $menu;

export function openMenu() {
  if ($menu) {
    toggleMenu();
  } else {
    $menu = renderMenu();
  }
  let lastInteraction = Date.now();

  // Listen for user interactions on $menu
  $menu.addEventListener("mousemove", () => (lastInteraction = Date.now()));
  $menu.addEventListener("keydown", () => (lastInteraction = Date.now()));
  $menu.addEventListener("click", () => (lastInteraction = Date.now()));

  const timeoutDuration = 10000;

  const checkAndToggleMenu = () => {
    const now = Date.now();
    if (now - lastInteraction >= timeoutDuration) {
      toggleMenu();
    } else {
      setTimeout(checkAndToggleMenu, timeoutDuration - (now - lastInteraction));
    }
  };

  setTimeout(checkAndToggleMenu, timeoutDuration);
  translateWidget();
}
