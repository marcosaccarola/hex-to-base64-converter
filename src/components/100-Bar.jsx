import { Container, Navbar, OverlayTrigger, Tooltip } from "react-bootstrap"
import logo from '../assets/logo.png'


const Bar=({direction,setDirection})=>{

    const changeDirection=()=>{
        direction==='hexToBase64'?setDirection('base64ToHex'):setDirection('hexToBase64')
    }

    return(
        <Navbar bg="dark" variant="dark">
            <Container>

                <OverlayTrigger
                    placement='bottom'
                    overlay={
                        <Tooltip>
                        Click to swipe
                        </Tooltip>
                    }
                    >
                        <Navbar.Brand onClick={()=>changeDirection()}>
                            <img
                            alt=""
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            />{' '}
                        {/* hex to base64 */}
                        {direction==='hexToBase64'?'from hex to base64':'from base64 to hex'}
                        </Navbar.Brand>
                </OverlayTrigger>

            </Container>
        </Navbar>
    )
}

export default Bar