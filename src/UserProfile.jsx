import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const UserProfile = () => {
  const { currentLanguage, translations } = useContext(LanguageContext);
  return <h3>{translations[currentLanguage].profile}</h3>;
};

export default UserProfile;
