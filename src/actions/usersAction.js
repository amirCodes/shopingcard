import { FIND_EMPLOYEE, FIND_CUSTOMER } from './types';

export const findEmplpyee = () => async(dispatch) =>{
    const url = 'https://randomuser.me/api/';
    const setHeader = { headers: {"Content-Type": "application/json"}}
    let res = await fetch(url,{setHeader})
    res = await res.json();
    console.log(res)
    let employee = res.results[0];
    dispatch({type: FIND_EMPLOYEE, payload: employee})
    return {
        type:FIND_EMPLOYEE,
        payload: employee
    }
}

export const findCustomer = () => async(dispatch) =>{
    const url = 'https://randomuser.me/api/';
    const setHeader = { headers: {"Content-Type": "application/json"}}
    let res = await fetch(url,{setHeader})
    res = await res.json();
    console.log("customer:"+res)
    let customer = res.results[0];
    dispatch({type: FIND_CUSTOMER, payload: customer})
    return {
        type:FIND_CUSTOMER,
        payload: customer
    }
}
