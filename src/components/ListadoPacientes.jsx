import Pacientes from "./Pacientes"

const ListadoPacientes = ( { pacientes, setEditPacientes, eliminarPaciente } ) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length  ? ( 
          <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-lg mb-10 mt-5 text-center">
            Adminstra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          
                { pacientes.map( (paciente) => (
                      <Pacientes
                      key= { paciente.id }
                      paciente= { paciente }
                      setEditPacientes={setEditPacientes}
                      eliminarPaciente = {eliminarPaciente}
                      />
                      )
                ) }
                </>
         ) : (
          <>
          <h2 className="font-black text-center text-3xl">No existen aún  pacientes</h2>
          <p className="text-lg mb-10 mt-5 text-center">
           Empieza a agregar pacientes {""}
            <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
          </p>
          </>


         )}

      

            
    
    </div>
  )
}

export default ListadoPacientes