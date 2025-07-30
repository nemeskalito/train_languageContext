import "./App.css";
import ControlsPanel from "./ControlsPanel";
import Header from "./Header";
import  { LanguageProvider } from "./LanguageContext";
import ThemeContext from "./ThemeContext";
import UserProfile from "./UserProfile";

function App() {
  const lightDark = {
    dark: { color: "white", backgroundColor: "#1a1a1a" },
    light: { color: "#1a1a1a", backgroundColor: "white" },
  };
  return (
    <LanguageProvider>
      <ThemeContext.Provider value={lightDark}>
        <Header />
        <UserProfile />
        <ControlsPanel />
      </ThemeContext.Provider>
    </LanguageProvider>
  );
}

export default App;
