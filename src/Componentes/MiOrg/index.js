import{ useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //useState()
    //const[nombreVariable, funcionActualiza] = useState(ValorInicial)
    return <section className="orgSection">
        <h3 className="tittle">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg