import styled from 'styled-components';
import img from '../../assets/bg-desktop-light.jpg'


export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 75px 600px 0 600px;
    height: 100vh;
    background:#fafafa;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 300px;
`
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    /* background: blue; */
`
