import { useNavigate } from "react-router-dom";
function LoginBefore(){
  const navigate=useNavigate();
  const clickNavigate=()=>{
    navigate('/')
  }
    return(
        <div className="signBox">
        <img src="/img/search.png" alt="" />
        <button className="purpleBtn signBtn" onClick={clickNavigate}>SignIn</button>
      </div>
    )
}
export default LoginBefore;