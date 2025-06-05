import { saveUserSettings, userSettings } from "@/globals/userSettings";
import { $menu } from "@/views/menu/menu";
import translateWidget from "@/views/menu/translateWidget";
import { LANGUAGES } from "./Languages";

export function changeLanguage(newLang) {
  newLang = String(newLang || "").toLowerCase();

  if (!LANGUAGES.some((lang) => lang.code === newLang)) {
    newLang = "it";
  }

  if (userSettings.lang !== newLang) {
    userSettings.lang = newLang;

    const $lang = $menu.querySelector("#asw-language");
    if ($lang) {
      $lang.value = newLang;
    }

    translateWidget();
    saveUserSettings();
  }
}
