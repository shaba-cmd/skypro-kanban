import { TaskContext } from "../../context/ContextAPI.js";
import { useProvider } from "../../hooks/useProvider.js";
import Card from "../Card/Card"
import { SColumn, Title, Cards } from "./Column.styled.js";

function Column ({ status }) {
    const { tasks } = useProvider(TaskContext)
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
                        />
                    );
                })}
            </Cards>
        </SColumn>
    )
}

export default Column;