import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
  z-index: 100;
  padding: 16px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: solid 2px #7E1AFF;
  background-color: #fff8e7;

  .logo {
    height: 30px;
  }
`;

export default function UpperNav () {
  return (
    <Header>
      <img className="logo" src="images/logo.svg" alt="Logo"/>
    </Header>
  )
}