import { Image, Styledheader } from './Headerstyles'
import React from 'react'
import { Button, Container, Flex, Logo, Nav } from '../Globalstyles'
const Header = () => {
  return (
    <Styledheader>
    <Container>
      <Nav>
          <Logo src='./images/logo.svg' alt='logo'/>
          <Button  color>Try It Free</Button>
      </Nav>
      <Flex>
        <div>
            <h1 style={{marginBottom:"20px"}}>
            Build The Community Your Fans <br/> Will Love
            </h1>
            <p style={{marginBottom:"20px"}}>
            Huddle re-imagines the way we build communities. You have a <br/>
            voice, but so does your audience. 
            Create connections with <br/> your
             users as you engage in genuine discussion. 
            </p>
            <Button bg>Get Started For Free</Button>
        </div>
        <Image src='./images/illustration-mockups.svg' alt='' style={{flex:"1"}}/>
      </Flex>
    </Container>
    </Styledheader>
  )
}

export default Header
