import styled from "styled-components";

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
    justify-content: space-between;
    width: 100%;
    height: 55px;
    background: #fff;
    padding: 20px;
    border-radius: 5px 5px 0px 0px;
    border-bottom: 2px solid #d9d9d9;

`

export const Title = styled.span`
    font-size: 21px;
    color: #000;
    font-weight: 400;


`