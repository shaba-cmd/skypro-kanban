import AppRoutes from './components/AppRoutes'
import { GlobalStyle } from './GlobalStyle.styled'
import Header from './components/Header/Header'
import { Wrapper } from './App.styled'
import { useEffect, useState } from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(() => { //token получаем из isAuth.token
    const auth = localStorage.getItem('userData');
    return auth ? JSON.parse(auth) : null;
  });

  const handleAuth = (formData) => {
    setIsAuth(formData);
  };

  const handleLogout = () => {
    setIsAuth(null);
  };

  useEffect(() => {
    if (isAuth) {
      localStorage.setItem('userData', JSON.stringify(isAuth));
    } else {
      localStorage.removeItem('userData');
    }
  }, [isAuth]);

  return (
    <>
      <GlobalStyle />
      
      <Wrapper>        
        {isAuth && <Header user={isAuth}/>}
        <AppRoutes isAuth={isAuth} handleLogout={handleLogout} handleAuth={handleAuth}/>
      </Wrapper>
    </>
  )
}

export default App
