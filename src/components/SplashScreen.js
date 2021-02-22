import styled from 'styled-components';
import { CgSun } from 'react-icons/cg';
import { HiMoon } from 'react-icons/hi';

const SplashScreen = (props) => {
	const { theme, setTheme } = props;

	const changeTheme = () => {
		theme === 'light' ? setTheme('dark') : setTheme('light');
	};

	const icon = theme === 'light' ? <HiMoon size={40} /> : <CgSun size={40} />;

	return (
		<Page>
			<Container>
				<Toggle onClick={changeTheme}>{icon}</Toggle>
				<Title>{theme.toUpperCase()}</Title>
				<TagLine>change between light mode and dark mode</TagLine>
			</Container>
		</Page>
	);
};

const Page = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	weight: 100%;
	background-color: ${(props) => props.theme.pageBackground};
	transition: all 0.5s ease;
`;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Toggle = styled.button`
	cursor: pointer;
	height: 50px;
	weight: 50px;
	border-radius: 50%;
	border: none;
	background-color: ${(props) => props.theme.titleColor};
	color: ${(props) => props.theme.pageBackground};
	&: focus {
		outline: none;
	}
	transition: all 0.5s ease;
`;

const Title = styled.h1`
	color: ${(props) => props.theme.titleColor};
	transition: all 0.5s ease;
`;

const TagLine = styled.span`
	color: ${(props) => props.theme.tagLineColor};
	font-size: 18px;
	transition: all 0.5s ease;
`;

export default SplashScreen;
