import React from 'react'
import styled from "@emotion/styled";
import Product from './Product';
import ShoppingcartItem from './ShoppingcartItem';

const StyledShoppingcart = styled.div`
    height: 100vh;
    width: 30vw;
    position: fixed;
    top: 0;
    right: 0;
    background-color: lightblue;
    padding: 1rem;
    transform: ${props => props.isActive ? "translateX(0%)" : "translateX(100%)"};
    transition: transform 0.3s ease-in-out;

    & button{
        background-color: transparent;
        font-weight: 600;
        font-size: 2rem;
        border: none;
        cursor: pointer;
    }

    & h2{
        margin-top: 3rem;
    }
`;

function Shoppingcart(props) {

    const {cart, setIsCartActive, isCartActive, deleteFromCart} = props;

    return (
        <StyledShoppingcart isActive={isCartActive}>
            <button onClick={() => setIsCartActive(false)}>x</button>
            <div>
                {cart.length === 0 ? <h2>Shopping cart is empty.</h2> : cart.map(p => <ShoppingcartItem deleteFromCart={deleteFromCart} key={p.id} product={p} />)}
            </div>
        </StyledShoppingcart>
      );
}

export default Shoppingcart
