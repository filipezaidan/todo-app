import * as S from './styles'
import { GiCircle as Circle } from 'react-icons/gi'
import { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from '../../contexts/Todo'

function Input() {
    const { addTodo } = useContext<TodoContextType>(TodoContext);
    const [todo, setTodo] = useState<string>('');


    const handleInputKey = (e: any) => {
        if (e.keyCode === 13) {
            addTodo(todo)
            setTodo('')
        }
    }

    return (
        <S.Container>
            <Circle color="#d9d9d9" size={25} />

            <S.InputCustom
                placeholder="Create a new todo..."
                value={todo}
                onChange={e => setTodo(e.target.value)}
                onKeyUp={handleInputKey}
            />
        </S.Container>
    )
}

export default Input