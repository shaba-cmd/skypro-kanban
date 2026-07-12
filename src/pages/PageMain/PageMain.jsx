import { Outlet } from "react-router-dom"
import Main from "../../components/Main/Main"

const PageMain = () => {
  return (
    <>
      <Main />
      <Outlet />
    </>
  )
}

export default PageMain