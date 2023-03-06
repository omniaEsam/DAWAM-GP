import styled from "@emotion/styled";
import theme from "../../config";


export const Form = styled("form")`
    label : Form ;
   display:flex;
   justify-content:center;
   align-items:center;
   margin: 10rem 0;
   gap: 1rem;
   flex-direction:column;
  
`

export const Input = styled("input")`
    label : Input ;
    border-radius:10px;
    padding: .6rem .6rem .6rem 10rem ;
    border: 1px  ${theme.gray}  solid;
    margin-right:1rem;
    ::placeholder{
        font-size: 1rem;
    }
`
export const Anchor = styled("div")`
    label : Anchor ;
    margin-left: 11rem;
    margin-top:1rem;
`
export const Button = styled("button")`
    label : Button ;
    padding: 0.7rem 10rem;
    border-radius: 20px;
    border: none;
    background-color: ${theme.green};
`
export const Log = styled("a")`
    label : Log ;
    text-decoration:none;
    font-size: 1.1rem;
    color: ${theme.white};
    font-weight:bold;
`
