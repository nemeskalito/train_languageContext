import { createContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const toggleLanguage = () => {
    setCurrentLanguage((prev) => (prev == "en" ? "ru" : "en"));
  };

  const translations = {
    en: {
      welcome: "Welcome",
      profile: "Your profile",
    },
    ru: {
      welcome: "Добро пожаловать",
      profile: "Твой профиль",
    },
  };

  const value = {
    currentLanguage,
    translations,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
