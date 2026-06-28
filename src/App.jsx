import './App.css'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import PopExit from './components/PopExit/PopExit'
import { useEffect, useState } from 'react'
import { GlobalStyle } from './GlobalStyle.styled'
import { Wrapper } from './App.styled'

function App() {
  const [loading, setLoading] = useState(true) 

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 2000)
  }, [])

  return (
    <>
      <GlobalStyle />

      <Wrapper>        
        <Header />
        <PopExit />
        <PopNewCard />
        <PopBrowse />
        <Main 
          loading={loading}
        />
      </Wrapper>
    </>
  )
}

export default App
