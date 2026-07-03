import { useMemo, useState } from "react";
import Calendar from "../Calendar/Calendar";
import { Browse, Container, Block, Content, TopBlock, Status, Themes, Theme, Ttl, Wrap, CatP, CatTheme, Form, FormBlock, Textarea, Group, Button } from "./PopBrowse.styled";
import { useParams, Link } from "react-router-dom";

function PopBrowse ({ card }) {
    const [edit, setEdit] = useState(false)

    const { id } = useParams();
    const cards = useMemo(
        () => card.find((c) => c.id === id) || {
            theme: "",
            title: "",
            date: "",
            status: "",
        },
        [id]
    )
    
    return (
        <Browse>
            <Container>
                <Block>
                    <Content>
                        <TopBlock>
                            <Ttl>Название задачи</Ttl>
                            <CatTheme className={`${cards.theme === 'Web Design' ?' _orange' : cards.theme === 'Research' ? '_green' : '_purple'} _active-category`}>
                                <p>{cards.title}</p>
                            </CatTheme>
                        </TopBlock>
                        <Status>
                            <p className="subttl">Статус</p>
                            <Themes>
                                <Theme className="_gray">
                                    <p className="_gray">{cards.status}</p>
                                </Theme>
                            </Themes>
                        </Status>
                        <Wrap>
                            <Form>
                                <FormBlock>
                                    <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                    <Textarea name="text" id="textArea01" readOnly={!edit} placeholder="Введите описание задачи..."></Textarea>
                                </FormBlock>
                            </Form>
                            <Calendar/>
                        </Wrap>
                        <div>
                            <CatP className="subttl">Категория</CatP>
                            <CatTheme className={`${cards.theme === 'Web Design' ?' _orange' : cards.theme === 'Research' ? '_green' : '_purple'} _active-category _mb`}>
                                <p>{cards.theme}</p>
                            </CatTheme>
                        </div>
                        <div className="pop-browse__btn-browse">
                            <Group>
                                <Button className="_btn-bor _hover03" onClick={() => setEdit(true)}>Редактировать задачу</Button>
                                <Link  to='/'><Button className="_btn-bor _hover03">Удалить задачу</Button></Link>
                            </Group>
                            <Link  to='/'><Button className="_btn-bg _hover01">Закрыть</Button></Link>
                        </div>
                        {edit && 
                            <div className="pop-browse__btn-edit">
                                <Group>
                                    <Button className="_btn-bg _hover01">Сохранить</Button>
                                    <Button className="_btn-bor _hover03">Отменить</Button>
                                    <Link  to='/'><Button className="_btn-bor _hover03">Удалить задачу</Button></Link>
                                </Group>
                                <Button className="_btn-bg _hover01" onClick={() => setEdit(false)}>Закрыть</Button>
                            </div>
                        }
                    </Content>
                </Block>
            </Container>
        </Browse>
    )
}

export default PopBrowse;