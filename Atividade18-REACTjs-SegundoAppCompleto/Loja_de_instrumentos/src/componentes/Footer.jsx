import Styles from './css/Footer.module.css'
import What from '../assets/img/whats.png'
import Insta from '../assets/img/insta.png'
import Face from '../assets/img/face.png'

function Footer(){
    return(
        <footer>
            <h6>Nossa Loja - Instrumentos Musicais</h6>
            <p>Rua Tito 54 - Lapa</p>
            <p>São Paulo - Brasil</p>
            <div className={Styles.rede_footer}>
                <img src={What} alt="whats"/>
                <img src={Insta} alt="instagram"/>
                <img src={Face} alt="facebook"/>
            </div>
        </footer>
    )
}

export default Footer