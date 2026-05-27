import { columnTitleList } from "../../data"
import Column from "../Column/Column"
import { SMain, Block, Content } from "./Main.styled"
import { Container } from "../../App.styled.js";

function Main ({ loading }) {
    return (
        <SMain>
            <Container>   
                <Block>
                    <Content>
                        {loading 
                            ? 'Данные загружаются...' 
                            : columnTitleList.map((el) => <Column status={el.status}/>) }
                    </Content> 
                </Block>
            </Container>
        </SMain>
    )
}

export default Main