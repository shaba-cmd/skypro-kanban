import PageNewCard from '../pages/PageNewCard/PageNewCard'
import PageBrowse from '../pages/PageBrowse/PageBrowse'
import PageMain from '../pages/PageMain/PageMain'
import PageExit from '../pages/PageExit/PageExit'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route path='/' element={<PageMain />}>
                        <Route path='/card/add' element={<PageNewCard />} />
                        <Route path='/card/:id' element={<PageBrowse />} />
                        <Route path='/exit' element={<PageExit />} />
                </Route>
            </Route>
            <Route path='/sign-in' element={<SignInPage />} />
            <Route path='/sign-up' element={<SignUpPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
    )
}

export default AppRoutes
