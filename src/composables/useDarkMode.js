import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useThemeStore } from "../store/theme"

export function useDarkMode() {
  // no se puede desestructurar el store directamente sino pordemos la reactividad
  const themeStore = useThemeStore();
  const { theme } = storeToRefs(themeStore);
  
  document.body.classList.add(theme.value);

  const changeTheme = () => {
    themeStore.changeTheme();
  }

  return { theme, changeTheme };
}