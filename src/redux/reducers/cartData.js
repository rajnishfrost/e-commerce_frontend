const initialState = { rj: [] , user:{firstName : "" , email : ""}};

const cartData = (state = initialState, action) => {
  switch (action.type) {

    case "savingCartData" :
      state.rj = state.rj.filter((d)=>{return d.id !==action.data.id});
      return { ...state, rj : [...state.rj, action.data]  };

    case "deleteCartData" :
      state.rj = state.rj.filter((ele) => {return ele.id !== action.data})
      return { ...state, rj : [...state.rj]}

      case "increaseQty" : 
      let index = state.rj.findIndex((e)=>e.id === action.id);
      state.rj[index].qty =  state.rj[index].qty+1;
      return { ...state, rj : [...state.rj]}

      case "decreaseQty" : 
      let i = state.rj.findIndex((e)=>e.id === action.id);
      if(state.rj[i].qty >= 2){
      state.rj[i].qty =  state.rj[i].qty-1;
      }
      return { ...state, rj : [...state.rj]}

      case "userFirstName" :
        console.log(action.data);
        return{...state , user : action.data}

    default:
      return state;
  }
};
export default cartData;
