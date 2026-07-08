import { PopUserSet, Name, Mail, Theme, Button } from "./PopUser.styled"

function PopUser ({ user }) {
    return (
        <PopUserSet>
            <Name>{user.name}</Name>
            <Mail>{user.login}</Mail>
            <Theme>
                <p>Темная тема</p>
                <input type="checkbox" name="checkbox" />
            </Theme>
            <Button to='/exit'>Выйти</Button>
        </PopUserSet>
    )
}

export default PopUser