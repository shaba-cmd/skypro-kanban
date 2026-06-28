import { cardList } from "../../data.js";
import Card from "../Card/Card"
import { SColumn, Title, Cards } from "./Column.styled.js";

function Column ({ status, card }) {
    return (
        <SColumn>
            <Title>
                <p>{status}</p>
            </Title>

            <Cards>
                {cardList.map((el) => {
                    return (
                        <Card 
                            key={el.id}
                            theme={el.theme}
                            title={el.title}
                            date={el.date}
                            status={el.status}
                            card={card}
                        />
                    );
                })}
            </Cards>
        </SColumn>
    )
}

export default Column;