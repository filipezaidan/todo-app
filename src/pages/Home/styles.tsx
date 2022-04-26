import styled from 'styled-components';
import img from '../../assets/bg-desktop-light.jpg'

export const Container = styled.div`
    height: 300px;
    width: 100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
`
export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 70px 450px 0 450px;

    @media screen and (max-width:1300px) {
        padding: 70px 200px 0 200px;
    }

    @media screen and (max-width:992px) {
        padding: 70px 150px 0 150px;
    }

    @media screen and (max-width:768px) {
        padding: 70px 80px 0 80px;
    }

    @media screen and (max-width:576px) {
        padding: 70px 50px 0 50px;
    }

    @media screen and (max-width:478px) {
        padding: 70px 20px 0 20px;
    }

    @media screen and (max-width:375px) {
        padding: 70px 20px 0 20px;
    }
`
