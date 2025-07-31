import { useContext } from 'react'
import LanguageContext from './LanguageContext'
import ThemeContext from './ThemeContext'

const Header = () => {
	const { currentLanguage, translations } = useContext(LanguageContext)
	const { currentTheme, theme } = useContext(ThemeContext)

	return (
		<div style={theme[currentTheme]}>
			<h1>{translations[currentLanguage].welcome}</h1>
		</div>
	)
}

export default Header
