import PageNewCard from '../pages/PageNewCard/PageNewCard'
import PageBrowse from '../pages/PageBrowse/PageBrowse'
import PageMain from '../pages/PageMain/PageMain'
import PageExit from '../pages/PageExit/PageExit'
import SignInPage from '../pages/SignInPage/SignInPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import CleanLayout from './CleanLayout'
import MainLayout from './MainLayout'
import { useProvider } from '../hooks/useProvider'
import { AuthContext } from '../context/ContextAPI'

function AppRoutes() {
    const { user } = useProvider(AuthContext)
    
    return (
        <Routes>
            <Route element={<PrivateRoute />}>
                <Route element={<MainLayout />}>
                    <Route path='/' element={<PageMain />}>
                        <Route path='/card/add' element={<PageNewCard />} />
                        <Route path='/card/:id' element={<PageBrowse />} />
                        <Route path='/exit' element={<PageExit />} />
                    </Route>
                </Route>
            </Route>    
            
            <Route element={<CleanLayout />}>
                { user === null && <Route path='/sign-in' element={<SignInPage />} />}
                { user === null && <Route path='/sign-up' element={<SignUpPage />} />}
                <Route path='*' element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes
