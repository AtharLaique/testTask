
let initialState = {email:null,idToken:null, isLogin: false };
//If user already Logged in
let user=JSON.parse(localStorage.getItem('user'))
if(user){
   initialState=user;
}
export default function(state=initialState,action){
      switch (action.type) {
            case 'AUTH':
            console.log('AUTH CASE')
              return {
                ...state,
                isLogin: action.payload.isLogin,
                email:action.payload.email,
                idToken:action.payload.idToken
              };
        case 'LOGOUT':
            console.log('LOGOUT')
              return {
                ...state,
                isLogin: false,
                email:null,
                idToken:null
              };
            default:
              return state;
          }
}