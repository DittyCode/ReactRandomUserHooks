import styled from 'styled-components';

const UserWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2em;
	background-color: rgb(82, 77, 77);
	color: ${props => props.theme.color};
	border-radius: 10px;
`;

const Image = styled.img`
	margin: 1em 0;
	border-radius: 50%;
`;

const User = ({ data }) => {
	const { gender, picture, name, email } = data;

	const userName = ({ title, first, last }) => {
		return `${title} ${first} ${last}`;
	};

	return (
		<UserWrapper>
			<h3>{userName(name)}</h3>
			<Image
				className={styled.user__img}
				src={picture.large}
				alt='random-user face'
			/>
			<p>Email : {email}</p>
			<p>Gender : {gender}</p>
		</UserWrapper>
	);
};

export default User;
