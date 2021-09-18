import React, { useState, useEffect } from 'react';

import RandomUser from './components/RandomUser/RandomUser';
import Wrapper from './components/UI/Wrapper/Wrapper';
import RandomUserContext from './store/randomuser-context';

import { ThemeProvider } from 'styled-components';
import themes from './utils/themeStyles';
import { getFromStorage } from './components/UI/Storage/storage';

const App = () => {
	const [theme, setTheme] = useState('dark');

	useEffect(() => {
		setTheme(getFromStorage('theme'));
	}, []);

	return (
		<ThemeProvider theme={themes[theme]}>
			<RandomUserContext.Provider value={{ theme, setTheme }}>
				<Wrapper>
					<RandomUser />
				</Wrapper>
			</RandomUserContext.Provider>
		</ThemeProvider>
	);
};

export default App;
