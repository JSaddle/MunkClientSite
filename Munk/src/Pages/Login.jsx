import { useState } from "react"
import styled from "styled-components"
import { login } from "../Redux/apiCalls"
import { mobile } from "../Responsive"
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://i.imgur.com/yyL7X7D.png") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({ width: "75%" })}

`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;

`

const Button = styled.button`
    width: 40%
    border: none;
    padding: 15px 30px;
    background-color: #00FF40;
    cursor: pointer;
    margin-bottom: 10px;
    &:disabled{
        color: #00FF40;
        cursor: not-allowed;
    }
`
const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Error = styled.span`
    color: red;
`

const Login = () => {
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const dispatch = useDispatch()

    const { isFetching, error } = useSelector((state) => state.user);

    const handleClick = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }

    const user = useSelector((state) => state.user.currentUser)

  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            {user && (
                <Navigate to="/"></Navigate>
            )}
            <Form>
                <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}/>
                <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                {error && <Error>Something went wrong...</Error>}
                <Link>FORGOT PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login