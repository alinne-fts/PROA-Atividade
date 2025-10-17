import Styles from './css/Contato.module.css'
import What from '../assets/img/whats.png'
import Insta from '../assets/img/insta.png'
import Face from '../assets/img/face.png'


function Contato(){
    return(
        <section className={Styles.faixa_branca}>
            <div className={Styles.alinhamento_vermelho}>
                <div className={Styles.contato}>
                    <div className={Styles.digite}>
                        <label htmlFor="nome">Entre com o seu nome:</label>
                        <input type="text" id="nome" placeholder="Digite seu nome aqui:" />
                    </div>
                    <div className={Styles.digite}>
                        <label htmlFor="email">Entre com o seu e-mail:</label>
                        <input type="email" id="email" placeholder="Digite seu email aqui:" />
                    </div>
                    <div className={Styles.pedido}>
                        <textarea id="pedido" placeholder="Faça seu pedido por aqui:"></textarea>
                    </div>
                    <button>Enviar</button>
                </div>
                <div className={Styles.redes_sociais}>
                    <h2>Acesse também nossas redes sociais:</h2>
                    <div className={Styles.icone}>
                        <img src={What} alt="WhatsApp"/>
                        <img src={Insta} alt="Instagram"/>
                        <img src={Face} alt="Facebook"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contato