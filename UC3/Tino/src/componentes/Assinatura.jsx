import Styles from './css/Assinatura.module.css'

function Assinatura() {

  return (
        <section id={Styles.assinaturas_section}>
            <div id={Styles.container_assinaturas}>
                <h2 id={Styles.titulo_assinaturas}>Assinatura: facilidade e economia para você!</h2>
                
                <div id={Styles.grid_planos}>
                    <div className={Styles.card_plano}>
                        <h3 className={Styles.titulo_plano}>Quinzenal</h3>
                        <ul className={Styles.lista_beneficios_plano}>
                            <li>Economia de <strong>10% por mês</strong></li>
                            <li>Pagamento por serviço no Cartão de Crédito</li>
                            <li>Pré-reserva da sua Embaixadora favorita</li>
                            <li>Flexibilidade de reagendamentos</li>
                        </ul>
                    </div>
                    
                    <div className={`${Styles.card_plano} ${Styles.destaque}`}>
                        <div className={Styles.badge_popular}>
                            <span>Mais pedido</span>
                        </div>
                        <h3 className={`${Styles.titulo_plano} ${Styles.destaque}`}>Semanal</h3>
                        <ul className={`${Styles.lista_beneficios_plano} ${Styles.destaque}`}>
                            <li>Economia de <strong>12% por mês</strong></li>
                            <li>Pagamento por serviço no Cartão de Crédito</li>
                            <li>Pré-reserva da sua Embaixadora favorita</li>
                            <li>Flexibilidade de reagendamentos</li>
                        </ul>
                    </div>
                    
                    <div className={Styles.card_plano}>
                        <h3 className={Styles.titulo_plano}>Semanal Plus</h3>
                        <p className={Styles.subtitulo_plano}>(2x por semana)</p>
                        <ul className={Styles.lista_beneficios_plano}>
                            <li>Economia de <strong>15% por mês</strong></li>
                            <li>Pagamento por serviço no Cartão de Crédito</li>
                            <li>Pré-reserva da sua Embaixadora favorita</li>
                            <li>Flexibilidade de reagendamentos</li>
                        </ul>
                    </div>
                </div>
                
                <div id={Styles.campo_cep_assinatura}>
                    <p id={Styles.texto_cep}>Informe seu CEP para ver os valores</p>
                    <div id={Styles.container_input_cep}>
                        <input type="text" id={Styles.campo_cep_planos} placeholder="Digite seu CEP" />
                        <button id={Styles.botao_ver_valores_planos} className={Styles.botao_primario}>Ver valores</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Assinatura