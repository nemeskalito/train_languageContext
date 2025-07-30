import { createContext } from 'react'

const LanguageContext = createContext({
  currentLanguage: "en",
  toggleLanguage(){
    
  }
}
)

export default LanguageContext
