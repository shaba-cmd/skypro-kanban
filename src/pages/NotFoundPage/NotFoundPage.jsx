import { ThemeContext } from "../../context/ContextAPI";
import { useProvider } from "../../hooks/useProvider";
import { Box, Home } from "./NotFoundPage.styled";

const NotFoundPage = () => {
    const { theme } = useProvider(ThemeContext)

    return (
        <Box>
            <h1>404</h1>
            <p>Страница не найдена</p>
            <Home theme={theme} to='/'>на главную страницу</Home>
        </Box>
    )
};

export default NotFoundPage;