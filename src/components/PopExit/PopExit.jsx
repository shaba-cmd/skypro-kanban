import { AuthContext, ThemeContext } from "../../context/ContextAPI"
import { useProvider } from "../../hooks/useProvider"
import { SPopExit, Container, Block, Titile, FormGroup, ExitYes, ExitNo } from "./PopExit.styled"

const PopExit = () => {
  const { logout } = useProvider(AuthContext)
  const { theme } = useProvider(ThemeContext)

  return (
    <SPopExit>
        <Container theme={theme}>
          <Block theme={theme}>
              <Titile>
                <h2>Выйти из аккаунта?</h2>
              </Titile>
              <form>
                <FormGroup>
                    <ExitYes onClick={logout} type="button">Да, выйти</ExitYes>
                    <ExitNo theme={theme} to='/'>Нет, остаться</ExitNo>
                </FormGroup>
              </form>
          </Block>
        </Container>
    </SPopExit>
  )
}

export default PopExit