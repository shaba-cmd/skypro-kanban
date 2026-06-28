import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { Browse, Container, Block, Content, TopBlock, Status, Themes, Theme, Ttl, Wrap, CatP, CatTheme, Form, FormBlock, Textarea } from "./PopBrowse.styled";
import { Link } from "react-router-dom";

function PopBrowse ({ card }) {
    const [edit, setEdit] = useState(false)

    return (
        <Browse>
            <Container>
                <Block>
                    <Content>
                        <TopBlock>
                            <Ttl>Название задачи</Ttl>
                            <CatTheme className="_orange _active-category">
                                <p className="_orange">{card?.title}</p>
                            </CatTheme>
                        </TopBlock>
                        <Status>
                            <p className="subttl">Статус</p>
                            <Themes>
                                <Theme className="_gray">
                                    <p className="_gray">{card?.status}</p>
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
                            <CatTheme className="_orange _active-category _mb">
                                <p className="_orange">{card?.theme}</p>
                            </CatTheme>
                        </div>
                        <div className="pop-browse__btn-browse">
                            <div className="btn-group">
                                <button className="btn-browse__edit _btn-bor _hover03" onClick={() => setEdit(true)}>Редактировать задачу</button>
                                <button className="btn-browse__delete _btn-bor _hover03"><Link to='/'>Удалить задачу</Link></button>
                            </div>
                            <button className="btn-browse__close _btn-bg _hover01"><Link to='/'>Закрыть</Link></button>
                        </div>
                        {edit && 
                            <div className="pop-browse__btn-edit">
                                <div className="btn-group">
                                    <button className="btn-edit__edit _btn-bg _hover01">Сохранить</button>
                                    <button className="btn-edit__edit _btn-bor _hover03">Отменить</button>
                                    <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><Link to='/'>Удалить задачу</Link></button>
                                </div>
                                <button className="btn-edit__close _btn-bg _hover01" onClick={() => setEdit(false)}>Закрыть</button>
                            </div>
                        }
                    </Content>
                </Block>
            </Container>
        </Browse>
    )
}

export default PopBrowse;