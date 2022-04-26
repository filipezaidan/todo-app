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

    &:last-child {
        border-radius: 0px 0px 5px 5px ;
    }  
`
export const WrapperItem = styled.div``
export const Title = styled.span`
    font-size: 18px;
    color: ${(props: { select: boolean }) => props.select ? '#757575' : '#000'};
    font-weight: 400;
    text-decoration: ${(props: { select: boolean }) => props.select ? 'line-through' : 'none'};
`
export const Checked = styled.input.attrs({ type: 'checkbox' })`
`
export const CloseButton = styled(IClose)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #5e5d6b;
`