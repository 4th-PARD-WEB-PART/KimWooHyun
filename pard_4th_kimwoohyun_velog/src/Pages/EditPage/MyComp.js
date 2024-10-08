import styled from "styled-components";

export const Contents = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const Head = styled.header`
  width: 1050px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Head_btn = styled.button`
display: inline-block;
width: 100px;
height: 33px;
border-radius: 16.5px;
align-items: center;
justify-content: center;
font-size: 15px;
font-weight: 700;
line-height: 18.15px;
color: #343A40;
background: white;
border: 1px solid #343A40
&:hover {
  cursor: pointer;
  color: white;
  background-color: black;
}
`;

export const Head_benner = styled.div`
width: 250px;
height: 100%;

display: flex;
align-items: center;
justify-content: space-between;

margin-right: 20px;
`;

export const
  VTitle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

export const VPadding = styled.p`height: 0px;`;


export const VHeader = styled.p` width: 400px;
height: 62px;
top: 168px;
left: 730px;
font-family: Inter;
line-height: 61.72px;
font-size: 51px;
font-weight: 700;
text-align: center;
margin-bottom: -10px;
margin-left: -50px;
`;

export const VContent = styled.p`  width: 244px;
height: 23px;
left: 730px;
font-size: 19px;
font-weight: 400;
line-height: 22.99px;
text-align: center;`;


export const VObject = styled.p`  padding-left: 8px;
margin-top: 50px;
left: 730px;
gap: 0px;
opacity: 0px;
font-family: Inter;
font-size: 15px;
font-weight: 700;
line-height: 18.15px;
color: #ACB5BD;
`;

export const InputText1 = styled.input`  outline: none;
padding-left: 6px;
font-family: Inter;
font-size: 19px;
font-weight: 400;
line-height: 22.99px;
text-align: left;
color: #ACB5BD;
border: none;
border-bottom: 1px solid #ACB5BD;
display: flex;
width: 249px;
height: 30px;
`;



export const InputText2 = styled.input`  
outline: none;
padding-left: 6px;
font-family: Inter;
font-size: 19px;
font-weight: 400;
line-height: 22.99px;
text-align: left;
color: #ACB5BD;
border: none;
border-bottom: 1px solid #ACB5BD;
display: flex;
width: 333px;
height: 30px;
`;

export const InputText3 = styled.input`  
outline: none;
padding-left: 6px;
font-family: Inter;
font-size: 19px;
font-weight: 400;
line-height: 22.99px;
text-align: left;
color: #ACB5BD;
border: none;
border-bottom: 1px solid #ACB5BD;
display: flex;
width: 274px;
height: 30px;
`;

export const InputText4 = styled.input`  outline: none;
padding-left: 6px;
font-family: Inter;
font-size: 19px;
font-weight: 400;
line-height: 22.99px;
text-align: left;
color: #ACB5BD;
border: none;
border-bottom: 1px solid #ACB5BD;
display: flex;
width: 373px;
height: 30px;
`;

export const Checkbox = styled.input`
border-radius: 3px 0px 0px 0px;
border: 1px 0px 0px 0px;
opacity: 0px;
margin-right: 10px;
vertical-align: text-top;
`;

export const Word = styled.p`
color: #15B886;
display: inline-block;
margin-bottom: 0;
margin-top: 0;
border: none;
border-bottom: #15B886 1px solid;
`;


export const Sentence = styled.p`
display: inline-block;
margin-bottom: 0;
margin-top: 0;
font-family: Inter;
font-size: 13px;
font-weight: 400;
line-height: 15.73px;
text-align: left;
`;

export const Button1 = styled.button`
display: inline-block;
margin-bottom: 0;
margin-top: 0;
width: 93px;
height: 41px;
top: 790px;
left: 728px;
border-radius: 20.5px;
background: #DEE2E6;
border: none;
align-items: center;
justify-content: center;
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 24.2px;
`;

export const Button2 = styled.button`
margin-left: 10px;
display: inline-block;
margin-bottom: 0;
margin-top: 0;
width: 93px;
height: 41px;
top: 790px;
left: 728px;
border-radius: 20.5px;
background: #15B886;
border: none;
align-items: center;
justify-content: center;
font-family: Inter;
font-size: 20px;
font-weight: 700;
line-height: 24.2px;
color: white;
`;

export const Box = styled.p`
  &:hover {
    .input {
      color:#15B886;
    }
    
    .text {
    color: #15B886;
    border: none;
    border-bottom: 1px solid #15B886;}
  };
`;