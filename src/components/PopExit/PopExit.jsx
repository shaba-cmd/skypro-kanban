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
                    <ExitYes><p>Да, выйти</p> </ExitYes>
                    <ExitNo><p>Нет, остаться</p> </ExitNo>
                </FormGroup>
              </form>
          </Block>
        </Container>
    </SPopExit>
  )
}

export default PopExit