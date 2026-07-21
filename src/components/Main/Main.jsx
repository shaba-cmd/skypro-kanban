import Column from "../Column/Column"
import { SMain, Block, Content, Empty } from "./Main.styled"
import { Container } from "../../GlobalStyle.styled";
import { useEffect, useState } from "react";
import { getTasks, putTasks } from "../../services/api";
import { AuthContext, LoadingContext, TaskContext, ThemeContext } from "../../context/ContextAPI";
import { useProvider } from "../../hooks/useProvider";
import { Flip, ToastContainer, toast } from 'react-toastify';
import TaskSkeleton from "../TaskSkeleton/TaskSkeleton";
import {
    DndContext,
    DragOverlay,
    pointerWithin,
    TouchSensor,
    MouseSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core'
import Card from "../Card/Card";

function Main () {
    const STATUSES = [
        'Без статуса',
        'Нужно сделать',
        'В работе',
        'Тестирование',
        'Готово',
    ];
    const [activeId, setActiveId] = useState(null)

    const { user } = useProvider(AuthContext)
    const { theme } = useProvider(ThemeContext)
    const { tasks, setTasks } = useProvider(TaskContext)
    const { loading, setLoading } = useProvider(LoadingContext)

    useEffect(() => {
        setLoading(true);

        getTasks({ token: user.token })
        .then((data) => {
            setTasks(data);
        })
        .catch((err) => toast.error(err.message))
        .finally(() => setLoading(false));
    }, [user.token]);

    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: { distance: 5 },
        }),
        useSensor(TouchSensor, {
            activationConstraint: { delay: 150, tolerance: 5 },
        }),
    );

    const handleDragStart = (event) => {
        setActiveId(event.active.id);
    };

    const handleDragEnd = (event) => {
        const { active, over } = event;
        setActiveId(null);

        if (!over) return;

        const overTask = tasks.find(t => t._id === over.id);
        const newStatus = overTask ? overTask.status : over.id;

        const task = tasks.find(t => t._id === active.id);
        if (!task || task.status === newStatus) return;
    
        setTasks(prev => prev.map(t =>
            t._id === active.id ? { ...t, status: newStatus } : t
        ));

        putTasks({ 
            token: user.token, 
            id: active.id, 
            task: {
                title: task.title,
                topic: task.topic,
                description: task.description,
                status: newStatus,
                date: task.date,
            }
        })
        .then(() => toast.success('Статус обновлён!'))
        .catch(() => toast.error('Ошибка! Откатываем...'));
    };

    const getTasksByStatus = (status) => tasks.filter(t => t.status === status);

    return (
        <SMain>
            <Container>   
                <Block>
                    { 
                        loading ? <TaskSkeleton />
                        : !tasks.length ? <Empty>Новых задач нет</Empty>
                        : (
                            <DndContext
                                sensors={sensors}
                                collisionDetection={pointerWithin}
                                onDragStart={handleDragStart}
                                onDragEnd={handleDragEnd}
                            >
                                <Content>
                                    {STATUSES.map(status => (
                                        <Column 
                                            key={status}
                                            status={status}
                                            tasks={getTasksByStatus(status)}
                                        />
                                    ))}
                                </Content>

                                <DragOverlay>
                                    {activeId ? (
                                        <Card task={tasks.find(t => t._id === activeId)} />
                                    ) : null}
                                </DragOverlay>
                            </DndContext>
                        )
                    }
                </Block>

                <ToastContainer
                    position="bottom-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme={theme}
                    transition={Flip}
                />
            </Container>
        </SMain>
    )
}

export default Main