//Components
import Header from '../../components/Header'
import Input from '../../components/Input'
import List from '../../components/List'
//Styles
import * as S from './styles'

interface HomeProps {
    setTheme: () => void
}

function Home({ setTheme }: HomeProps) {
    return (
        <S.Container>
            <S.Wrapper>
                <Header setTheme={setTheme} />
                <Input />
                <List />
            </S.Wrapper>
        </S.Container>
    )
}

export default Home