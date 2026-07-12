import { useState } from "react";
import { AuthContext, TaskContext, ThemeContext, LoadingContext } from "./ContextAPI";

export function AuthProvider ({ children }) {
    const [user, setUser] = useState(() => {
        const auth = localStorage.getItem('userData');
        return auth ? JSON.parse(auth) : null;
    })

    const login = (formData) => {
        setUser(formData)
        localStorage.setItem('userData', JSON.stringify(formData));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('userData');
    };

    return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function TasksProvider ({ children }) {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState([])

    return (
    <TaskContext.Provider value={{ tasks, setTasks, task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function ThemeProvider ({ children }) {
    const [theme, setTheme] = useState('light')

    return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function LoadingProvider ({ children }) {
    const [loading, setLoading] = useState(true)

    return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}
