import axios from "axios";
export function saveApi({flow}){
    axios.post("http://192.168.0.58:9999/roadmap",{nodes:flow});
}