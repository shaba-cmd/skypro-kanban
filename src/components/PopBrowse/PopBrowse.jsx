import { useEffect, useState } from "react";
import Calendar from "../Calendar/Calendar";
import { Browse, Container, Block, Content, TopBlock, Status, Themes, Theme, Ttl, Wrap, CatP, CatTheme, Form, FormBlock, Textarea, Group, Button } from "./PopBrowse.styled";
import { Link, useNavigate } from "react-router-dom";
import { deleteTasks, putTasks } from "../../services/api";
import { AuthContext, LoadingContext, TaskContext, ThemeContext } from "../../context/ContextAPI";
import { useProvider } from "../../hooks/useProvider";
import { toast } from "react-toastify";

function PopBrowse () {
    const navigate = useNavigate()
    const { user } = useProvider(AuthContext)
    const { task, setTask, setTasks } = useProvider(TaskContext)
    const { loading, setLoading } = useProvider(LoadingContext)
    const { theme } = useProvider(ThemeContext)
    const [edit, setEdit] = useState(false) 
    const [saved, setSaved] = useState(false) 
    const [back, setBack] = useState(false) 
    const [taskUpdate, setTaskUpdate] = useState({
        title: task.title,
        topic: task.topic,
        status: task.status,
        description: task.description,
        date: task.date,
    })

    useEffect(() => {
        if (!taskUpdate.topic) {
            navigate('/');
        }
    }, [taskUpdate.topic, navigate]);

    const handleDelete = () => {
        setLoading(true)
    
        deleteTasks({ token: user.token, id: task._id })
            .then((data) => {
                setTasks(data);
                navigate('/')
                toast.success('Задача удалена!')
            })
            .catch((err) => toast.error(err.message))
            .finally(() => setLoading(false));
    }

    const handleDateChange = (isoDate) => {
        const currentDate = new Date(task.date).toLocaleDateString()
        const updateDate = new Date(isoDate).toLocaleDateString()

        setBack(currentDate === updateDate ? false : true)

        setTaskUpdate(prev => ({
            ...prev,
            date: isoDate
        }));
    };

    const handleChange = (value) => {
        setBack(task.description === value ? false : true)

        setTaskUpdate(e => ({
            ...e,
            description: value.trim() === '' ? ' ' : value,
        }))
    }

    const handleUpdate = () => {
        setSaved(true)
    
        putTasks({ token: user.token, id: task._id, task: taskUpdate })
            .then((data) => {
                setTasks(data);
                setTask({ ...taskUpdate, _id: task._id });
                navigate('/')
                toast.success('Задача сохранена!')
            })
            .catch((err) => toast.error(err.message))
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
            <Container theme={theme}>
                <Block theme={theme}>
                    <Content>
                        <TopBlock>
                            <Ttl theme={theme}>Название задачи</Ttl>
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
                                        theme={theme}
                                        name="text"
                                        id="textArea01"
                                        readOnly={!edit}
                                        placeholder="Введите описание задачи..."
                                        value={taskUpdate.description === ' ' ? taskUpdate.description.trim() : taskUpdate.description}
                                        onChange={(e) => handleChange(e.target.value)}
                                    >
                                    </Textarea>
                                </FormBlock>
                            </Form>
                            <Calendar 
                                edit={edit}
                                key={taskUpdate.date}
                                selectedDate={taskUpdate.date} 
                                onDateChange={handleDateChange} 
                            />
                        </Wrap>
                        <div>
                            <CatP className="subttl">Категория</CatP>
                            <CatTheme className={
                                `${taskUpdate.topic === 'Web Design'
                                ? ' _orange' : taskUpdate.topic === 'Research'
                                ? '_green' : '_purple'} _active-category _mb`
                            }>
                                <p>{taskUpdate.topic}</p>
                            </CatTheme>
                        </div>
                        {!edit ?
                            <div className="pop-browse__btn-browse">
                                <Group>
                                    <Button 
                                        className="_btn-bor"
                                        onClick={() => edit ? setEdit(false) : setEdit(true)}
                                        >Редактировать задачу</Button>

                                    <Button 
                                        className="_btn-bor" 
                                        onClick={handleDelete}
                                        >{loading ? 'Удаление...' : 'Удалить задачу'}</Button>
                                </Group>
                                <Link to='/'><Button className="_btn-bg _hover01">Закрыть</Button></Link>
                            </div>
                            :
                            <div className="pop-browse__btn-edit">
                                <Group>
                                    <Button 
                                        className="_btn-bg _hover01" 
                                        onClick={handleUpdate}
                                    >{saved ? 'Сохранение...' : 'Сохранить'}</Button>

                                    <Button 
                                        theme={theme}
                                        className="_btn-bor active" 
                                        $type={back} 
                                        onClick={() => back && handleBack()}
                                    >Отменить</Button>

                                    <Button 
                                        className="_btn-bor" 
                                        onClick={handleDelete}
                                    >{loading ? 'Удаление...' : 'Удалить задачу'}</Button>
                                </Group>
                                <Link to='/'><Button className="_btn-bg _hover01">Закрыть</Button></Link>
                            </div>
                        }
                    </Content>
                </Block>
            </Container>
        </Browse>
    )
}

export default PopBrowse;