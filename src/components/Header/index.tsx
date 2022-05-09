import * as S from './styles'
import { IoMdMoon } from 'react-icons/io'

interface HeaderProps {
    setTheme: () => void
}

function Header({ setTheme }: HeaderProps) {
    return (
        <S.Container>
            <S.Title>T O D O</S.Title>
            <S.ToogleThemeButton onClick={setTheme}>
                <IoMdMoon
                    size={25}
                    color='#fff'

                />
            </S.ToogleThemeButton>
        </S.Container>
    )
}

export default Header