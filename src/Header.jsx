import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const Header = () => {
  const { currentLanguage, translations } = useContext(LanguageContext);

  return <h1>{translations[currentLanguage].welcome}</h1>;
};

export default Header;
