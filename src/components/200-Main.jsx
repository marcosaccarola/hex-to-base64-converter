import { useState } from "react"
import { Alert, Button, Container, Form } from "react-bootstrap"
import { base64ToHex, hexToBase64 } from "../utils/converter"


const Main=()=>{
    const[direction,setDirection]=useState('hexToBase64')
    const handleDirection=(e)=>{
        setDirection(e.target.value)
    }
    const[inputValue,setInputValue]=useState()
    const handleInputValue=(e)=>{
        setInputValue(e.target.value)
    }
    const[result,setResult]=useState('')
    const convert=(e)=>{
        e.preventDefault()
        direction==='hexToBase64'?hexToBase64({inputValue,setResult}):base64ToHex({inputValue,setResult})
    }

    return(
        <Container className='bg-dark vh-100 mt-5'>

            <Form className=''>

                <Form.Group className="mb-4 text-light w-50 mx-auto" controlId="formBasicEnter">
                    <Form.Label className='badge bg-dark border border-light text-wrap py-2 px-3 mt-2 fs-5'>hex string:</Form.Label>
                    <Form.Control type="text" onChange={(e)=>handleInputValue(e)} />
                    <Form.Text className="text-muted">
                    Enter hex to convert
                    </Form.Text>
                </Form.Group>

                <Form.Select aria-label="Select type of convertion" className='w-50 mx-auto' onChange={handleDirection}>
                    <option value='hexToBase64'>From hex to base64</option>
                    <option value='base64ToHex'>From base64 to hex</option>
                </Form.Select>

                <Container fluid className='mt-5 w-50'>
                    <Button variant="warning" type="submit" className='w-100' onClick={(e)=>convert(e)}>  
                        Convert!
                    </Button>
                </Container>

            </Form>

            {result&&
                <Alert className='bg-light text-dark mt-5 w-75 mx-auto'>
                    {result}
                </Alert>
            }

        </Container>
    )    
}

export default Main