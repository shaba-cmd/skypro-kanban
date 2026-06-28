import { Outlet } from "react-router-dom"
import Main from "../../components/Main/Main"

const PageMain = ({ loading, card }) => {
  return (
    <>
      <Main loading={loading} card={card}/>
      <Outlet />
    </>
  )
}

export default PageMain