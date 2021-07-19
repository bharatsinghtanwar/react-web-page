import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
 background: #1123ff;
 height: 80px;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 1rem;
 position: sticky;
 top: 0;
 z-index: 10;

 @media screen and (max-width: 960px){
     transition: 0.8s all ease;
 }

`
export const NavbarContainer = styled.div`
 display: flex;
 align-self: center;
 list-style: none;
 text-align: center;
 align-items: center;
 justify-content: space-between;
 height: 80px;
 z-index: 1;
 width: 100%;
 padding: 0 24px;
 max-width: 1300px;
 `

export const NavLogo = styled(LinkR)`
 color: #fff;
 justify-self: flex-start;
 cursor: pointer;
 font-size: 1.5rem;
 display: flex;
 align-items: center;

 font-weight: bold;
 text-decoration: none;
 text-transform: uppercase;
 font-family: 'Times New Roman', Times, serif;
 
 

`

export const MobileIcon = styled.div`
 display: none;

 @media screen and (max-width: 760px){
     display: block;
     position: absolute;
     top: 0;
     right: 0;
     transform: translate(-100%, 60%);
     font-size: 1.6rem;
     cursor: pointer;

 }
`
export const NavManu  = styled.ul`
 
 display: flex;
 align-self: center;
 list-style: none;
 text-align: center;
 margin-right: -22px;


 @media screen and (max-width: 760px){
    display: none !important;
 }
`

export const NavItems = styled.li`
 height:80px;
 
`
export const NavLinks = styled(LinkS)`
 color: #fff;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding : 0 1rem;
 height : 100%;
 cursor: pointer;
 justify-content: space-between;
 text-transform: uppercase;
 margin-right: 20px;
 font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

 @media screen and (max-width: 760px){
    display: none !important;
 }
 

 &.active{
     border-bottom: 3px solid #01bf72;
 }
 
`

export const Btn = styled.button`

 
 display: flex;
 
 background-color: rgba(255,255,255, 0.2);
 border-radius: 16.5px;
 outline: none;
 color: white;
 align-items: center;
 padding-right: 9px;
 padding-left: 14px;
 padding-top: 3px;
 padding-bottom: 3px;
 border: none;

 :hover{
    background-color: rgba(255,255,255, 0.3);
 }
 @media screen and (max-width:768px){
     display: none;
 }
 
`
export const BtnText = styled.text`
font-size: 1rem;
text-transform: uppercase;
text-decoration: none;
padding-right: 5px;
padding-bottom: 1px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

`