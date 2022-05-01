//Pages 
import Home from "./pages/Home"
//Contexts
import TodoProvider from "./contexts/Todo"

function App() {
  return (

    <TodoProvider>
      <Home />
    </TodoProvider>
  )
}

export default App
