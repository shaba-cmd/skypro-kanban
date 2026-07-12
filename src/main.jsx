import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { AuthProvider, LoadingProvider, TasksProvider, ThemeProvider} from './context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <LoadingProvider>
        <ThemeProvider>
          <TasksProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </TasksProvider>
        </ThemeProvider>
      </LoadingProvider>
    </AuthProvider>
  </StrictMode>,
)
