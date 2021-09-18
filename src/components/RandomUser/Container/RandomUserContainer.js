import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 70%;
	background-color: rgb(242, 239, 239);
	border-radius: 10px;
`;

const RandomUserContainer = ({ children }) => {
	return <Container>{children}</Container>;
};

export default RandomUserContainer;
