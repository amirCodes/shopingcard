import { ADD_TO_CARD, DELETE_FROM_CARD, SET_ALERT_MESSAGE } from './types'
const total = (newCart) => {
    let totalVal = 0;
    for (let i = 0; i < newCart.length; i++) {
        totalVal += newCart[i].price;
    }
    return totalVal;
};

export const addToCardAction = (item, cart) => {
    const newCart = [...cart, item];
    const newTotal = total(newCart);
    return{
        type: ADD_TO_CARD,
        payload: {newCart, newTotal}
    }
}
export const deleteFromCardAction = (item, cart) => {
    let hardCopy = [...cart];
    hardCopy = hardCopy.filter((cartItem) => cartItem.id !== item.id);  
    const newTotal = total(hardCopy)

    return{
        type: DELETE_FROM_CARD,
        payload: {newCart: hardCopy, newTotal:newTotal},
    }
}

export const getAlertMessageAction = (str) => {
    return{
        type: SET_ALERT_MESSAGE,
        payload: str
    }
}