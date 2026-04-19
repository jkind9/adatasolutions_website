import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'dark' | 'light';

function createThemeStore() {
  const defaultTheme: Theme = 'dark';

  // Get initial theme from localStorage or default to dark
  const storedTheme = browser ? localStorage.getItem('theme') as Theme : null;
  const initialTheme: Theme = storedTheme === 'light' || storedTheme === 'dark'
    ? storedTheme
    : defaultTheme;

  const { subscribe, set, update } = writable<Theme>(initialTheme);

  return {
    subscribe,
    toggle: () => {
      update(currentTheme => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        if (browser) {
          localStorage.setItem('theme', newTheme);
          document.documentElement.setAttribute('data-theme', newTheme);
        }
        return newTheme;
      });
    },
    set: (theme: Theme) => {
      if (browser) {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
      }
      set(theme);
    },
    initialize: () => {
      if (browser) {
        const stored = localStorage.getItem('theme') as Theme;
        const theme = stored === 'light' || stored === 'dark' ? stored : defaultTheme;
        document.documentElement.setAttribute('data-theme', theme);
        set(theme);
      }
    }
  };
}

export const theme = createThemeStore();
