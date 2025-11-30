import Styles from './css/Sobre.module.css'
import sobre from '../assets/imagens/sobre.png'

function Sobre() {

  return (
        <section id={Styles.sobre_section}>
            <div id={Styles.container_sobre}>
                <div id={Styles.conteudo_sobre}>
                    <h2 id={Styles.titulo_sobre}>Sobre a Tino</h2>
                    
                    <p id={Styles.paragrafo_sobre_1}>
                        Na Tino, acreditamos que encontrar uma profissional de confiança para cuidar da sua casa deve ser algo simples, seguro e sem estresse. Por isso, desenvolvemos uma plataforma que conecta você a diaristas avaliadas, com base na sua necessidade e no dia que você tem disponível.
                    </p>
                    
                    <p id={Styles.paragrafo_sobre_2}>
                        Mais do que facilitar o agendamento de uma faxina, oferecemos suporte em tempo real, pagamento seguro e a tranquilidade de contar com o respaldo de uma empresa que está ao seu lado em toda a jornada. Tudo isso com impacto social positivo e respeito pela rotina do seu lar ou empresa.
                    </p>
                </div>
                <div id={Styles.imagem_sobre}>
                    <img src={sobre} alt="Profissional de limpeza" id="foto_profissional" />
                </div>
            </div>
        </section>
    )
}

export default Sobre