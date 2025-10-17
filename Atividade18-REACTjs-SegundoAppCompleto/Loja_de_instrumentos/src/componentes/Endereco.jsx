import Styles from './css/Endereco.module.css'


function Endereco(){
    return(
        <section className={Styles.faixa_marrom}>
            <div className={Styles.alinhamento_amarelo}>
                <div className={Styles.mapa}>
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.7957449076847!2d-46.70138!3d-23.527644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8ec861af58b%3A0x5d3f8b31d3c8f6a8!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                    ></iframe>
                </div>
                <div className={Styles.endereco}>
                    <h2>Nossa Loja - Instrumeneto Musicais</h2>
                    <br></br>
                    <p>Está localizada na Rua Tito, nº 54 - Pompéia, próximo ao Teatro Cacilda Becker. Funcionando em uma construção do século XIX, com 500m² de área, oferecemos uma ampla variedade de instrumentos em um ambiente acolhedor e familiar!</p>
                </div>
            </div>
        </section>
    )
}

export default Endereco