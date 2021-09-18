import styled from 'styled-components';

const DivWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	background-color: ${props => props.theme.background};
`;

const Wrapper = ({ children }) => {
	return <DivWrapper>{children}</DivWrapper>;
};

export default Wrapper;
