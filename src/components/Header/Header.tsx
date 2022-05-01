import React from 'react';
import styled from "styled-components";

const HeaderContainer = styled.header`
  grid-column: 1/-1;
  grid-row: 1;
  font-family: 'Montserrat', sans-serif;
`

const Header = () => (
  <HeaderContainer>
    <h2>1 day chat App</h2>
    <p>All messages will be deleted at every 00:00 UTC</p>
  </HeaderContainer>
);

export default Header;
