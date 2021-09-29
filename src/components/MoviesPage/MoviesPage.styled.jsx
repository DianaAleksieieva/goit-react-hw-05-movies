import styled from '@emotion/styled'
import { Link } from 'react-router-dom';


export const PageHeader = styled.ul`
padding:0;
margin:0;
margin-bottom:20px;
font-size:24px;
font-weight:500`

export const StyledLink = styled(Link)`
font-size:16px;
color:black;
font-weight:400;

&:focus, &:hover {
        color: #008B8B`

export const FilmInfo = styled(Link)`
justify-content: center;
display: flex;
flex-wrap:wrap`

export const Img = styled.img`
margin-top:50px;
display:block`