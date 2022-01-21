import { Container, Navbar } from "react-bootstrap"
import logo from '../assets/logo.png'


const Bar=()=>{

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
            hex to base64
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Bar