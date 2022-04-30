import styled from "styled-components";
import { IoIosClose as IClose } from 'react-icons/io';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 25px;
    box-shadow: 0px 10px 26px -17px #000000;
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
export const WrapperItem = styled.div` 
    display: flex;
    align-items: center;
    padding: 5px; 
    gap: 20px; 
`
export const Title = styled.span`
    font-size: 18px;
    color: ${(props: { select: boolean }) => props.select ? '#757575' : '#000'};
    font-weight: 400;
    text-decoration: ${(props: { select: boolean }) => props.select ? 'line-through' : 'none'};
`
export const Checked = styled.input.attrs({ type: 'checkbox' })`
    position: relative;

    &::before{
    content: "";
    cursor: pointer;
    position: absolute;
    height: 23px;
    width: 23px;
    background-color: #fafafa;
    border: 1px solid  #757575;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    }

    &:checked::before{
        background: linear-gradient(120deg,hsl(192, 100%, 67%),hsl(280, 87%, 65%));
        border: 1px #fafafa;
    }

    &:checked::after{
    position: absolute;
    content: '✔'; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
}
`
export const CloseButton = styled(IClose)`
    width: 30px;
    height: 30px;
    cursor: pointer;
    color: #5e5d6b;
`