import React from 'react'
import styled from "styled-components"
import { useState } from 'react'
import { mobile } from "../Responsive"
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { galleryItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: white;
    position: relative;
    // border: 5px solid rgba(0, 0, 9, 0.5);
    overflow: hidden;
    ${mobile({ display: "none" })}
    
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-style: solid;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    // opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.galleryIndex * -100}vw);
    border-style: solid;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
    // border=style: outset;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    object-fit: cover;
    display: flex;
    align-items: center;
    justify-content: center; 
`

const Image = styled.img`
    height: 80%;
    width: 50vw;
    border-style: solid outset;
    border-width: 20px 10px;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

// const Title = styled.h1`
//     font-size: 70px;
// `
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`

const Gallery = () => {

    const [galleryIndex, setGalleryIndex] = useState(0)

    const handleClick = (direction) => {

        if (direction === "left") {
            setGalleryIndex(galleryIndex > 0 ? galleryIndex - 1 : 2)
        } else {
            setGalleryIndex(galleryIndex < 2 ? galleryIndex + 1 : 0)
        }
    };


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper galleryIndex={galleryIndex}>
                {galleryItems.map(item => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        {/* <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                        </InfoContainer> */}
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Gallery