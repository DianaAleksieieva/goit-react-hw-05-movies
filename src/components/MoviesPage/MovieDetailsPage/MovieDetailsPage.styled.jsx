import styled from '@emotion/styled'
import { Link } from 'react-router-dom';

export const MoreInfoNav = styled.ul`
display: flex;
margin:0px;
padding-right:15px;
font-size:18px;
color:black;
font-weight:500;
&:focus, &:hover, &:link, &:active {
        color: #008B8B`

export const MoreInfoNavItem = styled(Link)`
margin:0px;
padding-right:15px;
font-size:18px;
color:black;
font-weight:500;
&:focus, &:hover, &:link, &:active {
        color: #008B8B`

export const PageHeader = styled.ul`
padding:0;
margin:0;
margin-bottom:20px;
font-size:24px;
font-weight:500`