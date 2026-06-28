import { SPopExit, Container, Block, Titile, FormGroup, ExitYes, ExitNo } from "./PopExit.styled"

const PopExit = () => {
  return (
    <SPopExit>
        <Container>
          <Block>
              <Titile>
                <h2>Выйти из аккаунта?</h2>
              </Titile>
              <form>
                <FormGroup>
                    <ExitYes to='/sign-in'>Да, выйти</ExitYes>
                    <ExitNo to='/'>Нет, остаться</ExitNo>
                </FormGroup>
              </form>
          </Block>
        </Container>
    </SPopExit>
  )
}

export default PopExit