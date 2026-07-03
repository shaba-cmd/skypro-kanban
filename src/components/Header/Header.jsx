import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import { SHeader, Block, Logo, Nav, Button, User } from "./Header.styled.js";
import { Container } from "../../GlobalStyle.styled";

function Header ({ user }) {
	const [modal, setModal] = useState(false)

    return (
        <SHeader>
			<Container>
				<Block>
					<Logo className="_show _light" to='/'>
						<img src="/images/logo.png" alt="logo" />
					</Logo>
					<Logo className="_dark" to='/'>
						<img src="/images/logo_dark.png" alt="logo" />
					</Logo>
					<Nav>
						<Button to='/card/add'>Создать новую задачу</Button>
						<User onClick={() => {modal ? setModal(false) : setModal(true)}}>{user.name}</User>
						{modal && <PopUser user={user}/>}
					</Nav>		
				</Block>
			</Container>			
		</SHeader>
    )
}

export default Header;