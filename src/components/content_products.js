import React from "react";
import styled from "@emotion/styled";

const StyledContentProducts = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 3rem;

  & > span {
    position: absolute;
    width: 50%;
    text-align: center;
    display: block;
    margin-left: calc(25% - 3rem);
  }

  @media screen and (max-width: 1280px) {
    & {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    & {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 500px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  & > h1 {
    font-size: 2.5rem;
    margin: 3rem;
  }

  @media screen and (max-width: 500px) {
    & > h1 {
      font-size: 1.75rem;
    }
  }
`;

function ContentProducts(props) {
  const { title } = props;
  return (
    <StyledSection>
      <h1>{title}</h1>
      <StyledContentProducts>{props.children}</StyledContentProducts>
    </StyledSection>
  );
}

export default ContentProducts;
