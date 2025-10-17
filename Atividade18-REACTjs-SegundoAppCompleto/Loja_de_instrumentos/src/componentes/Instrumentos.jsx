import Styles from './css/Instrumentos.module.css'
import Violao from '../assets/img/violao.jpg'


function Instrumentos(){
    return(
         <section className={Styles.faixa_branco}>
            <div className={Styles.alinhamento_branco}>
                <div className={Styles.vitrine}>
                    <img src={Violao} alt="violao"/>
                    <p>VIOLÃO YAMAHA C70 II CLÁSSICO</p>
                    <p>NYLON ACÚSTICO NATURAL</p>
                    <p>BRILHANTE</p>
                    <p className={Styles.preco}>R$ 989,50</p>
                </div>
                <div className={Styles.vitrine}>
                    <img src={Violao} alt="violao"/>
                    <p>VIOLÃO YAMAHA C70 II CLÁSSICO</p>
                    <p>NYLON ACÚSTICO NATURAL</p>
                    <p>BRILHANTE</p>
                    <p className={Styles.preco}>R$ 989,50</p>
                </div>
                <div className={Styles.vitrine}>
                    <img src={Violao} alt="violao"/>
                    <p>VIOLÃO YAMAHA C70 II CLÁSSICO</p>
                    <p>NYLON ACÚSTICO NATURAL</p>
                    <p>BRILHANTE</p>
                    <p className={Styles.preco}>R$ 989,50</p>
                </div>
                <div className={Styles.vitrine}>
                    <img src={Violao} alt="violao"/>
                    <p>VIOLÃO YAMAHA C70 II CLÁSSICO</p>
                    <p>NYLON ACÚSTICO NATURAL</p>
                    <p>BRILHANTE</p>
                    <p class="preco">R$ 989,50</p>
                </div>
            </div>
        </section>
    )
}

export default Instrumentos