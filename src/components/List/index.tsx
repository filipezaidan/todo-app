import * as S from './styles'

import { useContext } from 'react'
import { TodoContext } from '../../contexts/Todo'
import { ITodo, TodoContextType } from '../../@types/Todo'
import ControllerList from '../ControllerList'

function List() {
    const { filterTodos, delTodo, updateTodo } = useContext<TodoContextType>(TodoContext)

    return (
        <S.Container>
            {filterTodos.map(({ id, title, status }: ITodo) => (
                <S.ItemList key={id}>
                    <S.WrapperItem>
                        <S.Checked id={id.toString()} onClick={() => updateTodo(id)} checked={status} />
                        <S.Title select={status}>{title}</S.Title>
                    </S.WrapperItem>

                    <S.CloseButton onClick={() => delTodo(id)} />
                </S.ItemList>
            ))}
            <ControllerList />
        </S.Container>
    )
}

export default List