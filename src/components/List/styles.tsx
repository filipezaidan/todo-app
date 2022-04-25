import styled from "styled-components";
import { IoIosClose as IClose } from 'react-icons/io'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 25px;
    box-shadow: rgba(0, 0, 0,0.2);
`
export const ItemList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 55px;
    background: #fff;
    padding: 20px;
    border-bottom: 1px solid #e6e5ea;

    &:first-child {
        border-radius: 5px 5px 0px 0px;
    }  

    /* &:hover {
        cursor: pointer;
    } */
`
export const Title = styled.span`
    font-size: 21px;
    color: #000;
    font-weight: 400;
`

export const Checked = styled.input`
    

`

export const CloseButton = styled(IClose)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #5e5d6b;
`