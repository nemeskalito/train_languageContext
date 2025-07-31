import { useContext } from 'react'
import LanguageContext from './LanguageContext'
import ThemeContext from './ThemeContext'

const UserProfile = () => {
	const { currentLanguage, translations } = useContext(LanguageContext)
	const { currentTheme, theme } = useContext(ThemeContext)

	return (
		<h3 style={theme[currentTheme]}>{translations[currentLanguage].profile}</h3>
	)
}

export default UserProfile
