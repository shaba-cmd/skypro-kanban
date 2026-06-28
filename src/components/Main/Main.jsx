import { columnTitleList } from "../../data"
import Column from "../Column/Column"
import { SMain, Block, Content } from "./Main.styled"
import { Container } from "../../GlobalStyle.styled";

function Main ({ loading, card }) {
    return (
        <SMain>
            <Container>   
                <Block>
                    <Content>
                        {loading 
                            ? 'Данные загружаются...' 
                            : columnTitleList.map((el) => <Column status={el.status} card={card}/>) }
                    </Content> 
                </Block>
            </Container>
        </SMain>
    )
}

export default Main