import React from 'react'
import styled from "@emotion/styled";
import DeleteIcon from '@material-ui/icons/Delete';

const StyledItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & button{
        color: red;
        background-color: transparent;
        border: none;
        font-size: 2rem;
        font-weight: 600;
        cursor: pointer;
    }
`;

function ShoppingcartItem(props) {

    const {product} = props;

    return (
        <StyledItem>
            <h1>{product.title}</h1>
            <button><DeleteIcon /></button>
        </StyledItem>
    )
}

export default ShoppingcartItem
