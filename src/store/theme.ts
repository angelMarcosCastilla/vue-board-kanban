import { defineStore } from "pinia";

interface ThemeState {
  theme: string;
}

export const useThemeStore = defineStore("theme", {
  state: () => ({
    theme: localStorage.getItem("theme") || "light",
  }),
  actions: {
    changeTheme() {
      this.theme = this.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", this.theme);
      document.body.className = this.theme;
    },
  },
});
