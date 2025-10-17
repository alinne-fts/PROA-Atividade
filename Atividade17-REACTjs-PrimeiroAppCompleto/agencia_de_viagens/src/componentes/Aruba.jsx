import Styles from './css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_aruba from '../assets/imagens/bandeira-aruba.jpg'

function Aruba(){
    return(

        <section className={Styles.fundo_aruba}>
            <h1>Venha conhecer a Aruba!</h1>
            <ComponenteProps
            lugar=" Aruba"
            texto="Descubra Aruba, a ilha feliz do Caribe. Com praias de areia branca e um mar azul-turquesa cristalino, é o paraíso perfeito para relaxar sob o sol. Deixe-se levar pela brisa constante e pela atmosfera acolhedora. Suas férias dos sonhos esperam por você aqui."
            bandeira={Bandeira_aruba}
            />
        </section>
        
    )
}

export default Aruba 