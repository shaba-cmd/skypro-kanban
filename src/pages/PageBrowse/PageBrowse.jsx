import PopBrowse from "../../components/PopBrowse/PopBrowse"

const PageBrowse = ({ task, token, loading, setLoading, setTasks }) => {
  return <PopBrowse
    task={task} 
    token={token} 
    loading={loading} 
    setLoading={setLoading}
    setTasks={setTasks}
  />;
}

export default PageBrowse