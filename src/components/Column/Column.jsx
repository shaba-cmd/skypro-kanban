import Card from "../Card/Card"
import { SColumn, Title, Cards } from "./Column.styled.js";

function Column ({ status, tasks, setTask, token }) {
    const filteredTasks = tasks.filter((t) => t.status === status);

    return (
        <SColumn>
            <Title>
                <p>{status}</p>
            </Title>

            <Cards>
                {filteredTasks.map((el) => {
                    return (
                        <Card 
                            key={el._id}
                            topic={el.topic}
                            title={el.title}
                            date={el.date}
                            status={el.status}
                            id={el}
                            setTask={setTask}
                            token={token}
                        />
                    );
                })}
            </Cards>
        </SColumn>
    )
}

export default Column;