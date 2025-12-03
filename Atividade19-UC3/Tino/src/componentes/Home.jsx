import Styles from './css/Home.module.css'
import FotoHome from '../assets/imagens/imagem_home.png'

function Home() {
  return (
      <section id={Styles.hero_section}>
        <div id={Styles.conteudo_hero}>  
            <h2 id={Styles.titulo_hero}>
                Contrate <span id={Styles.destaque_faxinas}>faxinas</span> residenciais e empresariais em poucos cliques
            </h2>
            <p id={Styles.subtitulo_hero}>Encontre as melhores profissionais de limpeza da sua região</p>
            
            <div id={Styles.campo_busca}>
                <input type="text" id={Styles.campo_cep} placeholder="Digite seu CEP" />
                <button id={Styles.botao_ver_valores} className={Styles.botao_primario}>Ver valores</button>
            </div>
            
            <div id={Styles.preco_info}>
                Faxinas a partir de R$ 99,90
            </div>
        </div>
        
        <div id={Styles.imagem_Home}>
                <img src={FotoHome} alt="Profissional de limpeza" id="foto_profissional" />
        </div>
    </section>
  )
}

export default Home