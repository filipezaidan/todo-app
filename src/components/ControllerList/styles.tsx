import styled from "styled-components";

interface IButton {
    selected?: boolean;
}



export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 55px;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: #fff;
    border-radius: 0 0 5px 5px;
`
export const Text = styled.span`
    width: 100%;
    font-size: 16px;
    color: #757575;

`
export const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
`

export const Button = styled.button<IButton>`
    display: inline-block;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    font-weight: 700;
    color: ${({ selected }) => selected ? "hsl(220, 98%, 61%)" : "#757575"};

    &:hover{
        cursor: pointer;

    }
`