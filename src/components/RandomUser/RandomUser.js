import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../UI/Loader/Loader';
import User from './User/User';
import Theme from '../UI/Theme/Theme';
import RandomUserContainer from './Container/RandomUserContainer';

const RandomUser = () => {
	const [userData, setUserData] = useState([]);

	const fetchRandomUserData = async () => {
		const response = await axios.get('https://randomuser.me/api/');
		const data = response.data.results;
		setUserData(data);
	};

	useEffect(() => {
		fetchRandomUserData();
	}, []);

	return (
		<RandomUserContainer>
			<Theme />
			{!userData.length ? <Loader /> : <User data={userData[0]} />}
		</RandomUserContainer>
	);
};

export default RandomUser;
