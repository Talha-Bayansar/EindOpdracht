import React from 'react';
import './App.css';
import ContentProducts from './components/ContentProducts';
import Navbar from './components/Navbar';
import { products_data } from "./data/products_data";
import styled from "@emotion/styled";

const StyledApp = styled.div`
  padding: 10vh 3rem 0 3rem;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <ContentProducts data={products_data} />
    </StyledApp>
  );
}

export default App;
