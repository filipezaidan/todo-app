import * as S from './styles'

import { useContext } from 'react'
import { TodoContext } from '../../contexts/Todo'
import { ITodo } from '../../@types/Todo'



function List() {
    const { todos } = useContext(TodoContext)
    console.log("todos:", todos)

    return (
        <S.Container>
            {todos.map((todo: ITodo) => (
                <S.ItemList key={todo.id}>
                    <div>
                        <input type="checkbox"></input>
                        <S.Title>{todo.title}</S.Title>
                    </div>
                    <button type="button">X</button>
                </S.ItemList>
            ))}

        </S.Container>
    )
}

export default List