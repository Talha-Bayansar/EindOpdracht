import React from 'react'
import styled from "@emotion/styled";

const StyledProduct = styled.div`
    background-color: #c1c1c1;
    box-shadow: 0px 0px 5px 2px black;
    border-radius: 5px;

    & > img{
        width: 100%;
        object-fit: contain;
        border-radius: 5px 5px 0 0;
    }

    & > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        margin-bottom: 1rem;

        & > button{
            background-color: #3e3e9f;
            border: none;
            border-radius: 3px;
            padding: 5px 10px;
            font-size: 1rem;
            cursor: pointer;
            outline: none;
        }
    }
`;

function Product(props) {

    const {product} = props;

    return (
        <StyledProduct>
            <img src={product.imgUrl} alt={product.title}/>
            <div>
                <h2>{product.title}</h2>
                <button>{product.price}&euro;</button>
            </div>
        </StyledProduct>
    )
}

export default Product
