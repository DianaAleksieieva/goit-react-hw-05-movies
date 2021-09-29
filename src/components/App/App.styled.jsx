import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

export const Container = styled.div`
padding:50px;
`;

export const Header = styled.ul`
margin:0;
display:flex;
padding-inline-start:0px;
list-style-type: none;
padding:20px;
padding-left: 40px;
box-shadow:2px 10px 4px -7px rgba(34, 60, 80, 0.16);
`

export const PageHeader = styled.ul`
padding:0;
margin:0;
font-size:24px;
font-weight:500`

export const StyledLink = styled(Link)`
margin:0px;
padding-right:15px;
font-size:18px;
color:black;
font-weight:500;
&:focus, &:hover, &:link, &:active {
        color: #008B8B`
