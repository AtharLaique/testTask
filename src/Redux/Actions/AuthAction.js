import axios from "axios";
import url from "../../assets/url";
export const LoginHandling = (data, history) => dispatch => {
  axios
    .post(url.login,data)
    .then(res => {
      console.log(res.data.email);
      dispatch({
        type: "AUTH",
        payload: {
          email: res.data.email,
          idToken: res.data.idToken,
          isLogin: true
        }
      });
      //For Auto login 
      localStorage.setItem('user',JSON.stringify({
        email: res.data.email,
        idToken: res.data.idToken,
        isLogin: true
      }))
      history.push("/create-profile")
    })
    .catch(err => {
      alert('Unauthorized Access')
    });
};

