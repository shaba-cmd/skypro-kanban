import { PopUserSet, Name, Mail, Theme, Button } from "./PopUser.styled"

function PopUser () {
    return (
        <PopUserSet>
            <Name>Ivan Ivanov</Name>
            <Mail>ivan.ivanov@gmail.com</Mail>
            <Theme>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
            </Theme>
            <Button type="button"><p>Выйти</p></Button>
        </PopUserSet>
    )
}

export default PopUser