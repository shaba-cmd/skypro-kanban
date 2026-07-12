import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import { SHeader, Block, Logo, Nav, Button, User } from "./Header.styled.js";
import { Container } from "../../GlobalStyle.styled";
import { AuthContext, ThemeContext } from "../../context/ContextAPI.js";
import { useProvider } from "../../hooks/useProvider.js";

function Header () {
	const [modal, setModal] = useState(false)
	const { user } = useProvider(AuthContext)
	const { theme } = useProvider(ThemeContext)

    return (
        <SHeader theme={theme}>
			<Container>
				<Block>
					<Logo to='/'>
						<img src={`/images/${theme === 'light' ? 'logo' : 'logo_dark'}.png`} alt="logo" />
					</Logo>
					<Nav>
						<Button to='/card/add'>Создать новую задачу</Button>
						<User theme={theme} onClick={() => {modal ? setModal(false) : setModal(true)}}>{user.name}</User>
						{modal && <PopUser />}
					</Nav>		
				</Block>
			</Container>			
		</SHeader>
    )
}

export default Header;