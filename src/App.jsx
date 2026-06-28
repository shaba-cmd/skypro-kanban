import AppRoutes from './components/AppRoutes'
import { GlobalStyle } from './GlobalStyle.styled'
import Header from './components/Header/Header'
import { Wrapper } from './App.styled'
import { useState } from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(true) 

  return (
    <>
      <GlobalStyle />
      
      <Wrapper>        
        <Header isAuth={isAuth}/>
        <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth}/>
      </Wrapper>
    </>
  )
}

export default App
