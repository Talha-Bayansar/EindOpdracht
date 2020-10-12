import React from 'react'
import styled from "@emotion/styled";

const StyledProduct = styled.div`
    background-color: #ececec;
    box-shadow: 0px 0px 5px 2px black;
`;

function Product(props) {

    const {product} = props;

    return (
        <StyledProduct>
            <img src={product.imageUrl} alt={product.title}/>
            <div>
                <h2>{product.title}</h2>
                <span>{product.price}&euro;</span>
            </div>
        </StyledProduct>
    )
}

export default Product
