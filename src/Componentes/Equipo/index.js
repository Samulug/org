import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    //Destructuracion
    const {colorPrimario, colorSecundario, titulo,id} = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props

    const colorFondo = {
        backgroundColor: hexToRgba (colorPrimario, 0.6)
    }
    const colorSub = {
        borderColor: colorPrimario
    }


return <> 
    { colaboradores.length > 0 &&
            <section className="equipo" style={colorFondo}>
                <input className="input-color"
                    type="color"
                    value={colorPrimario}
                    onChange={(evento) => { //Con esta funcion le decimos al navegador que nosotros tenemos el control de la funcion value
                    actualizarColor(evento.target.value, id)
                    }}
                />
            <h3 style={colorSub}>{titulo}</h3>
            <div className="colaboradores">
                {
                    colaboradores.map((colaborador,index) => <Colaborador 
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarColaborador={eliminarColaborador}
                    like={like}
                    />)
                }
            </div>
        </section>
    }
</>
}
export default Equipo