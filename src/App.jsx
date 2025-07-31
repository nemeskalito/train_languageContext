import './App.css'
import ControlsPanel from './ControlsPanel'
import Header from './Header'
import { LanguageProvider } from './LanguageContext'
import { ThemeProvider } from './ThemeContext'
import UserProfile from './UserProfile'

function App() {
	return (
		<LanguageProvider>
			<ThemeProvider>
				<Header />
				<UserProfile />
				<ControlsPanel />
			</ThemeProvider>
		</LanguageProvider>
	)
}

export default App
