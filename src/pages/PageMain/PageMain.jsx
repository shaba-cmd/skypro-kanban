import { Outlet } from "react-router-dom"
import Main from "../../components/Main/Main"

const PageMain = ({ loading, setLoading, token, setTask, tasks, setTasks }) => {
  return (
    <>
      <Main 
        loading={loading} 
        setLoading={setLoading} 
        token={token} 
        setTask={setTask}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Outlet />
    </>
  )
}

export default PageMain