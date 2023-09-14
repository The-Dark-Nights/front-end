import { useNavigate } from "react-router-dom";
import styled from "styled-components";
function LoginBefore(){
  const navigate=useNavigate();
  const clickNavigate=()=>{
    navigate('/')
  }
  const loginBtn=()=>{
    const id='8f9463904ba34fb11ab4'
    const loginURL = `https://github.com/login/oauth/authorize?client_id=${id}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/callback`;
    navigate(loginURL)
  }
    return(
        <SignBox>
        <img src="/img/search.png" alt="" />
        <SignBtn onClick={loginBtn}>SignIn</SignBtn>
      </SignBox>
    )
}
export default LoginBefore;

let SignBox=styled.div`
margin-top: 2rem;
display: none;
&>img{
  width: 30px;
  margin-right: 4rem;
}
`
let SignBtn=styled.button`
width: 140px;
  height: 40px;
  position: relative;
  top: -10px;
  border-radius: 10px;
  color: white;
  background-color: #a554f3;
  border: none;
`
