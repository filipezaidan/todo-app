import TodoProvider from "./contexts/Todo"
import Home from "./pages/Home"
import { DragDropContext } from 'react-beautiful-dnd'

function App() {
  return (

    <TodoProvider>
      <Home />
    </TodoProvider>
  )
}

export default App
