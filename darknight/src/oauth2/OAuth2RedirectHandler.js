import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";


function OAuth2RedirectHandler() {
    const location = useLocation();
    const navigate = useNavigate();

    const getUrlParameter = (name) => {
        name = name.replace(/[\\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');

        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    useEffect(()  =>{
        const token = getUrlParameter('token');
        const error = getUrlParameter('error');
    
        // 로그인 됐을 때
        if (token) {
            localStorage.setItem(ACCESS_TOKEN, token);
            localStorage.setItem(REFRESH_TOKEN, null); 
            // navigate('-1');     
            navigate('/');
        }
        // 로그인 안됐을 때
        else{
            navigate('/');
        }
            
        },
        []);
}

export default OAuth2RedirectHandler;