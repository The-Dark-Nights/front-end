import { useNavigate } from "react-router-dom";
function LoginBefore(){
  const navigate=useNavigate();
  const clickNavigate=()=>{
    navigate('/')
  }
  const loginBtn=()=>{
    const id='8f9463904ba34fb11ab4'
    const loginUri = `https://github.com/login/oauth/authorize?client_id=${id}&scope=repo:status read:repo_hook user:email&redirect_uri=http://localhost:3000/callback`;
    navigate(loginURL)
  }
    return(
        <div className="signBox">
        <img src="/img/search.png" alt="" />
        <button className="purpleBtn signBtn" onClick={loginBtn}>SignIn</button>
      </div>
    )
}
export default LoginBefore;