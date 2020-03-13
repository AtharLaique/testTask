const initialState = { isLogin: false };
export default function(state=initialState,action){
      switch (action.type) {
            case 'AUTH':
            console.log('AUTH CASE')
              return {
                ...state,
                isLogin: action.payload 
              };
            default:
              return state;
          }
}