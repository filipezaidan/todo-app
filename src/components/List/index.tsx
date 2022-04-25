import * as S from './styles'

import { useContext } from 'react'
import { TodoContext } from '../../contexts/Todo'
import { ITodo } from '../../@types/Todo'

function List() {
    const { todos, delTodo } = useContext(TodoContext)
    console.log("todos:", todos)



    return (
        <S.Container>
            {todos.map((todo: ITodo) => (
                <S.ItemList key={todo.id}>
                    <div>
                        <S.Checked type='checkbox' />
                        <S.Title>{todo.title}</S.Title>
                    </div>
                    <S.CloseButton onClick={() => delTodo(todo.id)} />
                </S.ItemList>
            ))}

        </S.Container>
    )
}

export default List