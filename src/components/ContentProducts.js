import React from 'react';
import styled from "@emotion/styled";
import Product from './Product';

const StyledContentProducts = styled.div`
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
`;

function ContentProducts(props) {

    const {data, addToCart} =  props;

    return (
        <StyledContentProducts>
            {data.map(p => <Product addToCart={addToCart} key={p.id} product={p} />)}
        </StyledContentProducts>
    )
}

export default ContentProducts
