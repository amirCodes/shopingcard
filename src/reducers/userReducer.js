import { FIND_EMPLOYEE, FIND_CUSTOMER } from '../actions/types';

const initialState = {
    users: [],
    employee: { name: { first: '' } },
    customer: { name: { first: '' } }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_EMPLOYEE:
            return {
                ...state,
                employee: action.payload
            }
        case FIND_CUSTOMER:
            return {
                ...state,
                customer: action.payload
            }
        default:
            return state
    }
}

export default userReducer;

//https://www.youtube.com/watch?v=lw24CJnuUEo&list=PL_kocBMOO_TymuwYrOA-Wj2jyp9l9agvb&index=3