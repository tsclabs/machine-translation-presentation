import React from 'react'
import styled from 'styled-components'

const Holder = styled.div`
  display: grid;
  grid-gap: 28px;
  grid-template-columns: repeat(2, 1fr);

  img {
    max-width: 100%;
    margin-top: 250px;
  }
`;

export default function Hero () {
  return (
    <Holder>
      <div>
        <h1>Machine<br/>Translation</h1>

        <p>
          Queremos utilizar o poder das tecnicas de <mark>Machine Translation</mark> para entregar a melhor experiência internacional
          aos nossos usuários, otimizando custos e tempo de execução.
        </p>
      </div>
      
      <div>
        <img src="images/hero.svg" alt="Woman looking at globe with pin map icons"/>
      </div>
    </Holder>
  )
}