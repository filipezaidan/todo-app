import styled from "styled-components";
import img from '../../assets/bg-desktop-light.jpg'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    
`

export const Title = styled.h1`
    color: #fff;
    height: 100%;
    width: 100%;
    font-size: 42px;
    font-weight: bold;
`
export const ToogleThemeButton = styled.button`
    border: 0;
    outline: none;
    width: 40px;
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    &:hover{ 
        transform: scale(1.2);
        transition: all 0.2 ease-in-out;
    }
`
