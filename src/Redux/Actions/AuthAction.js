import axios from "axios";
import url from "../../assets/url";
export const LoginHandling = (data, history) => dispatch => {
  console.log(data);
  axios
    .post(url.login, {
      email: "atharlaique@yahoo.com",
      password: "1234567",
      returnSecureToken: true
    })
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
    })
    .catch(err => {
      console.log("Its Error");
    });
};
