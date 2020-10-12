import React from 'react';
import styled from "@emotion/styled";
import {Menu, ShoppingCart} from '@material-ui/icons';

const StyledNavbar = styled.div`
    height: 10vh;
    width: 100%;
    background-color: #3e3e9f;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    & > h1{
        cursor: pointer;

        &:hover{
            color: grey;
        }
    }

    & > div{
        display:flex;
        align-items: center;

            & button{
            background-color: lightblue;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            padding: 10px 20px;
            font-size: 1rem;
            letter-spacing: 3px;
            margin-left: 3rem;
            font-weight: 500;
        }
    }
`;

const StyledMenu = styled(Menu)`
    cursor: pointer;

    &:hover{
        color: grey;
    }
`;

const StyledShoppingCart = styled(ShoppingCart)`
    cursor: pointer;

    &:hover{
        color: grey;
    }
`;

function Navbar(props) {
    return (
        <StyledNavbar>
            <StyledMenu />
            <h1>Web Shop</h1>
            <div>
                <StyledShoppingCart />
                <button>Login</button>
            </div>
            
        </StyledNavbar>
    )
}

export default Navbar
