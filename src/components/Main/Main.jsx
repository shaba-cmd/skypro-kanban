import Column from "../Column/Column"
import { SMain, Block, Content } from "./Main.styled"
import { Container } from "../../GlobalStyle.styled";
import { useEffect, useState } from "react";
import { getTasks } from "../../services/api";
import { AuthContext, LoadingContext, TaskContext } from "../../context/ContextAPI";
import { useProvider } from "../../hooks/useProvider";

function Main () {
    const [error, setError] = useState(null);
    const { user } = useProvider(AuthContext)
    const { setTasks } = useProvider(TaskContext)
    const { loading, setLoading } = useProvider(LoadingContext)

    useEffect(() => {
        setLoading(true);

        getTasks({ token: user.token })
        .then((data) => {
            setTasks(data);
            setError(null);
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }, [user.token]);
    
    return (
        <SMain>
            <Container>   
                <Block>
                    { 
                        loading ? <p>Загрузка...</p>
                        : error ? <p>Ошибка: {error}</p>
                        : <Content>
                            <Column status={'Без статуса'} />
                            <Column status={'Нужно сделать'} />
                            <Column status={'В работе'} />
                            <Column status={'Тестирование'} />
                            <Column status={'Готово'} />
                        </Content> 
                    }
                </Block>
            </Container>
        </SMain>
    )
}

export default Main