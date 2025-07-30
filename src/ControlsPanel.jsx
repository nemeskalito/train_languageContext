import { useContext } from "react";
import LanguageContext from "./LanguageContext";

const ControlsPanel = () => {
  const { toggleLanguage } = useContext(LanguageContext);
  return (
    <div>
      <button onClick={toggleLanguage}>Сменить язык</button>
      <button>Сменить тему</button>
    </div>
  );
};
export default ControlsPanel;
