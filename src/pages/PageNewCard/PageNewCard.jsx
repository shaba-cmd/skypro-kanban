import PopNewCard from "../../components/PopNewCard/PopNewCard"

const PageNewCard = ({ loading, setLoading, token, setTasks }) => {
  return <PopNewCard 
    loading={loading} 
    setLoading={setLoading} 
    token={token} 
    setTasks={setTasks}
  />;
}

export default PageNewCard