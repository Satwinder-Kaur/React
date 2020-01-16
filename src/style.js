import styled from "styled-components";
import { Container, Form, Button, Label, InputGroupText, Input } from 'reactstrap';

export const Div = styled.div`
background-color:#ecf1f7;
  width:100%;
  height: 100vh;
  align-items: center;
  display:flex;
  justify-content:center;
  .demo{
      padding-right:0;
      padding-left:0;
  }
::placeholder {
  color: red;
}
.form-control:focus{
  outline: none !important;
    border:1px solid white !important;
    box-shadow: 0 0 10px white;
}
.btn-group>.btn:hover{
  background-color:#41cdd4 !important;
  color:white !important;
}
  `;

export const Cont = styled(Container)`
 background-color:white;   
 width: 80%;   
 height: 90vh;
 `;

export const First = styled.div`
 background-color:white;
 height:90vh;
 display: flex;
 justify-content: center;
 align-items: center;
 flex-direction: column;
 `;

export const Second = styled.div`
 background-color: #41cdd4;
  height: 90vh;
  `;

export const P = styled.p`
color:#41cdd4;
font-family:Bookman, serif;
font-size:13px;
text-align:center;
padding-left:15px;
padding-right:15px;
margin-top:4em !important;
position:absolute;
bottom: 20px;
`;

export const Form1 = styled(Form)`
width:60%;
margin:0 auto;
height:70%;
flex-direction:column;
display:flex;
align-items:center;
justify-content:center;
`;

export const Button1 = styled(Button)`
background-color: white !important;
color: #41cdd4 !important;
border: none !important;
border-radius: 25px !important;
font-family: 'Gayathri', sans-serif;
width:130px;
padding-top:10px !important;
font-size:15px !important;
margin-right:13em;
`;

export const Label1 = styled(Label)`
color:white;
font-size:15px;
font-family:'Gayathri', sans-serif;
margin-right:9em;
`;

export const InputGroupText1 = styled(InputGroupText)`
background-color:white !important;
color:#c5d0d9 !important;
border:none !important;
`;

export const Input1 = styled(Input)`
border: 0px solid #ced4da !important;

font-family:Lucida, sans-serif;
font-size:20px;
padding-left:30px !important;
border-radius:25px !important;
`;

export const Division = styled.div`
svg{
  position: absolute;
    left: 8px;
    top: 10px;
    z-index: 99;
}
position:relative;
width:100%;
color:#c7d0d8 !important;
`;