import { useState, useEffect } from 'react';
import Pacientes from './Pacientes';
import Error from './error';
const Formulario = ({ pacientes, setPacientes, editPacientes, setEditPacientes}) => {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

        useEffect( ( ) => {
            if (Object.keys(editPacientes).length > 0) {
            setMascota(editPacientes.mascota )    
            setPropietario(editPacientes.propietario )    
            setEmail(editPacientes.email )    
            setFecha(editPacientes.fecha )    
            setSintomas(editPacientes.sintomas )    
            }
        }, [editPacientes] )


    const generarId = ( ) => {
        const random = Math.random().toString(36).slice(2)
        const fecha = Date.now().toString(36) 


        return  random + fecha
    }

            const handelSubmit = (e) => {
                e.preventDefault();

                    // Validación de formulario 
                        if ( [mascota, propietario, email, fecha, sintomas].includes("") ) {
                                setError(true)
                                return;
                        } 
                        
                        setError(false)

                        //  OBJETO PACIENTES 
                            const objetoPacientes = {
                                mascota,
                                propietario,
                                email,
                                fecha,
                                sintomas,
                                id: generarId()
                            }

                            
                            if(editPacientes.id) {
                                // editando registro
                                objetoPacientes.id = editPacientes.id
                           
                                const pacientesActualizados = pacientes.map( editPacientesState => editPacientesState.id === editPacientes.id ? objetoPacientes : editPacientesState )

                                setPacientes(pacientesActualizados)
                                setEditPacientes( { } )
                            } else {
                                // creando nuevo registro
                                objetoPacientes.id = generarId()  
                                setPacientes([...pacientes , objetoPacientes]);
                                }

                            //   Reiniciar el formulario

                            setMascota("")
                            setPropietario("")
                            setEmail("")
                            setFecha("")
                            setSintomas("")
            }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5">

            <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {""} <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form 
                className="bg-white shadow-lg rounded-lg px-10 py-5 mb-12"
                onSubmit={handelSubmit}
                >
                        { error && <Error>
                                            <p> Todos los campos son obligatorios </p>
                                            <h1 className='text-black'> Gracias por tu entendimiento</h1>
                                            </Error> }
                        {/* Los paréntesis son obligatorios 👆🏻 */}
                <div className="mb-7"> 
                    <label htmlFor="mascota" className="block font-bold uppercase text-gray-700"> Nombre Mascota </label>    
                    <input 
                        type="text" 
                        placeholder="Nombre de la mascota" 
                        id="mascota"
                        className="border-2 rounded-lg w-full mt-2 p-2 placeholder-gray-400"
                        value={mascota}
                        onChange= { (e) => setMascota(e.target.value)}
                        />
                </div>
                
                <div className="mb-7">
                    <label htmlFor="propietario" className="block font-bold uppercase text-gray-700"> Nombre del Propietario</label>    
                    <input 
                        type="text" 
                        placeholder="Nombre del Propietario" 
                        id="propietario"
                        className="border-2 rounded-lg w-full mt-2 p-2 placeholder-gray-400"
                        value={propietario}
                        onChange= { (e) => setPropietario(e.target.value)}
                        />
                </div>

                <div className="mb-7">
                    <label htmlFor="email" className="block font-bold uppercase text-gray-700"> E-Mail </label>    
                    <input 
                        type="email" 
                        placeholder="Correo Electrónico" 
                        id="email"
                        className="border-2 rounded-lg w-full mt-2 p-2 placeholder-gray-400"
                        value={email}
                        onChange= { (e) => setEmail(e.target.value)}
                        />
                </div>

                <div className="mb-7">
                    <label htmlFor="alta" className="block font-bold uppercase text-gray-700"> Alta </label>    
                    <input 
                        type="date" 
                        id="alta"
                        className="border-2 rounded-lg w-full mt-2 p-2 placeholder-gray-400"
                        value={fecha}
                        onChange= { (e) => setFecha(e.target.value)}
                        />
                </div>

                <div className="mb-7">
                    <label htmlFor="sintomas" className="block font-bold uppercase text-gray-700"> Síntomas </label>    
                    <textarea 
                    className="border-2 rounded-lg w-full mt-2 p-2 placeholder-gray-400" 
                    id="sintomas" 
                    placeholder="Describe los Síntomas"
                    value={sintomas}
                    onChange= { (e) => setSintomas(e.target.value)}
                         />
                </div>

                <input type="submit" value={editPacientes.id ? "Editar Paciente" : "Agregar Paciente"} className="bg-indigo-600 text-white font-bold uppercase w-full p-3 hover:bg-indigo-700 cursor-pointer transition-colors rounded-2xl" />
            </form>

            </div>
    )
}

export default Formulario
