import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./contains";

function OAuth2RedirectHandler() {
    const getUrlParmeter=(name)=>{
        name=name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
        let regex=new RegExp("[\\?&]"+name+"=([^&#]*)");

        let results=regex.exec(this.props.search);
        return results===null?'':decodeURIComponent(results[1].replace(/\+/g,''));
    }
    const token=this.getUrlParmeter('token');
    const error=this.getUrlParmeter('error')
    useEffect(()=>{
        if(token){
            localStorage.setItem(ACCESS_TOKEN,token);
            localStorage.setItem(REFRESH_TOKEN,null)
        }
    },[token])
    return(
        <>
            {token?<Redirect to={{
                pathname:'/profile',
                state:{from:this.props.location}
            }}/>:<Redirect to={{
                pathname:'/login',
                state:{from:this.props.location,
                        error:error 
                        }
            }}/>}
        </>
    )
}
export default OAuth2RedirectHandler;