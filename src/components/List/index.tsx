import * as S from './styles'

import { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { TodoContext } from '../../contexts/Todo'
import { ITodo, TodoContextType } from '../../@types/Todo'
import ControllerList from '../ControllerList'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { resetServerContext } from "react-beautiful-dnd"

function List() {
    const { filterTodos, delTodo, updateTodo } = useContext<TodoContextType>(TodoContext)
    const [todos, setTodos] = useState<ITodo[]>(filterTodos)


    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setTodos(items);
    }

    useEffect(() => {
        setTodos(filterTodos)
        resetServerContext()
    }, [filterTodos])
    return (
        <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
            <Droppable droppableId={String(todos)}>
                {(provided) => (
                    <S.Container
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {todos.map(({ id, title, status }: ITodo, index) => (
                            <Draggable key={id.toString()} draggableId={id.toString()} index={index}>
                                {(provided) => (
                                    <S.ItemList ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                        <S.WrapperItem>
                                            <S.Checked id={id.toString()} onClick={() => updateTodo(id)} checked={status} />
                                            <S.Title select={status}>{title}</S.Title>
                                        </S.WrapperItem>

                                        <S.CloseButton onClick={() => delTodo(id)} />
                                    </S.ItemList>
                                )}
                            </Draggable>
                        ))}
                        <ControllerList />
                        {provided.placeholder}
                    </S.Container>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default List