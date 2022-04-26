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
    /* width: 100%; */
    white-space: nowrap;
    
    font-size: 1rem;
    color: #757575;

    @media screen and (max-width:992px){
        font-size: 0.9rem;
    }


    @media screen and (max-width:576px){
        font-size: 0.8rem;
    }

`
export const ButtonWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
    width: 100%;


   
`

export const Button = styled.button<IButton>`
    display: inline-block;
    border: none;
    outline: none;
    background: transparent;
    font-size: 1rem;
    font-weight: 700;
    color: ${({ selected }) => selected ? "hsl(220, 98%, 61%)" : "#757575"};

    @media screen and (max-width:992px){
        font-size: 0.9rem;
    }

    @media screen and (max-width:576px){
        font-size: 0.8rem;
    }

    @media screen and (max-width:468px){
        font-size: 0.75rem;
    }

    &:hover{
        cursor: pointer;

    }
`