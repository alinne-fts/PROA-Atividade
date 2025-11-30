import Styles from './css/Solucaoes.module.css'
import Ffaxina from '../assets/imagens/faxina.png'
import Fpre from '../assets/imagens/pre-mudanca.png'
import Fcomplexa from '../assets/imagens/complexa.png'

function Solucoes() {

   return (
        <section id={Styles.solucoes_section}>
            <div id={Styles.container_solucoes}>
                <h2 id={Styles.titulo_solucoes}>Soluções personalizadas para suas necessidades</h2>
                
                <div id={Styles.container_carousel}>
                    <div id={Styles.carousel_cards}>
                        <div className={Styles.card_servico}>
                            <div className={Styles.imagem_card}>
                                <img src={Ffaxina} alt="Profissional de limpeza" id="foto_profissional" />
                            </div>
                            <div className={Styles.conteudo_card}>
                                <h3 className={Styles.titulo_card}>Faxina Padrão</h3>
                                <button className={Styles.botao_agendar_servico}>Agendar serviço</button>
                                <p className={Styles.preco_servico}>a partir de <strong>R$ 117,90</strong></p>
                            </div>
                        </div>
                        
                        <div className={Styles.card_servico}>
                            <div className={Styles.imagem_card}>
                                <img src={Fpre} alt="Profissional de limpeza" id="foto_profissional" />
                            </div>
                            <div className={Styles.conteudo_card}>
                                <h3 className={Styles.titulo_card}>Faxina Pré-mudança</h3>
                                <button className={Styles.botao_agendar_servico}>Agendar serviço</button>
                                <p className={Styles.preco_servico}>a partir de <strong>R$ 152,90</strong></p>
                            </div>
                        </div>
                        
                        <div className={Styles.card_servico}>
                            <div className={Styles.imagem_card}>
                                <img src={Fcomplexa} alt="Profissional de limpeza" id="foto_profissional" />
                            </div>
                            <div className={Styles.conteudo_card}>
                                <h3 className={Styles.titulo_card}>Faxina Complexa</h3>
                                <button className={Styles.botao_agendar_servico}>Agendar serviço</button>
                                <p className={Styles.preco_servico}>a partir de <strong>R$ 158,90</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solucoes;