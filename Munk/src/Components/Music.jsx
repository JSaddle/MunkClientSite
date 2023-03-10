import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: #dcdcdc;
  display: flex;
  flex-direction: column;
`
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  font-size: 100px;
  margin-top: 0px;
  margin-bottom: 10px;

`

const Music = () => {
  return (
    <Container>
      <TitleContainer>
      <Title>NEW MUSIC</Title>
      </TitleContainer>
    <div alignItems="center" justifyContent="center">
    <iframe width="100%" 
        height="166" 
        scrolling="no" 
        frameborder="no" 
        allow="autoplay"
        backgroundColor="#dcdcdc" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1443580240&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true">
  </iframe>
    </div >
    </Container>
  )
}

export default Music