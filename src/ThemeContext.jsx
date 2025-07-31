import { createContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState('light')

	const toggleTheme = () => {
		setCurrentTheme(prev => (prev == 'light' ? 'dark' : 'light'))
	}

	const theme = {
		dark: { color: 'white', backgroundColor: '#1a1a1a' },
		light: { color: '#1a1a1a', backgroundColor: 'white' },
	}

	useEffect(() => {
		const styles = theme[currentTheme]
		for (const prop in styles) {
			document.body.style[prop] = styles[prop]
			// document.querySelector("#root").style[prop] = styles[prop]
		}
	}, [currentTheme])

	const value = {
		currentTheme,
		theme,
		toggleTheme,
	}

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeContext
