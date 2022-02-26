import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled.div`
height: 70px;
min-width: 100%;
width: 100%;

`;

export const Wrapper = styled.div`
padding: 10px 70px;
display: flex;
align-items: center;

`;

export const LogoContainer = styled(Link)`
flex: 1;
`

export const OptionsLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;

& + & {
    background-color: aqua;
}
`

export const OptionsContainer = styled.div`
flex: 1;
display: flex;
align-items:center;
justify-content: space-between;

`