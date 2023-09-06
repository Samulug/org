import { useState } from 'react';
import {v4 as uuid} from "uuid"
import hexToRgba from 'hex-to-rgba';
import './App.css';
import Header from './Componentes/Header/Header';
import Formulario from './Componentes/Formulario/Formulario';
import MiOrg from './Componentes/MiOrg';
import Equipo from './Componentes/Equipo';
import Footer from './Componentes/Footer';


function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Programacion",
    foto:"https://github.com/Samulug.png",
    nombre:"Samuel Rodriguez",
    puesto:"Aprendis"
    ,fav:true,
    },
    {
      id: uuid(),
      equipo: "Front End",
      foto:"https://github.com/harlandlohora.png",
      nombre:"Harland Lohora",
      puesto:"Instructor en Alura Latam"
      ,fav:false,
    },
    {
      id: uuid(),
      equipo: "Movil",
      foto:"https://github.com/JeanmarieAluraLatam.png",
      nombre:"Jeanmarie Quijada",
      puesto:"Instructora en Alura Latam"
      ,fav:false,

    },
    {
      id: uuid(),
      equipo:"Devops",
      foto:"https://github.com/christianpva.png",
      nombre:"Christian Velasco",
      puesto:"Head de Alura e instructor"
      ,fav:false,

    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto:"https://github.com/JoseDarioGonzalezCha.png",
      nombre:"Jose Gonzalez",
      puesto:"Dev. FullStack"
      ,fav:false,

    },
  ])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programacion",
      colorPrimario:"#57C278",
      colorSecundario:"#D9F7E9",
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario:"#82CFFA",
      colorSecundario:"#E8F8FF",
    },
    {
      id: uuid(),
      titulo:"Data Sciense",
      colorPrimario:"#A6D157",
      colorSecundario:"#F0F8E2",
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario:"#FDE7E8",
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario:"#DB6EBF",
      colorSecundario:"#FAE9F5",
    },
    {
      id: uuid(),
      titulo:"Movil",
      colorPrimario:"#FFBA05",
      colorSecundario:"#FFF5D9",
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario:"#FFEEDF",
    },
 ])



  //Ternario --> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log ("Nuevo Colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])// los ..."" es para copiar algo
  }

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
      console.log("Eliminar Colaborador", id)
      const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
      actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor = (color,id) => {
    console.log("actualizar: ",color, id)
    const equiposActualizador = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizador)
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }

  //Dar like
  const like = (id) => {
      const colaboradoresActualizados = colaboradores.map ((colaborador) => {
        if (colaborador.id === id){
          colaborador.fav = !colaborador.fav
        }
        return colaborador
      })
      actualizarColaboradores(colaboradoresActualizados)
  }
 
  return (  
    <div>
    <Header/>

    {mostrarFormulario === true ? 
    <Formulario 
    equipos={equipos.map((equipo) => equipo.titulo)}
    registrarColaborador={registrarColaborador}
    crearEquipo={crearEquipo}
    /> :<></>}
    <MiOrg cambiarMostrar={cambiarMostrar}/>
    {
      equipos.map((equipo) =><Equipo 
      datos={equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo )}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />) //CADA VEZ QUE SE TRABAJA CON MAP SE UTILIZA KEY={}
    } 
    <Footer/>
    </div>
  );
}

export default App;
