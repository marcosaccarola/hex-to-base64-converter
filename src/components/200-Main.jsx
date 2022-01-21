import { useState } from "react"
import { Alert, Button, Container, Form } from "react-bootstrap"
import { base64ToHex, hexToBase64 } from "../utils/converter"


const Main=()=>{

    const[direction,setDirection]=useState('hexToBase64')
    const changeDirection=()=>{
        direction==='hexToBase64'?setDirection('base64ToHex'):setDirection('hexToBase64')
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

                <Form.Group className="text-light w-50 mx-auto" controlId="formBasicEnter">
                    <Form.Label 
                        className='badge bg-dark border border-light text-wrap py-2 mt-4 fs-5 w-100' 
                        onClick={()=>changeDirection()} 
                        >{direction==='hexToBase64'?'from hex to base64':'from base64 to hex'}
                    </Form.Label>

                    <Form.Text className="text-muted d-block mt-4 mb-1">
                    {direction==='hexToBase64'?'Enter hex to convert:':'Enter base64 to convert:'}
                    </Form.Text>
                    <Form.Control type="text" onChange={(e)=>handleInputValue(e)} className='text-break' />
                </Form.Group>

                <Container fluid className='mt-5 w-50 px-0'>
                    <Button variant="warning" type="submit" className='w-100 fs-5 hover-danger' onClick={(e)=>convert(e)}>  
                        Convert!
                    </Button>
                </Container>

            </Form>

            {result&&
                <Alert className='bg-light text-dark mt-5 w-50 mx-auto text-break'>
                    <p>hex</p>
                    <p>{inputValue}</p>
                    <hr />
                    <p>base64</p>
                    <p>{result}</p>
                </Alert>
            }

        </Container>
    )    
}

export default Main