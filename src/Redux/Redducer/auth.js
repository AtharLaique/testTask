//@ intal state for this reducer
const initialState = {
    token: localStorage.getItem("token"),
    isAuth:false,
    user: "",
  };
  //defination of reducer
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'AUTH':
        return{
          ...state,
          isAuth:action.payload,
          error:false
        }
      default:
        return state;
    }
  }