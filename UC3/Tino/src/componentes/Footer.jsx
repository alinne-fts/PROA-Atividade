import Styles from './css/Footer.module.css'

function Footer() {

  return (
    <footer id={Styles.footer_tino}>
        <div id={Styles.container_footer}>
            <div id={Styles.info_empresa}>
                <div id={Styles.logo_footer}>
                    <div id={Styles.logo_icon_footer}>tino</div>
                    <h2 id={Styles.logo_texto_footer}>tino</h2>
                </div>
            </div>
            
            <div id={Styles.links_footer}>
                <div className={Styles.coluna_links}>
                    <h3 className={Styles.titulo_coluna}>Para você</h3>
                    <a href="#" className={Styles.link_footer}>Agendar faxina</a>
                    <a href="#" className={Styles.link_footer}>Nossas Embaixadoras</a>
                    <a href="#" className={Styles.link_footer}>Segurança e Garantia</a>
                </div>
                
                <div className={Styles.coluna_links}>
                    <h3 className={Styles.titulo_coluna}>Para sua empresa</h3>
                    <a href="#" className={Styles.link_footer}>Limpeza empresarial</a>
                    <a href="#" className={Styles.link_footer}>Influência</a>
                </div>
                
                <div className={Styles.coluna_links}>
                    <h3 className={Styles.titulo_coluna}>Dúvidas</h3>
                    <a href="#" className={Styles.link_footer}>Central de Ajuda</a>
                    <a href="#" className={Styles.link_footer}>Perguntas frequentes</a>
                </div>
                
                <div className={Styles.coluna_links}>
                    <h3 className={Styles.titulo_coluna}>Trabalhe conosco</h3>
                    <a href="#" className={Styles.link_footer}>Seja uma Embaixadora</a>
                </div>
            </div>
        </div>
        
        <div id={Styles.borda_footer}></div>
        
        <div id={Styles.container_rodape}>
            <div id={Styles.redes_sociais}>
                <a href="#" className={Styles.icone_rede}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="6" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
                        <path d="M3 10L12 15L21 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </a>
            </div>
            <p id={Styles.copyright}>© 2025 Tino. Todos os direitos reservados.</p>
        </div>
    </footer>
  )
}

export default Footer