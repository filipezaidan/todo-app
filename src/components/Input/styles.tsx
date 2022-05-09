import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;
    width: 100%;
    height: 55px;
    border-radius: 5px;
    border: none;
    background: ${({ theme }) => theme.colors.primary};
    padding: 10px 20px;
    box-shadow: 0px 10px 26px -17px #000000;
`
export const InputCustom = styled.input`
    border: none;
    color: ${({ theme }) => theme.colors.text};
    height: 100%;
    width: 100%;
    font-size: 20px;
    outline: none;
    background: transparent;
    ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
     }
    
`