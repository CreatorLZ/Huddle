import styled from "styled-components";

export const Styledheader = styled.div`
background: url(./images/bg-hero-desktop.svg);
background-size: cover;
padding: 40px 0;
font-family: 'Poppins', sans-serif;
object-fit: cover;
align-items: center;


@media (max-width: ${({theme}) => theme.mobile}){
   text-align: center;
   background: url(./images/bg-hero-mobile.svg);

} 
`;

export const Image = styled.img`
width: 375px;
margin-left: 40px;
 
@media (max-width: ${({theme}) => theme.mobile}){
   margin-top: 40px;
   max-width: 287px;
} 
`;
