import Styles from './css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_escocia from '../assets/imagens/bandeira-escocia.jpg'

function Escocia(){
    return(

        <section className={Styles.fundo_escocia}>
            <h1>Venha conhecer a Escocia!</h1>
            <ComponenteProps 
            lugar=" Escocia"
            texto="Descubra a Escócia, uma terra de lendas e paisagens de tirar o fôlego. Aqui, castelos medievais imponentes se erguem sobre vales verdes, lagos misteriosos refletem o céu e a cultura vibrante das cidades como Edimburgo cativa a cada esquina."
            bandeira={Bandeira_escocia}
            />
        </section>
        
    )
}

export default Escocia 