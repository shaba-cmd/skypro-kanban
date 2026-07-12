import { Navigate, Outlet } from "react-router-dom"
import { AuthContext } from "../context/ContextAPI"
import { useProvider } from "../hooks/useProvider"

const PrivateRoute = () => {
  const { user } = useProvider(AuthContext)

  return user ? <Outlet /> : <Navigate to='/sign-in'/>
}

export default PrivateRoute