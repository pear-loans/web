import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const TEXT = {
  ARIA: {
    dark: "Click to change to Light Mode",
    device: "Click to change to Dark Mode",
    light: "Click to use your Device's Dark Mode Preference",
  },
  BUTTON: {
    dark: "Dark Theme",
    device: "Device Theme",
    light: "Light Theme",
  },
  THEME: {
    dark: "🌓",
    device: "📱",
    light: "🌤",
  },
};
const THEME_ORDER: Array<Window["theme"]> = ["device", "dark", "light"];

const ThemeToggle: Component<{ class: string }> = (props) => {
  const loadedTheme = THEME_ORDER.indexOf(window.theme ?? "device");
  const [themeIndex, setThemeIndex] = createSignal<number>(
    loadedTheme > -1 ? loadedTheme : 0
  );

  const onClick = (): void => {
    const currentIndex = themeIndex();
    const nextIndex = (currentIndex + 1) % 3;
    const nextTheme = THEME_ORDER[nextIndex] ?? "device";

    window.localStorage.setItem("theme", nextTheme);

    const action = {
      dark: () => document.documentElement.classList.add("dark"),
      device: () => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        window.localStorage.removeItem("theme");
      },
      light: () => document.documentElement.classList.remove("dark"),
    }[nextTheme];

    action();
    setThemeIndex(nextIndex);
  };

  const currentTheme = (): "dark" | "device" | "light" =>
    THEME_ORDER[themeIndex()] ?? "device";

  return (
    <button
      aria-label={TEXT.ARIA[currentTheme()]}
      class={props.class}
      onClick={onClick}
      title={TEXT.BUTTON[currentTheme()]}
      type="button"
    >
      <span class="pointer-events-none">
        {TEXT.THEME[currentTheme()]}{" "}
        <span class="sm:sr-only">{TEXT.BUTTON[currentTheme()]}</span>
      </span>
    </button>
  );
};

export default ThemeToggle;
