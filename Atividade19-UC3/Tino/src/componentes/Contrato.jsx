import Styles from './css/Contrato.module.css'

function Contrato() {

  return (
        <section id={Styles.como_contratar_section}>
            <div id={Styles.container_contratar}>
                <h2 id={Styles.titulo_contratar}>Como contratar sua faxina?</h2>
                
                <div id={Styles.passos_container}>
                    <div className={Styles.passo_item}>
                        <div className={Styles.passo_numero}>1º PASSO</div>
                        <h3 className={Styles.passo_titulo}>Escolha o tipo de serviço</h3>
                        <p className={Styles.passo_descricao}>Selecione o tipo de limpeza que melhor atende às suas necessidades, seja limpeza padrão, pesada, passadoria, ou qualquer outro serviço adicional que oferecemos.</p>
                    </div>
                    
                    <div className={Styles.linha_conexao}></div>

                    <div className={Styles.passo_item}>
                        <div className={Styles.passo_numero}>2º PASSO</div>
                        <h3 className={Styles.passo_titulo}>Personalize os detalhes</h3>
                        <p className={Styles.passo_descricao}>Informe seu endereço, escolha a data e horário que melhor se encaixam na sua rotina, e adicione qualquer instrução especial que nossos profissionais precisam saber.</p>
                    </div>

                    <div className={Styles.linha_conexao}></div>
                    
                    <div className={Styles.passo_item}>
                        <div className={Styles.passo_numero}>3º PASSO</div>
                        <h3 className={Styles.passo_titulo}>Agora é só finalizar e relaxar!</h3>
                        <p className={Styles.passo_descricao}>Revise os detalhes do seu pedido, faça o pagamento online de forma segura e pronto! Agora é só aguardar enquanto cuidamos de tudo para você.</p>
                    </div>
                </div>
                
                <div id={Styles.botao_agendar_container}>
                    <button id={Styles.botao_agendar_faxina} className={Styles.botao_principal}>Agendar faxina</button>
                </div>
            </div>
        </section>
    )
}

export default Contrato