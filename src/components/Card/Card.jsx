import { useNavigate } from "react-router-dom";
import { getTasksId } from "../../services/api";
import { Item, SCard, Group, Theme, Button, Dot, Title, Content, Date } from "./Card.styled"
import { useState } from "react";

function Card ({ topic, title, date, status, id, setTask, token, type = topic }) {
    const [anim, setAnim] = useState(false)
    const navigate = useNavigate()
    const formatDate = (isoString) => {
        const [year, month, day] = isoString.slice(0, 10).split('-');
        return `${day}.${month}.${year.slice(2)}`;
    }

    const handleClick = () => {
        setAnim(true)

        getTasksId({ token, id: id._id })
            .then((data) => {
                setTask(data);
                navigate('/card/' + id._id)
            })
            .finally(() => setAnim(false))
    }

    return (
        <>
            <Item>
                <SCard data-status={status}>
                    <Group>
                        <Theme $type={type}>
                            <p>{topic}</p>
                        </Theme>

                        <Button $anim={anim} onClick={handleClick}>
                            <Dot $anim={anim} $delay={0} />
                            <Dot $anim={anim} $delay={0.2} />
                            <Dot $anim={anim} $delay={0.4} />
                        </Button>
                    </Group>

                    <Content>
                        <a>
                            <Title onClick={handleClick}>{title}</Title>
                        </a>

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
                            <p>{formatDate(date)}
                            </p>
                        </Date>
                    </Content>
                </SCard>
            </Item>
        </>
    )
}

export default Card