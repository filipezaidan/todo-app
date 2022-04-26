import { useContext, useEffect, useState } from 'react'
import { TodoContextType, ITodo } from '../../@types/Todo';
import { TodoContext } from '../../contexts/Todo'
import * as S from './styles'

function ControllerList() {
    const { todos, filterTodos, filterTodo, clearTodoCompleted } = useContext<TodoContextType>(TodoContext);
    const [select, setSelect] = useState<string>('All')

    const handleSetButton = (controller: string) => {
        filterTodo(controller);
        setSelect(controller);
    };


    return (
        <>
            {todos.length > 0 &&

                <S.Container>
                    <S.Text>{filterTodos.length > 1 ? `${filterTodos.length} items left` : `${filterTodos.length} item left`} </S.Text>

                    <S.ButtonWrapper>
                        <S.Button selected={select === 'All'} onClick={() => handleSetButton('All')}>All</S.Button>
                        <S.Button selected={select === 'Active'} onClick={() => handleSetButton('Active')}>Active</S.Button>
                        <S.Button selected={select === 'Selected'} onClick={() => handleSetButton('Selected')}>Selected</S.Button>
                    </S.ButtonWrapper>

                    <S.ButtonWrapper>
                        <S.Button onClick={() => clearTodoCompleted()}>Clear Completed</S.Button>
                    </S.ButtonWrapper>
                </S.Container>
            }
        </>
    )
}

export default ControllerList


