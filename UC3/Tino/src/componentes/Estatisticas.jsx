import Styles from './css/Estatisticas.module.css'

function Estatisticas() {
    return (
        <section id={Styles.estatisticas_section}>
            <div id={Styles.container_estatisticas}>
                <div className={Styles.item_estatistica}>
                    <p className={Styles.texto_estatistica}>16 cidades atendidas</p>
                </div>
                
                <div className={Styles.separador}></div>
                
                <div className={Styles.item_estatistica}>
                    <p className={Styles.texto_estatistica}>+100 mil serviços realizados</p>
                </div>
                
                <div className={Styles.separador}></div>
                
                <div className={Styles.item_estatistica}>
                    <p className={Styles.texto_estatistica}>Embaixadoras do bem-estar selecionadas e treinadas</p>
                </div>
                
                <div className={Styles.separador}></div>
                
                <div className={Styles.item_estatistica}>
                    <p className={Styles.texto_estatistica}>4 anos consecutivos entre as melhores de Inovação e Impacto Social SEBRAE RN</p>
                </div>
            </div>
        </section>
    )
}

export default Estatisticas;
