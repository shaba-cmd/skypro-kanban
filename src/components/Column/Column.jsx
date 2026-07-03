import Card from "../Card/Card"
import { SColumn, Title, Cards } from "./Column.styled.js";

function Column ({ status, card }) {
    return (
        <SColumn>
            <Title>
                <p>{status}</p>
            </Title>

            <Cards>
                {card.map((el) => {
                    return (
                        <Card 
                            key={el.id}
                            theme={el.theme}
                            title={el.title}
                            date={el.date}
                            status={el.status}
                            card={el}
                        />
                    );
                })}
            </Cards>
        </SColumn>
    )
}

export default Column;