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
            <Button type="button"><a href="#popExit">Выйти</a></Button>
        </PopUserSet>
    )
}

export default PopUser