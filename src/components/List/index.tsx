import * as S from './styles'

function List() {
    return (
        <S.Container>
            <S.ItemList>
                <div>
                    <input type="checkbox"></input>
                    <S.Title> Acordar cedo</S.Title>
                </div>
                <button type="button">X</button>
            </S.ItemList>
        </S.Container>
    )
}

export default List