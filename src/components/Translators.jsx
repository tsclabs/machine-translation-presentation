import React from 'react'
import styled from 'styled-components'

const Holder = styled.div`
  display: grid;
  grid-gap: 28px;
  margin-top: 160px;
  grid-template-columns: repeat(2, 1fr);

  img {
    max-width: 90%;
    margin-top: 160px;
  }
`

export default function Translators () {
  return (
    <Holder>
      <div>
        <img src="images/translators.svg" alt="Shaking hands image"/>
      </div>

      <div>
        <p className="pm-h1 pm-pr-family">Fornecedores</p>
        <p>
          Para isso selecionamos alguns dos melhores fornecedores no mercado, e mapeamos suas faixas de preço. <a href="docs/automatic-translation-evaluation.pdf" target="_blank">Clique aqui</a> para 
          ver o relatório completo de preços e localidades oferecidas por cada fornecedor.
        </p>

        <ul>
          <li>
            <a href="https://azure.microsoft.com/en-us/pricing/details/cognitive-services/translator/" target="_blank">
              <strong>Microsoft Translate</strong>
            </a>
          </li>
          <li>
            <a href="https://aws.amazon.com/translate/pricing/" target="_blank">
              <strong>Amazon AWS Translator</strong>
            </a>
          </li>
          <li>
            <a href="https://cloud.google.com/translate/pricing" target="_blank">
              <strong>Google Translator</strong>
            </a>
          </li>
        </ul>
      </div>
    </Holder>
  )
}