import {Link} from 'react-router-dom'
import Styles from './css/Header.module.css'
import Viagens from '../assets/imagens/viagens.jpg'
import Lupa from '../assets/imagens/lupa.png'

function Header(){
    return(
        <header>
            <img src={Viagens} alt="Logo da empresa" className={Styles.img_viagens} />
            <nav className={Styles.menu_header}>
                <Link to='/'>Home</Link>
                <Link to='/Escocia'>Escócia</Link>
                <Link to='/GrandCanyon'>Grand Canyon</Link>
                <Link to='/MuralhasDaChina'>Muralhas da China</Link>
                <Link to='/Aruba'>Aruba</Link>

            </nav>

            <div className={Styles.busca}>
                <input type="search"/>
            </div>

            <img src={Lupa} alt="Lupinha" className={Styles.lupa}/>


        </header>



    )
}

export default Header