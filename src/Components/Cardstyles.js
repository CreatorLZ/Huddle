import styled from "styled-components";

export const StyledCard = styled.div`
display: flex;
align-items: center;
background-color:${({theme}) => theme.colors.body}; 
border-radius: 15px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
margin: 40px 0;
padding: 60px;
flex-direction: ${({layout}) => layout || 'row'};

img{
    width:80%;
}

& > div{
    flex:1;
}
h2 {
    margin-bottom: 10px;
}

@media (max-width: ${({theme}) => theme.mobile}){
    flex-direction: column;
}
`;