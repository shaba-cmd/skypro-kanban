import { SPopExit, Container, Block, Titile, FormGroup, ExitYes, ExitNo } from "./PopExit.styled"

const PopExit = ({ handleLogout }) => {

  return (
    <SPopExit>
        <Container>
          <Block>
              <Titile>
                <h2>Выйти из аккаунта?</h2>
              </Titile>
              <form>
                <FormGroup>
                    <ExitYes onClick={handleLogout}>Да, выйти</ExitYes>
                    <ExitNo to='/'>Нет, остаться</ExitNo>
                </FormGroup>
              </form>
          </Block>
        </Container>
    </SPopExit>
  )
}

export default PopExit