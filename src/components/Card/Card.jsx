import { useNavigate } from "react-router-dom";
import { getTasksId } from "../../services/api";
import { Item, SCard, Group, Theme, Button, Dot, Title, Content, Date } from "./Card.styled"
import { useState } from "react";
import { useProvider } from "../../hooks/useProvider";
import { AuthContext, TaskContext, ThemeContext } from "../../context/ContextAPI";
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { toast } from "react-toastify";

function Card ({ task, type = task.topic }) {
    const { user } = useProvider(AuthContext)
    const { setTask } = useProvider(TaskContext)
    const { theme } = useProvider(ThemeContext)

    const [anim, setAnim] = useState(false)

    const navigate = useNavigate()
    const formatDate = (isoString) => {
        const [year, month, day] = isoString.slice(0, 10).split('-');
        return `${day}.${month}.${year.slice(2)}`;
    }
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({ id: task._id })
    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    const handleClick = () => {
        setAnim(true)

        getTasksId({ token: user.token, id: task._id })
            .then((data) => {
                setTask(data);
                navigate('/card/' + task._id)
            })
            .catch ((err) =>  toast.error(err.message)) 
            .finally(() => setAnim(false))
    }

    return (
        <>
            <Item>
                <SCard 
                    onClick={handleClick}
                    data-status={task.status} 
                    theme={theme}
                    ref={setNodeRef}
                    style={style}
                    {...attributes}
                    {...listeners}
                    $isDragging={isDragging}
                >
                    <Group>
                        <Theme $type={type} theme={theme}>
                            <p>{task.topic}</p>
                        </Theme>

                        <Button $anim={anim}>
                            <Dot $anim={anim} $delay={0} />
                            <Dot $anim={anim} $delay={0.2} />
                            <Dot $anim={anim} $delay={0.4} />
                        </Button>
                    </Group>

                    <Content>
                        <Title theme={theme}>{task.title}</Title>

                        <Date>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                <g clipPath="url(#clip0_1_415)">
                                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinejoin="round" />
                                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" stroke="#94A6BE" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                <clipPath id="clip0_1_415">
                                    <rect width="13" height="13" fill="white" />
                                </clipPath>
                                </defs>
                            </svg>
                            <p>{formatDate(task.date)}</p>
                        </Date>
                    </Content>
                </SCard>
            </Item>
        </>
    )
}

export default Card