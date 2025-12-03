import React, { useState } from 'react';
import Styles from './css/Duvida.module.css'

const Duvida = () => {
  const [categoriaAtiva, setCategoriaAtiva] = useState('agendamento');
  const [perguntaAberta, setPerguntaAberta] = useState(null);

  const togglePergunta = (index) => {
    setPerguntaAberta(perguntaAberta === index ? null : index);
  };

  const categorias = {
    agendamento: [
      {
        pergunta: "Quanto custa uma faxina?",
        resposta: "O preço da faxina varia de acordo com o tamanho do local, tipo de limpeza e frequência. Entre em contato conosco para um orçamento personalizado."
      },
      {
        pergunta: "Quais as formas de pagamento?",
        resposta: "Aceitamos cartão de crédito, débito, PIX e transferência bancária. Para serviços recorrentes, oferecemos condições especiais."
      },
      {
        pergunta: "Como agendar uma faxina?",
        resposta: "Você pode agendar através do nosso site, aplicativo ou telefone. Nossa equipe entrará em contato para confirmar os detalhes e horários."
      },
      {
        pergunta: "Quanto tempo dura uma faxina?",
        resposta: "O tempo de duração depende do tamanho do ambiente e do tipo de limpeza solicitada. Em média, uma faxina padrão leva entre 2 e 4 horas."
      }
    ],
    produtos: [
      {
        pergunta: "Quais produtos de limpeza vocês utilizam?",
        resposta: "Utilizamos produtos profissionais de alta qualidade, muitos deles ecológicos e hipoalergênicos. Todos são testados e aprovados para garantir eficiência e segurança."
      },
      {
        pergunta: "Preciso fornecer os produtos de limpeza?",
        resposta: "Não é necessário. Nossos profissionais trazem todos os produtos e equipamentos necessários. Caso prefira que utilizemos produtos específicos, podemos combinar previamente."
      },
      {
        pergunta: "Vocês usam produtos ecológicos?",
        resposta: "Sim, oferecemos a opção de utilizar apenas produtos ecológicos e biodegradáveis. Esta opção pode ser selecionada no momento do agendamento."
      },
      {
        pergunta: "Que equipamentos vocês utilizam?",
        resposta: "Utilizamos equipamentos profissionais como aspiradores de alta potência, vaporizadores, lavadoras de alta pressão e todos os acessórios necessários para uma limpeza completa."
      }
    ],
    modalidades: [
      {
        pergunta: "Quais tipos de faxina vocês oferecem?",
        resposta: "Oferecemos faxina padrão, faxina pesada, limpeza pós-obra, organização de ambientes, limpeza de estofados e limpeza de vidros. Cada serviço pode ser personalizado conforme sua necessidade."
      },
      {
        pergunta: "O que inclui a faxina padrão?",
        resposta: "A faxina padrão inclui: limpeza de pisos, limpeza de banheiros, limpeza de cozinha, remoção de pó de superfícies, limpeza de espelhos e vidros, e organização básica dos ambientes."
      },
      {
        pergunta: "O que é faxina pesada?",
        resposta: "A faxina pesada é indicada para locais que não recebem limpeza há muito tempo ou após reformas. Inclui limpeza profunda de todos os ambientes, armários, paredes, tetos e áreas de difícil acesso."
      },
      {
        pergunta: "Vocês fazem limpeza de estofados?",
        resposta: "Sim, oferecemos serviço especializado de limpeza de estofados utilizando técnicas de extração a vapor que removem profundamente sujeira, ácaros e bactérias."
      },
      {
        pergunta: "Oferecem serviços de organização?",
        resposta: "Sim, temos um serviço especializado em organização de ambientes, incluindo armários, despensas, guarda-roupas e áreas de trabalho. Trabalhamos com técnicas de organização profissional."
      }
    ]
  };

  return (
    <section className={Styles.faqSection}>
      <div className={Styles.containerFaq}>
        <h2 className={Styles.tituloFaq}>Tem alguma dúvida?</h2>
        <p className={Styles.subtituloFaq}>Confira as perguntas mais frequentes.</p>
        
        <div className={Styles.tabsFaq}>
          <button 
            className={`${Styles.tabFaq} ${categoriaAtiva === 'agendamento' ? Styles.tabFaqAtivo : ''}`}
            onClick={() => setCategoriaAtiva('agendamento')}
          >
            AGENDAMENTO
          </button>
          <button 
            className={`${Styles.tabFaq} ${categoriaAtiva === 'produtos' ? Styles.tabFaqAtivo : ''}`}
            onClick={() => setCategoriaAtiva('produtos')}
          >
            PRODUTOS E MATERIAIS
          </button>
          <button 
            className={`${Styles.tabFaq} ${categoriaAtiva === 'modalidades' ? Styles.tabFaqAtivo : ''}`}
            onClick={() => setCategoriaAtiva('modalidades')}
          >
            MODALIDADES DE FAXINA
          </button>
        </div>
        
        <div className={Styles.listaPerguntas}>
          {categorias[categoriaAtiva].map((item, index) => (
            <div key={index} className={Styles.itemPergunta}>
              <div 
                className={Styles.cabecalhoPergunta}
                onClick={() => togglePergunta(index)}
              >
                <p className={Styles.textoPergunta}>{item.pergunta}</p>
                <span className={`${Styles.iconeExpandir} ${perguntaAberta === index ? Styles.iconeExpandirAtivo : ''}`}>
                  +
                </span>
              </div>
              <div className={`${Styles.resposta} ${perguntaAberta === index ? Styles.respostaAtivo : ''}`}>
                <p className={Styles.textoResposta}>{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Duvida;