import { AuthContext, ThemeContext } from "../../context/ContextAPI"
import { useProvider } from "../../hooks/useProvider"
import { PopUserSet, Name, Mail, Theme, Button } from "./PopUser.styled"

function PopUser () {
    const { user } = useProvider(AuthContext)
    const { theme, setTheme } = useProvider(ThemeContext)

    const handleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)
    }

    return (
        <PopUserSet theme={theme}>
            <Name theme={theme}>{user.name}</Name>
            <Mail>{user.login}</Mail>
            <Theme theme={theme}>
                <p>{theme === 'light'? 'Темная' : 'Светлая'} тема</p>
                <input type="checkbox" name="checkbox" checked={theme === 'dark'} onChange={handleTheme} />
            </Theme>
            <Button theme={theme} to='/exit'>Выйти</Button>
        </PopUserSet>
    )
}

export default PopUser