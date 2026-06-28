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
            <Button to='/exit'>Выйти</Button>
        </PopUserSet>
    )
}

export default PopUser