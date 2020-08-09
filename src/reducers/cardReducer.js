const INITIAL_STATE = {
    cart: [],
    alert: '',
    cartTotal: 0,
};
const cardReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
            return {
                ...state,
                cart:  action.payload.newCart,
                cartTotal: action.payload.newTotal
            };
        case "DELETE_FROM_CARD":
            return {
                ...state,
               // cart: action.payload
               cart:  action.payload.newCart,
               cartTotal: action.payload.newTotal
                }
            case "SET_ALERT_MESSAGE":
                return {
                    ...state,
                    alert: action.payload
                }
        default:
            return { ...state }
    }
}

export default cardReducer;