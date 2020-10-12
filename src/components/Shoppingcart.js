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

    & button{
        background-color: transparent;
        font-weight: 600;
        font-size: 2rem;
        border: none;
        cursor: pointer;
    }
`;

function Shoppingcart(props) {

    const {cart} = props;

    return (
        <StyledShoppingcart>
            <button>x</button>
            <div>
                {cart.map(p => <ShoppingcartItem key={p.id} product={p} />)}
            </div>
        </StyledShoppingcart>
      );
}

export default Shoppingcart
