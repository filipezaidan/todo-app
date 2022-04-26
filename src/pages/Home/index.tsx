import ControllerList from '../../components/ControllerList'
import Header from '../../components/Header'
import Input from '../../components/Input'
import List from '../../components/List'
import * as S from './styles'

function Home() {
    return (
        <S.Container>
            <S.Wrapper>

                <Header />
                <Input />
                <List />
                <ControllerList />

            </S.Wrapper>
        </S.Container>
    )
}

export default Home