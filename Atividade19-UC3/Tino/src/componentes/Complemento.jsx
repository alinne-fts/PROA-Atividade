import Styles from './css/Complemento.module.css'

function Complemento() {

   return (
        <section id={Styles.opcoes_adicionais_section}>
            <div id={Styles.container_opcoes}>
                <div id={Styles.conteudo_opcoes}>
                    <h2 id={Styles.titulo_opcoes}>
                        <span className={Styles.destaque_azul}>Com a Tino</span> você pode mais!
                    </h2>
                    <p id={Styles.subtitulo_opcoes}>Complemente a limpeza do seu espaço com nossos opcionais</p>
                    <button id={Styles.botao_agendar_opcoes} className={Styles.botao_primario}>Quero agendar</button>
                </div>
                
                <div id={Styles.container_opcoes_carousel}>
                    
                    <div id={Styles.carousel_opcoes}>
                        <div className={Styles.card_opcional}>
                            <p className={Styles.texto_opcional}>Limpar armários</p>
                        </div>
                        
                        <div className={Styles.card_opcional}>
                            <p className={Styles.texto_opcional}>Passar roupa</p>
                        </div>
                        
                        <div className={Styles.card_opcional}>
                            <p className={Styles.texto_opcional}>Lavar louça acumulada</p>
                        </div>
                        
                        <div className={Styles.card_opcional}>
                            <p className={Styles.texto_opcional}>Limpar área externa</p>
                        </div>
                        
                        <div className={Styles.card_opcional}>
                            <p className={Styles.texto_opcional}>Limpar forno</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Complemento