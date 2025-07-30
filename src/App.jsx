import './App.css'
import ControlsPanel from './ControlsPanel'
import Header from './Header'
import LanguageContext from './LanguageContext'
import ThemeContext from './ThemeContext'
import UserProfile from './UserProfile'

function App() {
	return (
		<LanguageContext.Provider>
			<ThemeContext.Provider>
				<Header />
				<UserProfile />
				<ControlsPanel />
			</ThemeContext.Provider>
		</LanguageContext.Provider>
	)
}

export default App
