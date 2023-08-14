import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoPacientes from './components/ListadoPacientes'



function App() {
      const initial = JSON.parse(localStorage.getItem('pacientes')) ?? [ ];

    const [ pacientes , setPacientes ] = useState([initial]);
    const [ editPacientes, setEditPacientes ] = useState( { } )
       

      useEffect( ( ) => {
          localStorage.setItem('pacientes', JSON.stringify(pacientes));
      }, [pacientes] )


    const eliminarPaciente = id => {
        const pacientesActualizados = pacientes.filter( editPacientes => editPacientes.id !== id);
        setPacientes(pacientesActualizados) 
    }

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      
      <div className='mt-12 md:flex'>
        <Formulario
        pacientes = { pacientes }
        setPacientes = { setPacientes }
        editPacientes={editPacientes}
        setEditPacientes={setEditPacientes}
        />
        <ListadoPacientes
          pacientes = {pacientes}
          setEditPacientes = {setEditPacientes}
          eliminarPaciente = {eliminarPaciente }
        />
      </div>
    </div>
  )
}

export default App  
