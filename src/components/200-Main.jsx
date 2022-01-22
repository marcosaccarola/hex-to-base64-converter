import '../CSS/style.css'
import { useState } from "react"
import { Alert, Button, Container, Form, OverlayTrigger, Tooltip } from "react-bootstrap"
import { base64ToHex, hexToBase64 } from "../utils/converter"
import {BsLinkedin,BsGithub} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'


const Main=({direction,setDirection})=>{

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
        setfrozenInput(inputValue)
        setfrozenDirection(direction)
    }

    const[frozenInput,setfrozenInput]=useState()
    const[frozenDirection,setfrozenDirection]=useState()

    return(
        <Container className='bg-dark mt-5 rounded py-5'>

            <Form className=''>

                <Form.Group className="text-light w-50 mx-auto" controlId="formBasicEnter">
                    <OverlayTrigger
                        placement='bottom'
                        overlay={
                            <Tooltip>
                            Click to swipe
                            </Tooltip>
                        }
                        >

                        <Form.Label 
                            className='badge bg-dark border border-light text-wrap py-2 mt-4 fs-5 w-100' 
                            onClick={()=>changeDirection()} 
                            >
                            {direction==='hexToBase64'?'from hex to base64':'from base64 to hex'}
                            <svg className='mx-3' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M2.5 2v6h6M21.5 22v-6h-6"></path><path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2"></path></svg>
                        </Form.Label>

                    </OverlayTrigger>

                    <Form.Text className="text-muted d-block mt-4 mb-1">
                    {direction==='hexToBase64'?'Enter hex to convert:':'Enter base64 to convert:'}
                    </Form.Text>

                    <Form.Control type="text" onChange={(e)=>handleInputValue(e)} className='text-break' />

                </Form.Group>

                <Container fluid className='mt-5 w-50 px-0'>
                    <OverlayTrigger
                        placement='bottom'
                        overlay={
                            <Tooltip>
                            It converts <strong>{direction==='hexToBase64'?'from hex to base64':'from base64 to hex'}</strong>.
                            </Tooltip>
                        }
                        >

                        <Button variant="warning" type="submit" className='w-100 fs-5 hover-danger' onClick={(e)=>convert(e)}>  
                            Convert
                        </Button>

                    </OverlayTrigger>
                </Container>

            </Form>

        {result&&

            <Alert className='bg-light text-dark mt-5 w-50 mx-auto text-break'>
                <p><strong>{frozenDirection==='hexToBase64'?'hex:':'base64'}</strong></p>
                <p>{frozenInput}</p>
                <hr />
                <p><strong>{frozenDirection!=='hexToBase64'?'hex:':'base64'}</strong></p>
                <p>{result}</p>
            </Alert>

        }

            <Container className='d-flex text-warning bg-dark w-50 mx-auto justify-content-end px-0 mt-5'>
                <MdAlternateEmail className='text-warning me-3' onClick={()=>window.open('mailto:marco.saccarola.dev@gmail.com')} />
                <BsLinkedin className='text-warning me-3' onClick={()=>window.open('https://www.linkedin.com/in/marcosaccarola/')} />
                <BsGithub className='text-warning' onClick={()=>window.open('https://github.com/marcosaccarola')} />
            </Container>


        </Container>
    )    
}

export default Main