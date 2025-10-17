import Styles from './css/QuemSomos.module.css'
import FotoLoja from '../assets/img/loja.jpg'


function QuemSomos(){
    return(
        <section>
            <div className={Styles.alinhamento_vermelho}>
                <div className={Styles.loja}>
                    <h2>Nossa Loja - Instrumentos Musicais</h2>
                    <br></br>
                    <p>Se você é um amante da música, está em busca de um novo instrumento e valoriza a qualidade, veio ao lugar certo! Aqui em nossa loja você encontra os melhores itens, como: teclado, piano (digital e acústico), contrabaixo, bateria, guitarra, violão, sopro e muito mais! Todos os nossos instrumentos possuem o selo de qualidade das melhores marcas do mercado. Escolha seus favoritos e receba em casa com todo o conforto que você merece. Confira nossas opções disponíveis e tenha em mãos instrumentos de ponta!</p>
                </div>
                <div className={Styles.foto_loja}>
                    <img src={FotoLoja} alt="loja de instrumento" className={Styles.foto_loja}/>
                </div>
            </div>
        </section>
    )
}

export default QuemSomos