import Column from "../Column/Column"
import { SMain, Block, Content } from "./Main.styled"
import { Container } from "../../GlobalStyle.styled";
import { useEffect, useState } from "react";
import { getTasks } from "../../services/api";

function Main ({ loading, setLoading, token, setTask, tasks, setTasks }) {
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);

        getTasks({ token })
        .then((data) => {
            setTasks(data);
            setError(null);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [token]);
    
    return (
        <SMain>
            <Container>   
                <Block>
                    { 
                        loading ? <p>Загрузка...</p>
                        : error ? <p>Ошибка: {error}</p>
                        : <Content>
                            <Column 
                                status={'Без статуса'} 
                                tasks={tasks} 
                                setTask={setTask} 
                                token={token}
                            />
                            <Column 
                                status={'Нужно сделать'} 
                                tasks={tasks} 
                                setTask={setTask} 
                                token={token} 
                            />
                            <Column 
                                status={'В работе'} 
                                tasks={tasks} 
                                setTask={setTask} 
                                token={token} 
                            />
                            <Column 
                                status={'Тестирование'} 
                                tasks={tasks} 
                                setTask={setTask} 
                                token={token} 
                            />
                            <Column 
                                status={'Готово'} 
                                tasks={tasks} 
                                setTask={setTask} 
                                token={token} 
                            />
                        </Content> 
                    }
                </Block>
            </Container>
        </SMain>
    )
}

export default Main