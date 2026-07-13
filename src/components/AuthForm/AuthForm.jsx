import { useState } from "react";
import { Wrapper, Container, Modal, Block, Ttl, Login, Input, Error, Button, Group } from "./AuthForm.styles"
import { Link, useNavigate } from "react-router-dom"
import { signIn, signUp } from "../../services/auth";
import { useProvider } from "../../hooks/useProvider";
import { AuthContext, ThemeContext } from "../../context/ContextAPI";

const AuthForm = ({ isSignUp }) => {
	const { login } = useProvider(AuthContext)
	const { theme } = useProvider(ThemeContext)
	const navigate = useNavigate();

	const [formData, setFormDate] = useState({
		name: '',
		login: '',
		password: '',
	})
	const [errors, setErrors] = useState({
		name: false,
		login: false,
		password: false,
	})
	const [error, setError] = useState(null)

	const validateForm = () => {
		const newErrors = { name: false, login: false, password: false };
		let isValid = true;

		if (isSignUp && !formData.name.trim()) {
			newErrors.name = true
			isValid = false;
			setError('Заполните все поля!');
		} else if (isSignUp && formData.name.length < 3) {
			newErrors.name = true;
			isValid = false;
			setError('Имя должно быть не менее 3 символов');
		}

		if (!formData.login.trim()) {
			newErrors.login = true;
			isValid = false;
			setError('Заполните все поля!');
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.login)) {
			newErrors.login = true;
			isValid = false;
			setError('Некорректный email. Пример: user@mail.ru');
    	}

		if (!formData.password.trim()) {
			newErrors.password = true
			isValid = false;
			setError('Заполните все поля!');
		} else if (formData.password.length < 6) {
			newErrors.password = true;
			isValid = false;
			setError('Пароль должен быть не менее 6 символов');
		}

		setErrors(newErrors)
		return isValid;
	}

	const handleChange = (e) => {
		const {name, value} = e.target;
		setFormDate({
			...formData,
			[name]: value,
		})
		setErrors({
			...errors, 
			[name]: false,
		})
		setError(null)
	}

	const handleClick = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			const data = isSignUp 
				? await signUp(formData)
				: await signIn({ login: formData.login, password: formData.password })
			
			if (data) {
				login({
					name: data.name,
					login: data.login,
					token: data.token
				})
				navigate('/')
			}
		} catch(error) {
			setError(error.message);
		}
	}

	return (
		<Wrapper>
			<Container>
				<Modal>
					<Block theme={theme}>
						<Ttl>{isSignUp ? 'Регистрация' : 'Вход'}</Ttl>
						<Login onSubmit={handleClick}>
							{isSignUp && 
								<Input 
								 	theme={theme}
									$error={errors.name}
									value={formData.name} 
									type="text" 
									name="name" 
									placeholder="Имя"
									onChange={handleChange}
								/>
							}
							<Input 
							 	theme={theme}
								$error={errors.login}
								value={formData.login} 
								type="text" 
								name="login" 
								placeholder="Эл. почта"
								onChange={handleChange}
							/>
							<Input 
							 	theme={theme}
								$error={errors.password}
								value={formData.password} 
								type="password" 
								name="password" 
								placeholder="Пароль"
								onChange={handleChange}
							/>
							<Error>{error}</Error>
							<Button className="_hover01">{isSignUp ? 'Зарегистрироваться' : 'Войти'}</Button>
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