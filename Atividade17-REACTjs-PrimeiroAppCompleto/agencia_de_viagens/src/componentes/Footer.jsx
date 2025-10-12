import Styles from './css/Footer.module.css'
import Insta from '../assets/imagens/insta.png'
import Face from '../assets/imagens/face.png'
import Tiktok from '../assets/imagens/tiktok.png'
import What from '../assets/imagens/whtas.png'
function Footer(){
    return(
        <footer className={Styles.fundo_footer}>

            <h6 className={Styles.texto_footer}>Siga-nos em nossas redes socias</h6>
            <div className={Styles.icones}>
                <img src={Insta} alt="instagram" className={Styles.icone} />
                <img src={Face} alt="Facebbok" className={Styles.icone} />
                <img src={Tiktok} alt="Tik tok" className={Styles.icone} />
                <img src={What} alt="Whatsapp" className={Styles.icone} />
            </div>
            <h6 className={Styles.texto_footer}>Telefone de contato: (11)9555 - 3355</h6>
        </footer>
    )
}

export default Footer 
