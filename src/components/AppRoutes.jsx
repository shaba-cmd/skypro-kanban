import PageNewCard from '../pages/PageNewCard/PageNewCard'
import PageBrowse from '../pages/PageBrowse/PageBrowse'
import PageMain from '../pages/PageMain/PageMain'
import PageExit from '../pages/PageExit/PageExit'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function AppRoutes({ isAuth, handleLogout, handleAuth }) {
    const [task, setTask] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path='/' element={
                    <PageMain 
                        loading={loading} 
                        setLoading={setLoading} 
                        token={isAuth.token} 
                        setTask={setTask}
                        tasks={tasks}
                        setTasks={setTasks}
                    />}>
                        <Route path='/card/add' element={
                            <PageNewCard 
                                loading={loading} 
                                setLoading={setLoading} 
                                token={isAuth.token}
                                setTasks={setTasks}
                            />} 
                        />
                        <Route path='/card/:id' element={
                            <PageBrowse 
                                task={task} 
                                token={isAuth.token} 
                                loading={loading} 
                                setLoading={setLoading} 
                                setTasks={setTasks}
                            />} />
                        <Route path='/exit' element={<PageExit handleLogout={handleLogout} />} />
                </Route>
            </Route>
            <Route path='/sign-in' element={<SignInPage handleAuth={handleAuth} />} />
            <Route path='/sign-up' element={<SignUpPage handleAuth={handleAuth} />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes
