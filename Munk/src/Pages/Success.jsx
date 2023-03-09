import { useLocation } from "react-router-dom"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import styled from "styled-components"

const Container = styled.div`
height: 60vh;
background-color: #dcdcde;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Success = () => {
    const location = useLocation()

    console.log(location)
    return(
        <>
        <Navbar/>
        <Container>
            
                <h1 style={{height: "10vh", fontSize: "60px"}}>Order Successful!</h1>
                <img src='https://i.imgur.com/yyL7X7D.png' className='navbarLogo1' alt="Munk Music" style={{ height: "10vh", width: "125px", display: "flex", alignItems: "center", justifyContent: "center" , paddingTop: "0"}}></img>
                <h3>Thanks for shopping with Munk Music. We have sent you an email regarding your order details!</h3>
        </Container>
        <Footer/>
        </>
    )
}

export default Success