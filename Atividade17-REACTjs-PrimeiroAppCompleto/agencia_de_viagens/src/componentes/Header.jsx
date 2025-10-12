
import Styles from './css/Header.module.css'
import Viagens from '../assets/imagens/viagens.jpg'
import Lupa from '../assets/imagens/lupa.png'

function Header(){
    return(
        <header>
            <img src={Viagens} alt="Logo da empresa" className={Styles.img_viagens} />
            <nav className={Styles.menu_header}>
                <a href='#'>Home</a>
                <a href='#'>Escocia</a>
                <a href='#'>Grand Canyon</a>
                <a href='#'>Muralhas da China</a>
                <a href='#'>Aruba</a>
            </nav>

            <div className={Styles.busca}>
                <input type="search"/>
            </div>

            <img src={Lupa} alt="Lupinha" className={Styles.lupa}/>


        </header>



    )
}

export default Header