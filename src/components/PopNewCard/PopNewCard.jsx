import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { NewCard, Container, Block, Content, Ttl, Close, Wrap, Categories, CatP, Themes, Theme, Form, FormBlock, Input, Textarea, Create, Error } from "./PopNewCard.styled";
import { postTasks } from "../../services/api";
import { AuthContext, LoadingContext, TaskContext, ThemeContext } from "../../context/ContextAPI";
import { useProvider } from "../../hooks/useProvider";

function PopNewCard () {
    const { user } = useProvider(AuthContext)
    const { setTasks } = useProvider(TaskContext)
    const { loading, setLoading } = useProvider(LoadingContext)
    const { theme } = useProvider(ThemeContext)
    const [isActive, setIsActive] = useState(2)
    const [error, setError] = useState(null);
    const [count, setCount] = useState(0)
    const [task, setTask] = useState({
        title: " ",
        topic: "Research",
        status: "Без статуса",
        description: " ",
        date: new Date().toISOString(),
    });

    const themeTask = [
        {id: 1, theme: 'Web Design'},
        {id: 2, theme: 'Research'},
        {id: 3, theme: 'Copywriting'},
    ]

    const handleChange = (field, value) => {
        setTask(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleThemeClick = (themeTask) => {
        handleChange("topic", themeTask.theme);
        setIsActive(themeTask.id)
    };

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        let finalTask = { ...task };

        if (!task.title.trim()) {
            const newCount = count + 1;
            setCount(newCount);
            finalTask = {
                ...finalTask,
                title: `Новая задача ${newCount}!`,
            };
        }

        try {
            await postTasks({ token: user.token, task: finalTask })
            .then((data) => {
                setTasks(data)
                setTask(prev => ({
                    ...prev,
                    title: ' ',
                    description: ' ',
                }));
                setIsActive(2)
            })
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <NewCard>
            <Container theme={theme}>
                <Block theme={theme}>
                    <Content>
                        <Ttl theme={theme}>Создание задачи</Ttl>
                        <Close to='/'>&#10006;</Close>
                        <Wrap>
                            <Form>
                                <FormBlock>
                                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                    <Input 
                                        theme={theme}
                                        type="text" 
                                        name="name" 
                                        id="formTitle" 
                                        placeholder="Введите название задачи..." 
                                        value={task.title === ' ' ? task.title.trim() : task.title}
                                        onChange={(e) => handleChange("title", e.target.value)}
                                        autoFocus 
                                    />
                                </FormBlock>
                                <FormBlock>
                                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                    <Textarea 
                                        theme={theme}
                                        name="text" 
                                        id="textArea"  
                                        placeholder="Введите описание задачи..."
                                        value={task.description === ' ' ? task.description.trim() : task.description}
                                        onChange={(e) => handleChange("description", e.target.value)}
                                    ></Textarea>
                                </FormBlock>
                            </Form>
                            <Calendar />
                        </Wrap>
                        <Categories>
                            <CatP className="subttl">Категория</CatP>
                            <Themes>
                                {themeTask.map((el) => {
                                    return (
                                        <Theme key={el.id} onClick={() => handleThemeClick(el)} className={`
                                            ${el.theme === 'Web Design' ?' _orange' 
                                                : el.theme === 'Research' ? '_green' 
                                                : '_purple'}
                                            ${isActive === el.id && '_active-category'}
                                        `}>
                                            <p>{el.theme}</p>
                                        </Theme>
                                    )
                                })}
                            </Themes>
                        </Categories>

                        <Create className="_hover01" onClick={handleSubmit} disabled={loading}>
                            {loading ? "Создание..." : "Создать задачу"}
                        </Create>

                        {error && <Error>{error}</Error>}
                    </Content>
                </Block>
            </Container>
        </NewCard>
    )
}

export default PopNewCard;