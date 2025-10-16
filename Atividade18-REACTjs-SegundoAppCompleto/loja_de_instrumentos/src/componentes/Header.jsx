import Styles from './css/Header.module.css'
import Guitarras from '../assets/img/guitarras_header'

function Header(){
    return(
        <header className={Styles_home}>
            <img src={Guitarras} alt="imagem do header"/>
            <nav className={Styles.menu_header}>
                <a href="#home">Home</a>    
                <a href="#quem-somos">Quem Somos</a>    
                <a href="#instrumentos">Instrumentos</a>
                <a href="#endereco">Endereço</a>    
                <a href="#contato">Contato</a>  
            </nav>
        </header>
    )
}

export default Header