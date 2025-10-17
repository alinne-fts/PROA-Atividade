import Styles from './css/Home.module.css'
import HomeImage from '../assets/img/guitarras_header.jpg'

function Home(){
    return(
        <header>
            <img src={HomeImage} alt="Imagem de fundo da página inicial" className={Styles.imagem_home} />
            <nav>
                <a href="#home">Home</a>    
                <a href="#instrumentos">Instrumentos</a>    
                <a href="#quem-somos">Quem Somos</a>    
                <a href="#endereco">Endereço</a>    
                <a href="#contato">Contato</a>  
                <a href="#home">Home</a>    
            </nav>
        </header>
    )
}

export default Home