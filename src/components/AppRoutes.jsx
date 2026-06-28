import PageNewCard from '../pages/PageNewCard/PageNewCard'
import PageBrowse from '../pages/PageBrowse/PageBrowse'
import PageMain from '../pages/PageMain/PageMain'
import PageExit from '../pages/PageExit/PageExit'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { useEffect, useMemo, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import { cardList } from '../data'

function AppRoutes({ isAuth, setIsAuth }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const { id } = useParams();
    const card = useMemo(
        () => cardList.find((c) => c.id === id) || {
            theme: "",
            title: "",
            date: "",
            status: "",
        },
        [id]
    )

    return (
        <Routes>
            <Route element={<PrivateRoute isAuth={isAuth}/>}>
                <Route path='/' element={<PageMain loading={loading} card={card} />}>
                    <Route path='/card/add' element={<PageNewCard />} />
                    <Route path='/card/:id' element={<PageBrowse card={card} />} />
                    <Route path='/exit' element={<PageExit />} />
                </Route>
            </Route>
            <Route path='/sign-in' element={<SignInPage setIsAuth={setIsAuth} />} />
            <Route path='/sign-up' element={<SignUpPage setIsAuth={setIsAuth} />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes
