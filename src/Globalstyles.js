import styled, { createGlobalStyle } from "styled-components";

const Globalstyles = createGlobalStyle`
 *{
   box-sizing: border-box;
   margin: 0;
   font-family: 'Poppins', sans-serif;
   font-family: 'Open Sans', sans-serif;

 }

 p {
    line-height: 1.5;
    opacity: 0.6;
 }

`

export const Container = styled.div`
	width: 100%;
	max-width: 1330px;
	margin: 0 auto;
	padding: 0 20px;
 
`;

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 40px;


`;

export const Logo = styled.img`
@media (max-width: ${({theme}) => theme.mobile}){
width: 100px;

} 
`;

export const Button = styled.button`
border-radius: 50px;
border: none;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
cursor: pointer;
font-style: 16px;
font-weight: 700;
padding: 15px 60px;
background-color: ${({bg}) => (bg ? 'hsl(322, 100%, 66%)' : '#fff')} ;
color: ${({color}) => (color ? '#333' : '#fff')} ;

&:hover{
    transform: scale(0.98);
};

@media (max-width: ${({theme}) => theme.mobile}){
 
    padding: 10px 15px;
} 
`;


export const Flex = styled.div`
display: flex;
align-items: center;

& > div,
& > ul {
    flex: 1;
};

p {
    font-weight: 400;
}



@media (max-width: ${({theme}) => theme.mobile}){
   flex-direction: column;

} 
`;

/*
Flex
button
container
*/

export default Globalstyles