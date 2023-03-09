import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import {mobile} from "../Responsive"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 60px;
    // border-bottom: 2px inset black; 
    // background-color: black;
    border-bottom: 5px solid rgba(0, 0, 9, 1);
    ${mobile({ height: "50px" })}
`

const Wrapper = styled.div`
    padding: 10px 20px 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`

const Left = styled.div`
    flex:1; 
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px" })}
`

const Center = styled.div`
    flex:1; 
    text-align: center;
    text-decoration: none;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({ fontSize: "15px", marginLeft: "40px"})}
`

const Right = styled.div`
    flex:1; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)

    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{color: "gray", fontSize: 16}}/>
                    </SearchContainer>
                </Left>
                <Link to="/" style={{ textDecoration: "none", color: "black"}}>
                <Center>
                    <Logo>
                        {/* <img src='https://i.imgur.com/yyL7X7D.png' className='navbarLogo1' alt="Munk Music" style={{ height: "75px", width: "125px", paddingTop: "0px"}}></img> */}
                        MUNK MUSIC
                    </Logo>
                </Center>
                </Link>
                <Right>
                    <Link to="/" style={{ textDecoration: "none", color: "black"}}>
                        <MenuItem>HOME</MenuItem>
                    </Link>
                    <Link to="/products" style={{ textDecoration: "none", color: "black"}}>
                        <MenuItem>SHOP</MenuItem>
                    </Link>
                    <Link to="/shows" style={{ textDecoration: "none", color: "black"}}>
                        <MenuItem>SHOWS</MenuItem>
                    </Link>
                    <Link to="/cart">
                    <MenuItem>
                        <Badge badgeContent={quantity} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar