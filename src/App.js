import { useState } from 'react';
import Splash from './components/SplashScreen';
import { ThemeProvider } from 'styled-components';

const App = () => {
	const [theme, setTheme] = useState('light');

	return (
		<ThemeProvider theme={themes[theme]}>
			<Splash theme={theme} setTheme={setTheme} />
		</ThemeProvider>
	);
};

const LightTheme = {
	pageBackground: 'white',
	titleColor: '#dc658c',
	tagLineColor: 'black',
};

const DarkTheme = {
	pageBackground: '#282c36',
	titleColor: 'lightpink',
	tagLineColor: 'white',
};

const themes = {
	light: LightTheme,
	dark: DarkTheme,
};

export default App;
