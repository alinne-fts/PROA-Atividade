import Styles from './css/Header.module.css'

function Header() {
  return (
    <header id={Styles.header_tino}>
        <div id={Styles.logo_container}>
            <div id={Styles.logo_icon}>tino</div>
            <h1 id={Styles.logo_texto}>tino</h1>
        </div>
        
        <nav id={Styles.menu_navegacao}>
            <a href="#" className={Styles.link_menu}>Para você</a>
            <a href="#" className={Styles.link_menu}>Para empresa</a>
            <a href="#" className={Styles.link_menu}>Trabalhe Conosco</a>
            <a href="#" className={Styles.link_menu}>Dúvidas</a>
        </nav>
        
        <div id={Styles.botoes_header}>
            <button id={Styles.botao_agendar} className={Styles.botao_primario}>Agendar faxina</button>
            <button id={Styles.botao_entrar} className={Styles.botao_secundario}>Entrar</button>
        </div>
    </header>
  )
}

export default Header

