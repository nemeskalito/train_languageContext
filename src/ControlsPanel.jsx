import { useContext } from 'react'
import LanguageContext from './LanguageContext'
import ThemeContext from './ThemeContext'

const ControlsPanel = () => {
	const { toggleLanguage } = useContext(LanguageContext)
	const { toggleTheme } = useContext(ThemeContext)
	return (
		<div>
			<button onClick={toggleLanguage}>Сменить язык</button>
			<button onClick={toggleTheme}>Сменить тему</button>
		</div>
	)
}
export default ControlsPanel
