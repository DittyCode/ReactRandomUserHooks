import React, { useContext } from 'react';
import { FaMedapps } from 'react-icons/fa';
import RandomUserContext from '../../../store/randomuser-context';
import { saveToStorage } from '../Storage/storage';

import styled from 'styled-components';

const Button = styled.button`
	position: absolute;
	top: 0;
	right: 0;
	margin: 2em;
	height: 20px;
	width: 20px;
	cursor: pointer;
	border: none;
	background: transparent;
`;

const Theme = () => {
	const { theme, setTheme } = useContext(RandomUserContext);

	const themeSwitcher = theme === 'dark' ? 'light' : 'dark';

	const handleClick = () => {
		setTheme(themeSwitcher);
		saveToStorage(themeSwitcher);
	};

	return (
		<Button onClick={handleClick}>
			<FaMedapps style={{ height: '100%' }} />
		</Button>
	);
};

export default Theme;
