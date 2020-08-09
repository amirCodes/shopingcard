import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col, CardDeck, CardGroup, Card, Button } from 'react-bootstrap';
import {findEmplpyee, findCustomer} from '../actions/usersAction';
import { addToCardAction, deleteFromCardAction,getAlertMessageAction } from '../actions/cardAction'
const imgUrl = 'https://specials-images.forbesimg.com/imageserve/5f2439ddc87c0f417e551d4f/960x0.jpg?fit=scale';

const Shop = () => {
    //const [cart, setCart] = useState([]);
    //const [alert, setAlert] = useState("");
   // const [cartTotal, setCartTotal] = useState(0);

    const { cart } = useSelector((state) => state.cardReducer);
    const { alert} = useSelector((state) => state.cardReducer);
    const { cartTotal} = useSelector((state) => state.cardReducer);
    const { employee, customer } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();
    const {first} =employee.name;
    const {efirst} =customer.name;
    const items = [
        {
            id: 1,
            name: "overwatch",
            price: 20,
        },
        {
            id: 2,
            name: "minecraft",
            price: 32,
        },
        {
            id: 3,
            name: "fortnite",
            price: 51,
        },
        {
            id: 4,
            name: "Pubg Mobile",
            price: 91,
        },
    ];

    // useEffect(() => {
    //     total();
    // }, [cart]);

    // const total = () => {
    //     let totalVal = 0;
    //     for (let i = 0; i < cart.length; i++) {
    //         totalVal += cart[i].price;
    //     }
    //     setCartTotal(totalVal);
    // };

    const addToCart = (el) => {

        let addIt = true;
        for (let i = 0; i < cart.length; i++) {
            if (cart[i].id === el.id) addIt = false;
        }
        if (addIt) {
            //  setCart([...cart, el]);
            dispatch(addToCardAction(el, cart))
            dispatch(getAlertMessageAction(""))
           // setAlert("");
        } else dispatch(getAlertMessageAction(`${el.name} is already in your cart`));
    };
 
    const removeFromCart = (el) => {
        // let hardCopy = [...cart];
        // hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
      //  setCart(hardCopy);
      dispatch(deleteFromCardAction(el, cart))
       // setAlert("");
       dispatch(getAlertMessageAction(""))
    };

    const callForEmp = () => {
        dispatch(findEmplpyee())
        dispatch(findCustomer())
    }

    const listItems = items.map((el) => (
        <Card style={{ maxWidth: '14rem', minWidth: '14rem', margin: '8px', display: 'flex', justifyContent: 'space-between' }} key={el.id}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>      {`${el.name}: $${el.price}`} </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary" type="submit" onClick={() => addToCart(el)}>Add to card</Button>
            </Card.Body>
        </Card>
    ));

    const cartItems = cart.map((el) => (
        <Card key={el.id}>
            <Card.Body>
                {`${el.name}: $${el.price}`}  &nbsp;&nbsp;&nbsp;
                <Button style={{ textAlign: "right" }} variant="danger" size="sm" type="submit" value="remove" onClick={() => removeFromCart(el)} >Delete</Button>
            </Card.Body>
        </Card>
    ));

    return (
        <Container>
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col xs={12} md={8}>
                    <h1>AVAILABLE STORE </h1>
                    <div>
                        Employee name:{first}<br/>
                        Customer name: {customer.name.first}<br/>
                        <input type="submit" value="find employee" onClick={()=> callForEmp()} />
                    </div>
                    <CardGroup style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', flexWrap: 'wrap' }}>
                        {listItems}
                    </CardGroup>
                </Col>
                <Col xs={6} md={4}>
                    <div>CART</div>
                    <div>{cartItems}</div>
                    <div>Total: ${cartTotal}</div>
                    <div>Alert Message: {alert}</div>      </Col>
            </Row>
        </Container>
    );
};

export default Shop;