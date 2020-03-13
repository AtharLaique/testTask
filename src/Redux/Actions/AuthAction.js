import axios from "axios";
import url from '../../assets/url';
export  const LoginHandling =(data , history) =>  dispatch=>{
        axios.post(url.login,data)
        .then(res=>{
            console.log(res)
            dispatch({type:'AUTH' ,payload:true})
        })
        .catch(err=>{
            console.log()
        })
     
  }