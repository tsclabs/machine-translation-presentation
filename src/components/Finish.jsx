import React from 'react'
import styled from 'styled-components'

const Holder = styled.div`
  margin-top: 160px;
  
  .finish-img {
    margin-bottom: 56px;
    img {
      max-width: 700px;
      margin: 0 auto;
      display: block;
    }
  }
`;

export default function Finish () {
  return (
    <Holder>
      <div className="finish-img">
        <img src="images/finish.svg" alt="Woman crossing finish line"/>
      </div>

      <div className="conclusion">
        <p>
          Concluímos que a viabiliade de um projeto de <mark>Machine Translation</mark> é completamente factível e pode trazer muitos benefícios em tempo, confiabilidade, custo,
          escalabilidade e experiência para os projetos atuais e seguintes. De qualquer forma esse cenário depende de uma estratégia bem definida, pautada nos dois pontos citados
          aqui no tópico <mark>Estratégias</mark>. Uma segunda dependencia é que todos os fornecedores de IA e plataformas de chat bots devem ter um mínimo de capacidade de integração
          que nos permita inserir as estratégias aqui citadas no fluxo do bot. Esse é um cenário breve e genérico afim de demonstrar a aplicabilidade e viabilidade de aplicações com 
          <mark>Marchine Learning</mark> em chat bots, um vez pré-aprovada, deveremos alinhar a execução colocando a equipe de desenvolvimento TSC em trabalho direto com fornecedores de chatbot.
        </p>
      </div>

      <hr/>

      <p>
        TSC Development Team
      </p>
    </Holder>
  )
}