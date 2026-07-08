import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { Browse, Container, Block, Content, TopBlock, Status, Themes, Theme, Ttl, Wrap, CatP, CatTheme, Form, FormBlock, Textarea, Group, Button, Error } from "./PopBrowse.styled";
import { Link, useNavigate } from "react-router-dom";
import { deleteTasks, putTasks } from "../../services/api";

function PopBrowse ({ task, token, loading, setLoading, setTasks }) {
    const navigate = useNavigate()
    const [edit, setEdit] = useState(false) 
    const [error, setError] = useState(null) 
    const [saved, setSaved] = useState(false) 
    const [back, setBack] = useState(false) 
    const [taskUpdate, setTaskUpdate] = useState({
        title: task.title,
        topic: task.topic,
        status: task.status,
        description: task.description,
        date: task.date,
    }) 
    
    const handleDelete = () => {
        setLoading(true)
    
        deleteTasks({ token, id: task._id })
            .then((data) => {
                setTasks(data);
                setError(null);
                navigate('/')
            })
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }

    const handleChange = (field, value) => {
        setBack(task.description === value ? false : true)

        setTaskUpdate(e => ({
            ...e,
            [field]: value,
        }))
    }

    const handleUpdate = () => {
        setSaved(true)
    
        putTasks({ token, id: task._id, task: taskUpdate })
            .then((data) => {
                setTasks(data);
                setError(null);
                setBack(false)
            })
            .catch((err) => setError(err.message))
            .finally(() => setSaved(false));
    }

    const handleBack = () => {
        setBack(false)

        setTaskUpdate({
            title: task.title,
            topic: task.topic,
            status: task.status,
            description: task.description,
            date: task.date,
        })
    }

    return (
        <Browse>
            <Container>
                <Block>
                    <Content>
                        <TopBlock>
                            <Ttl>Название задачи</Ttl>
                            <CatTheme className={
                                `${taskUpdate.topic === 'Web Design' 
                                ? ' _orange' : taskUpdate.topic === 'Research' 
                                ? '_green' : '_purple'} _active-category`
                            }>
                                <p>{taskUpdate.title}</p>
                            </CatTheme>
                        </TopBlock>
                        <Status>
                            <p className="subttl">Статус</p>
                            <Themes>
                                <Theme className="_gray">
                                    <p className="_gray">{taskUpdate.status}</p>
                                </Theme>
                            </Themes>
                        </Status>
                        <Wrap>
                            <Form>
                                <FormBlock>
                                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                    <Textarea 
                                        name="text"
                                        id="textArea01"
                                        readOnly={!edit}
                                        placeholder="Введите описание задачи..."
                                        value={taskUpdate.description === ' ' ? taskUpdate.description.trim() : taskUpdate.description}
                                        onChange={(e) => handleChange("description", e.target.value)}
                                    >
                                    </Textarea>
                                </FormBlock>
                            </Form>
                            <Calendar />
                        </Wrap>
                        <div>
                            <CatP className="subttl">Категория</CatP>
                            <CatTheme className={
                                `${taskUpdate.topic === 'Web Design'
                                ? ' _orange' : taskUpdate.topic === 'Research'
                                ? '_green' : '_purple'} _active-category _mb`
                            }>
                                <p>{taskUpdate.topic ? taskUpdate.topic : navigate('/')}</p>
                            </CatTheme>
                        </div>
                        <div className="pop-browse__btn-browse">
                            <Group>
                                <Button 
                                    className="_btn-bor"
                                    onClick={() => setEdit(true)}
                                >Редактировать задачу</Button>

                                <Button 
                                    className="_btn-bor" 
                                    onClick={handleDelete}
                                >{loading ? 'Удаление...' : 'Удалить задачу'}</Button>
                            </Group>
                            <Link to='/'><Button className="_btn-bg _hover01">Закрыть</Button></Link>
                        </div>
                        {edit && 
                            <div className="pop-browse__btn-edit">
                                <Group>
                                    <Button 
                                        className="_btn-bg _hover01" 
                                        onClick={handleUpdate}
                                    >{saved ? 'Сохранение...' : 'Сохранить'}</Button>

                                    <Button 
                                        className="_btn-bor active" 
                                        $type={back} 
                                        onClick={() => back && handleBack()}
                                    >Отменить</Button>

                                    <Button 
                                        className="_btn-bor" 
                                        onClick={handleDelete}
                                    >{loading ? 'Удаление...' : 'Удалить задачу'}</Button>
                                </Group>
                                <Button 
                                    className="_btn-bg _hover01" 
                                    onClick={() => setEdit(false)}
                                >Закрыть</Button>
                            </div>
                        }
                        {error && <Error>{error}</Error>}
                    </Content>
                </Block>
            </Container>
        </Browse>
    )
}

export default PopBrowse;