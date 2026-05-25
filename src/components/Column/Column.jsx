import { cardList } from "../../data.js";
import Card from "../Card/Card"

function Column () {
    return (
        <div className="cards">
            {cardList.map((el) => {
                return (<Card 
                            key={el.id}
                            theme={el.theme}
                            title={el.title}
                            date={el.date}
                            status={el.status}
                        />)
            })}
        </div>
    )
}

export default Column;