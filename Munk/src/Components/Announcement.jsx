import styled from "styled-components"
import { mobile } from "../Responsive"

const Container = styled.div`
    height: 30px;
    background-color: Black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    ${mobile({ display: "none" })}
`


const Announcement = () => {
  return (
    <Container>

        New Show Alert! --- February 10th at the Brauer House in Lombard, IL! --- Start Time: 8:30 PM! --- Visuals by BECREATIVE!

    </Container>
  )
}

export default Announcement