import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";


//글로벌 스타일 font적용


const globalStyles = createGlobalStyle`
  ${reset}
  //p,a,div,td,th{
  //  font-family: NanumGothic;
  //}
  p,a,span,div,td,th,input,button, textarea{
    font-family: NanumGothic;
  }
 
`;


export default globalStyles;