import styled from "styled-components";

export const StyledFooter = styled.footer`
background-color: ${({theme}) => theme.colors.footer};
color: #fff;
padding: 100px 0 60px;
position: relative;
ul {
    list-style-type: none;
}

ul li {
    margin-bottom: 20px;
    
}

p {
    text-align: right;
}


@media (max-width: ${({theme}) => theme.mobile}) {
    text-align: center;
    ul{
        padding: 0;
        p {
            text-align: center;
        }
    }
}

`
export const Footercard = styled.div`
padding: 50px;
text-align: center;
color: #333;
background-color: #fff;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
align-items: center;
justify-content: center;
flex-direction: column;
position: absolute;
top:-80px;
left: 450px;
margin: auto;
border-radius: 10px;
h2 {
    font-weight: 700;
    margin-bottom: 10px;
}
`