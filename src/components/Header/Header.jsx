import { useState } from "react";
import PopUser from "../PopUser/PopUser";
import { SHeader, Block, Logo, Nav, Button, User } from "./Header.styled.js";
import { Container } from "../../GlobalStyle.styled";

function Header () {
	const [modal, setModal] = useState(false)

    return (
        <SHeader>
			<Container>
				<Block>
					<Logo className="_show _light">
						<a href="#" target="_self"><img src="../../../public/images/logo.png" alt="logo" /></a>
					</Logo>
					<Logo className="_dark">
						<a href="#" target="_self"><img src="../../../public/images/logo_dark.png" alt="logo" /></a>
					</Logo>
					<Nav>
						<Button><a href="#">Создать новую задачу</a></Button>
						<User onClick={() => {modal ? setModal(false) : setModal(true)}}>Ivan Ivanov</User>
						{modal && <PopUser />}
					</Nav>					
				</Block>
			</Container>			
		</SHeader>
    )
}

export default Header;