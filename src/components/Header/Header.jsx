import { useState } from "react";
import PopUser from "../PopUser/PopUser";

function Header () {
	const [modal, setModal] = useState(false)

    return (
        <header className="header">
			<div className="container">
				<div className="header__block">
					<div className="header__logo _show _light">
						<a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
					</div>
					<div className="header__logo _dark">
						<a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
					</div>
					<nav className="header__nav">
						<button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
						<p className='header__user _hover02' onClick={() => {setModal(true)}}>Ivan Ivanov</p>
						{modal && <PopUser 
							setModal={setModal} 
						/>}
					</nav>					
				</div>
			</div>			
		</header>
    )
}

export default Header;