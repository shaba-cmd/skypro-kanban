import { cardList } from "../../data.js";
import Card from "../Card/Card"

function Column ({ status }) {
    return (
        <div className="main__column column">
            <div className="column__title">
                <p>{status}</p>
            </div>

            <div className="cards">
                {cardList.map((el) => {
                    return (
                        <Card 
                            key={el.id}
                            theme={el.theme}
                            title={el.title}
                            date={el.date}
                            status={el.status}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default Column;