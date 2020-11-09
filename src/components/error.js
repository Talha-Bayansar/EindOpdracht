import React from "react";
import styled from "@emotion/styled";

const StyledError = styled.div`
  background-color: #f0a7a7;
  color: red;
  padding: 5px 10px;
  border-radius: 5px;
`;

function Error(props) {
  return <StyledError>{props.children}</StyledError>;
}

export default Error;
