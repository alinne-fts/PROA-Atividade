import Styles from './css/GrandCanyon.module.css'
import ComponenteProps from './ComponenteProps'
import Bnadeira_EUA from '../assets/imagens/bandeira-estados-unidos.jpg'

function GrandCanyon(){
    return(

        <section className={Styles.fundo_grandcanyon}>
            <h1>Venha conhecer Grand Canyon!</h1>
            <ComponenteProps 
            lugar=" Grand Canyon"
            texto="Descubra a grandiosidade do Grand Canyon, uma paisagem monumental esculpida pela natureza ao longo de milhões de anos. Caminhe por suas bordas, contemple vistas panorâmicas de tirar o fôlego e assista a um pôr do sol que pinta as rochas com tons de vermelho e laranja."
            bandeira={Bnadeira_EUA}
            />
        </section>
        
    )
}

export default GrandCanyon 