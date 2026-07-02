import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { NewCard, Container, Block, Content, Ttl, Close, Wrap, Categories, CatP, Themes, Theme, Form, FormBlock, Input, Textarea, Create } from "./PopNewCard.styled";
import { cardList } from "../../data";

function PopNewCard () {
    const [isActive, setIsActive] = useState(1)

    return (
        <NewCard>
            <Container>
                <Block>
                    <Content>
                        <Ttl>Создание задачи</Ttl>
                        <Close to='/'>&#10006;</Close>
                        <Wrap>
                            <Form>
                                <FormBlock>
                                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                    <Input type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus />
                                </FormBlock>
                                <FormBlock>
                                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                    <Textarea name="text" id="textArea"  placeholder="Введите описание задачи..."></Textarea>
                                </FormBlock>
                            </Form>
                            <Calendar />
                        </Wrap>
                        <Categories>
                            <CatP className="subttl">Категория</CatP>
                            <Themes>
                                {cardList.map((el) => {
                                    return (
                                        <Theme key={el.id} onClick={() => setIsActive(el.id)} className={`
                                            ${el.theme === 'Web Design' ?' _orange' : el.theme === 'Research' ? '_green' : '_purple'}
                                            ${isActive === el.id && '_active-category'}
                                        `}>
                                            <p>{el.theme}</p>
                                        </Theme>
                                    )
                                })}
                            </Themes>
                        </Categories>
                        <Create className="_hover01" to='/'>Создать задачу</Create>
                    </Content>
                </Block>
            </Container>
        </NewCard>
    )
}

export default PopNewCard;