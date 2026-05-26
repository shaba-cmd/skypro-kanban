import { cardList } from "../../data.js";
import Card from "../Card/Card"

function Column () {
    return (cardList.map((el) => {
                return (
                <div className="main__column column">
                    <div className="column__title">
                        <p>{el.status}</p>
                    </div>
                        <Card 
                            key={el.id}
                            theme={el.theme}
                            title={el.title}
                            date={el.date}
                            status={el.status}
                        />
                </div>)
            })
    )
}

export default Column;