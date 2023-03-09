import { Send } from "@material-ui/icons"
import styled from "styled-components"
import { mobile } from "../Responsive"


const Container = styled.div`
    height: 60vh;
    background-color: #dcdcde;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({ textAlign: "center"})}
`

const InputContainer = styled.form`
    width: 50%;
    height: 40px;
    background-color: #dcdcdc;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
    ${mobile({ width: "80%" })}
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #00FF40;
`

const Newsletter = () => {






  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite local artist!</Desc>
        <InputContainer>
            <Input placeholder="Your email"/>
            <Button type="submit">
                <Send/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter