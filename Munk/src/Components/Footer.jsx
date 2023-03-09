import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../Responsive"
import { Link } from 'react-router-dom'

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1`
    display: flex;
    align-items: center;

`

const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%; 
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>
                MUNK MUSIC
                <img src='https://i.imgur.com/yyL7X7D.png' className='navbarLogo1' alt="Munk Music" style={{ height: "75px", width: "125px", display: "flex", alignItems: "center", justifyContent: "center" }}></img>
            </Logo>
            <Desc>
                Local artist looking to make an impact on the ever-growing scene. With a bald head, and a fully-grown imagination, 
                there is no limit to the heights that Munk can reach. Only time will tell if this alien-specimen truly came from this planet.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="FF7700">
                    <iframe title="soundcloud logo" allowtransparency="true" 
                    frameborder="no" 
                    src="https://w.soundcloud.com/icon/?url=http%3A%2F%2Fsoundcloud.com%2Fofficialmunkmusic&color=white_transparent&size=32" 
                    style={{width: "32px", height: "32px"}}></iframe>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>
                <Link to="/" style={{ textDecoration: "none", color: "black"}}>
                    Home
                </Link>
                </ListItem>
                <ListItem>
                <Link to="/cart" style={{ textDecoration: "none", color: "black"}}>
                    Cart
                </Link>
                </ListItem>
                <ListItem>
                <Link to="/products" style={{ textDecoration: "none", color: "black"}}>
                    Apparel
                </Link>
                </ListItem>
                <ListItem>
                <Link to="/shows" style={{ textDecoration: "none", color: "black"}}>
                    Gallery
                </Link>
                </ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem> 
                <Room style={{marginRight: "10px"}}/> Chicago, IL 60606
            </ContactItem>
            <ContactItem> 
                <Phone style={{marginRight: "10px"}}/> (847) 219-1520
            </ContactItem>
            <ContactItem> 
                <MailOutline style={{marginRight: "10px"}}/> munkmusicproductions@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer