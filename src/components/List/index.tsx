//Libraries
import { useContext, useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
//Components
import ControllerList from '../ControllerList'
//Contexts
import { TodoContext } from '../../contexts/Todo'
//Interfaces
import { ITodo, TodoContextType } from '../../@types/Todo'
//Styles
import * as S from './styles'

function List() {
    const { filterTodos, delTodo, updateTodo, setTodos: setListTodos } = useContext<TodoContextType>(TodoContext)
    const [todos, setTodos] = useState<ITodo[]>(filterTodos)


    const handleOnDragEnd = (result: DropResult) => {
        if (!result.destination) return;

        const items = Array.from(todos);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setListTodos(items);
    }

    useEffect(() => {
        setTodos(filterTodos)
    }, [filterTodos])

    return (
        <DragDropContext onDragEnd={(e) => handleOnDragEnd(e)}>
            <Droppable droppableId={String(todos) || 'todoId'}>
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
                                            <S.Checked id={id.toString()} onChange={() => updateTodo(id)} checked={status} />
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

export default List;