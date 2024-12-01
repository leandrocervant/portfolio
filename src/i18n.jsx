import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import fallbackLangData from "./locales/pt-BR.json";

const isDevelopment = import.meta.env.DEV;

const defaultLang = { code: "en", label: "English" };

const languages = [
  defaultLang,
  ...[{ code: "pt-BR", label: "Português (Brasil)" }],
];

const TEST_LANG_CODE = "__test__";
if (isDevelopment) {
  languages.unshift(
    { code: TEST_LANG_CODE, label: "test language" }
    // {
    //   code: `${TEST_LANG_CODE}.rtl`,
    //   label: "\u{202a}test language (rtl)\u{202c}",
    //   rtl: true,
    // }
  );
}

let currentLang = defaultLang;
let currentLangData = {};

const setLanguage = async (langCode) => {
  currentLang = languages.find((lang) => lang.code === langCode) || defaultLang;
  document.documentElement.dir = currentLang.rtl ? "rtl" : "ltr";
  document.documentElement.lang = currentLang.code;

  if (langCode.startsWith(TEST_LANG_CODE)) {
    currentLangData = {};
  } else {
    try {
      currentLangData = await import(`./locales/${currentLang.code}.json`);
    } catch (error) {
      console.error(`Failed to load language ${langCode}:`, error.message);
      currentLangData = fallbackLangData;
    }
  }

  localStorage.setItem("lang", langCode);
};

const findPartsForData = (data, parts) => {
  for (let index = 0; index < parts.length; ++index) {
    const part = parts[index];
    if (data[part] === undefined) {
      return undefined;
    }
    data = data[part];
  }
  if (typeof data !== "string") {
    return undefined;
  }
  return data;
};

export const t = (path, replacement = null, fallback = null) => {
  if (currentLang.code.startsWith(TEST_LANG_CODE)) {
    const name = replacement
      ? `${path}(${JSON.stringify(replacement).slice(1, -1)})`
      : path;
    return `\u{202a}[[${name}]]\u{202c}`;
  }

  const parts = path.split(".");
  let translation =
    findPartsForData(currentLangData, parts) ||
    findPartsForData(fallbackLangData, parts) ||
    fallback;
  if (!translation) {
    const errorMessage = `Can't find translation for ${path}`;
    // in production, don't blow up the app on a missing translation key
    if (!isDevelopment) {
      console.warn(errorMessage);
      return "";
    }
    throw new Error(errorMessage);
  }

  if (replacement) {
    for (const key in replacement) {
      translation = translation.replace(`{{${key}}}`, String(replacement[key]));
    }
  }
  return translation;
};

const I18nContext = createContext();

export const I18nProvider = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const [lang, setLang] = useState(() => {
    const storedLang = localStorage.getItem("lang");
    return storedLang || defaultLang.code;
  });

  useEffect(() => {
    setIsReady(false);
    setLanguage(lang).then(() => {
      setTimeout(() => {
        setIsReady(true);
      });
    });
  }, [lang]);

  return (
    <I18nContext.Provider
      value={{
        t,
        langCode: currentLang.code,
        languages,
        setLanguage: useCallback(
          (lang) => {
            setLang(lang);
          },
          [setLang]
        ),
      }}
    >
      {isReady && children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  return context;
};
