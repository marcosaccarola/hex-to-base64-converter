import {Buffer} from 'buffer';

//? const STRING_FROM_TASK='4a1b48d7322394a78326cd283f0834093e65421a7e98e90e5b452d160b5d07d8'

export const hexToBase64=({inputValue,setResult})=>{
    setResult(Buffer.from(inputValue,'hex').toString('base64'))
}

export const base64ToHex=({inputValue,setResult})=>{
    setResult(Buffer.from(inputValue, 'base64').toString('hex'))
}