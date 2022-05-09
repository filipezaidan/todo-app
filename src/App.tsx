//Libraries
import { useEffect, useState } from "react";
//Pages 
import Home from "./pages/Home"
//Components
import { ThemeProvider } from 'styled-components';
//Contexts
import TodoProvider from "./contexts/Todo"
//Styles
import { GlobalStyle } from "./styles/global"
import themes from './styles/themes'


function App() {
  const [theme, setTheme] = useState('light')

  const handleToggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light")
  }

  return (
    <TodoProvider>
      <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
        <GlobalStyle />
        <Home setTheme={handleToggleTheme} />
      </ThemeProvider>

    </TodoProvider>
  )
}

export default App
