export const incNum = () => {
  return { type: "Increment" };
};

export const decNum = () => {
  return { type: "Decrement" };
};

export const savingCartData = (data) => {
 
  return {
    type : "savingCartData" ,
    data : {...data , qty : 0}
  }

}

export const deleteCartData = (data) => {
 
  return {
    type : "deleteCartData" ,
    data : data 
  }

}



export const savingAPI = (data) => {
 
  return {
    type : "savingAPI" ,
    data : data
  }
  
}

export const increaseQty = (data) => {
  return {
    type : "increaseQty" ,
    qty : data.qty ,
    id : data.id
  }
}

export const decreaseQty = (data) => {
  return {
    type : "decreaseQty" ,
    qty : data.qty ,
    id : data.id
  }
}

export const userFirstName = (data) => {
  return {
    type : "userFirstName" ,
    data : data
  }
}
