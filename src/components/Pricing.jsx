import React from 'react'
import styled from 'styled-components'

const Holder = styled.div`
  display: grid;
  grid-gap: 28px;
  margin-top: 160px;
  grid-template-columns: repeat(2, 1fr);

  img {
    max-width: 100%;
    margin-top: 250px;
  }
`;

export default function Pricing () {
  return (
    <Holder>
      <div>
        <p className="pm-h1">Preços</p>

        <p>
          Cada fornecedor possui regras específicas para precificação. Porém todos eles seguem um modelo padrão: cobrar por número de caracteres, sendo um valor X 
          a cada 1 milhão de caracteres, por exemplo.<br/><br/>Sendo assim, o fluxo e o montante de texto a ser traduzido passa a ser de suma importancia, e devemos modelar
          a estratégia de tradução mais adequada de acordo com a situação, avitando desperdícios. Para consultar as faixas de preço por fornecedor, veja a sessão 
          <mark>Fornecedores</mark> 
        </p>
      </div>
      
      <div>
        <img src="images/pricing.svg" alt="Wallet with micro men trying to take money"/>
      </div>
    </Holder>
  )
}