import AppRoutes from './components/AppRoutes'
import { GlobalStyle, Wrapper } from './GlobalStyle.styled'
import Header from './components/Header/Header'
import { useProvider } from './hooks/useProvider'
import { AuthContext, ThemeContext } from './context/ContextAPI'
import { useEffect } from 'react'

function App() {
  const { user } = useProvider(AuthContext)
  const { theme, setTheme } = useProvider(ThemeContext)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
      if (savedTheme) {
        setTheme(savedTheme)
      }
  }, [])

  return (
    <>
      <GlobalStyle theme={theme}/>
      
      <Wrapper>    
        {user && <Header />}
        <AppRoutes />
      </Wrapper>
    </>
  )
}

export default App
