import AppRoutes from './components/AppRoutes'
import { GlobalStyle, Wrapper } from './GlobalStyle.styled'
import { useProvider } from './hooks/useProvider'
import { ThemeContext } from './context/ContextAPI'
import { useEffect } from 'react'

function App() {
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
        <AppRoutes />
      </Wrapper>
    </>
  )
}

export default App
