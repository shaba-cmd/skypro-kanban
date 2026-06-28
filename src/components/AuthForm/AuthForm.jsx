import { Wrapper, Container, Modal, Block, Ttl, Login, Input, Button, Group } from "./AuthForm.styles"
import { Link } from "react-router-dom"

const AuthForm = ({ setIsAuth, isSignUp }) => {
  return (
    <Wrapper>
        <Container>
            <Modal>
				<Block>
                    <Ttl>{isSignUp ? 'Регистрация' : 'Вход'}</Ttl>
					<Login $type={isSignUp}>
                        {isSignUp && <Input className="first-name" type="text" name="first-name" placeholder="Имя" />}
						<Input type="text" name="login" placeholder="Эл. почта" />
						<Input type="password" name="password" placeholder="Пароль" />
						<Button className="_hover01" to='/' onClick={() => setIsAuth(true)}>{isSignUp ? 'Зарегистрироваться' : 'Войти'}</Button>
						<Group>
							<p>{isSignUp ? 'Уже есть аккаунт' : 'Нужно зарегистрироваться'}?</p>
							<Link to={isSignUp ? '/sign-in' : '/sign-up'}>{isSignUp ? 'Войдите' : 'Регистрируйтесь'} здесь</Link>
						</Group>
					</Login>
				</Block>
            </Modal>
        </Container>
    </Wrapper>
  )
}

export default AuthForm