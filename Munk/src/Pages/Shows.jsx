import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Gallery from '../Components/Gallery'
import styled from "styled-components"

const Container = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dcdcde;
`

const Title = styled.h1`
    font-size: 100px;
    margin-top: 20px;
    margin-bottom: 0px;
`

const Shows = () => {



  return (
    <>
    <Navbar/>
    <Container>
    <Title>Gallery</Title>
    </Container>
    <Gallery/>
    <Footer/> 
    </>
  )
}

export default Shows