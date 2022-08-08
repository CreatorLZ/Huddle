import React from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import content from '../Content'
import { Container } from '../Globalstyles'


const Homepage = () => {
  return (
    <>
    <Header/>
    <Container style={{padding:"90px 20px"}}>
    {content.map((item , index) => (
        <Card key={index} item={item}/>
    ))}
    </Container>
    <Footer />
    </>
  )
}

export default Homepage
