import Styles from './css/MuralhasDaChina.module.css'
import ComponenteProps from './ComponenteProps'
import Bandeira_china from '../assets/imagens/bandeira-china.jpg'


function MuralhasDaChina(){
    return(

        <section className={Styles.fundo_muralhasdachina}>
            <h1>Venha conhecer as Muralhas da China!</h1>
            <ComponenteProps 
            lugar=" Muralha da China"
            texto="Embarque em uma viagem no tempo ao longo da Grande Muralha da China. Esta impressionante maravilha da engenharia se estende por montanhas e vales, oferecendo vistas panorâmicas de tirar o fôlego."
            bandeira={Bandeira_china}
            />
        </section>
        
    )
}

export default MuralhasDaChina