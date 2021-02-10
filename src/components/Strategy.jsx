import React from 'react'
import styled from 'styled-components'

const Holder = styled.div`
  .half {
    display: grid;
    grid-gap: 56px;
    margin-top: 160px;
    grid-template-columns: repeat(2, 1fr);
  
    img {
      max-width: 100%;
      margin-top: 60px;
    }
  }

  .strategy {
    margin-top: 100px;
  }
`

export default function Strategy () {
  return (
    <Holder>
      <div className="half">
        <div>
          <img src="images/strategy.svg" alt="woman and man analysing blocks on a board"/>
        </div>

        <div>
          <p className="pm-h1 pm-pr-family">Estratégias</p>
          <p>
            Temos dois cenários a serem avaliados: A tradução dinamica, e a tradução estática. A tradução dinamica ocorre quando há um atendente humano comunicando-se com o client. 
            Neste caso, temos o seguinte fluxo: 
          </p>
        </div>
      </div>

      <div className="strategy">
        <p className="pm-h3">Estratégia 1 - Interprete</p>            
        <p>
          Atendente envia uma mensagem → <mark>Machine Translation Traduz a Mensagem</mark> → A mensagem é entregue traduzida para o cliente<br></br><br/>
          Cliente envia uma mensagem → <mark>Machine Translation Traduz a Mensagem</mark> → A mensagem é entregue traduzida para o atendente
        </p>

        <hr/>

        <p>
          Chamamos este modelo de "Modelo do Interprete", pois o machine translation age exatamente como um interprete entre um atendente humano e o cliente. Neste caso há custo por Mensagem
          enviada, não importando se o conteúdo é duplicado ou não, uma vez que cada mensagem gera um somatório de caracteres no montante traduzido ao final. O custo para essa estratégia é variável. 
        </p>      
      </div>

      <div className="strategy">
        <p className="pm-h3">Estratégia 2 - Tradução Estática</p>            

        <p>
          Quando um bot está conversando com um cliente, o conteúdo do bot é completamente previsível. Connhecemos sua base de dados e a extensão de seu vocabulário: a isso chamamos de "base". Uma 
          base é tudo o que um bot pode dizer. Dessa forma, aplicar a <mark>Estratégia 1</mark> em uma IA pode ser um desperdício de conteúdo pois traduziriamos conteúdo duplicado, já que o bot fala sempre
          as mesmas coisas baseando-se no input do cliente. Assim, a melhor estratégia é utilizar a <mark>Machine Translation</mark> para traduzir toda a base de um bot e então criar um novo bot nessa nova
          linguagem. Uma vez traduzido só precisaremos utilizar machine learning novamente em conteúdos novos, e o custo é completamente previsível baseado no número de caracteres da base. 
        </p>

        <p>
          Essa estratégia requer revisão humana de um nativo afim de atingir perfeição, mas ainda é superior mesmo em comparação com a <mark>Estratégia 1</mark> ou com um tradutor humano efetuando a tarefa,
          nos possibitando economizar em custo e tempo. Para mais detalhes sobre esta estratégia, capacidade e viabiliade de aplicação com cada fornecedor aqui citado, por favor leia o relatório à respeito 
          da mesma <a href="docs/machine-translation-report.pdf" target="_blank">Clicando aqui</a>
        </p>
      </div>      
    </Holder>
  )
}