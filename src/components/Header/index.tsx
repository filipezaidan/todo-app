import * as S from './styles'
import { IoMdMoon } from 'react-icons/io'

function Header() {
    return (
        <S.Container>
            <S.Title>T O D O</S.Title>
            <S.ToogleThemeButton>
                <IoMdMoon size={25} color='#fff' />
            </S.ToogleThemeButton>
        </S.Container>
    )
}

export default Header