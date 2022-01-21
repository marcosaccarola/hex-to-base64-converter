import { Button, Container, Form } from "react-bootstrap"


const Main=()=>{

    return(
        <Container className='bg-dark vh-100 mt-5'>
            <Form className=''>
                <Form.Group className="mb-4 text-light w-50 mx-auto" controlId="formBasicEnter">
                    <Form.Label className='badge bg-dark border border-light text-wrap py-2 px-3 mt-2 fs-5'>hex string:</Form.Label>
                    <Form.Control type="text" />
                    <Form.Text className="text-muted">
                    Enter hex to convert
                    </Form.Text>
                </Form.Group>

                <Form.Select aria-label="Select type of convertion" className='w-50 mx-auto'>
                    <option value="1">From hex to base64</option>
                    <option value="2">From base64 to hex</option>
                </Form.Select>

                <Container fluid className='mt-5 w-50'>
                    <Button variant="warning" type="submit" className='w-100'>  
                        Convert!
                    </Button>
                </Container>
            </Form>
        </Container>
    )    
}

export default Main