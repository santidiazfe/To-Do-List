import { useState, useEffect } from 'react';
import Error from './Error'

const  FormTarea = ({tareas, setTareas , tarea, setTarea}) => {

    const [nombreTarea, setNombreTarea] = useState('')
    const [fechaTarea, setFechaTarea] = useState('')
    const [notaTarea, setNotaTarea] = useState('')

    const [error, setError] = useState(false)
    
    useEffect(() => { 
        if ( Object.keys(tarea).length > 0 ) {
            setNombreTarea(tarea.nombreTarea)
            setFechaTarea(tarea.fechaTarea)
            setNotaTarea(tarea.notaTarea)
        }   
    },[tarea])
    

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validar el Formulario

        if([nombreTarea, fechaTarea].includes('')) {
            setError(true)
            return;
        }

        setError(false) 
        
        const objetoTarea = {
            nombreTarea, 
            fechaTarea, 
            notaTarea
    
        }

        if (tarea.id) {
           //Editando Registro

           objetoTarea.id = tarea.id
           console.log(objetoTarea)
           console.log(tarea)

           const tareasActualizadas = tareas.map( tareaState => tareaState.id ===
            tarea.id ? objetoTarea : tareaState  )

            setTareas(tareasActualizadas)
            setTarea({})

          
        }
        else {
            //Nuevo Registro
            objetoTarea.id = generarId();
            setTareas([...tareas,objetoTarea])
        }

        

        //Reiniciar Formulario
        setNombreTarea('')
        setFechaTarea('')
        setNotaTarea('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-semibold text-3xl text-[#103778] text-center">Tareas</h2>

            <p className="text-lg mt-5 text-center font-lightbold text-[#103778] mb-10">
            Añadir tareas   
            </p>

            {error && <Error />}

            <form onSubmit={handleSubmit} className="bg-[#F2D5D5] shadow-md rounded-lg py-10 px-5 mb-10">
                <div className="mb-5">
                    <label htmlFor="nombreTarea" className="block text-[#103778] uppercase font-bold">Nombre:</label>
                    <input
                        id="nombreTarea"
                        type="text"
                        className="border-2 w-full p-2 mt-2 border-[#103778] rounded-md"
                        value={nombreTarea}
                        onChange={(e) => {setNombreTarea(e.target.value)}}>
                    </input> 
                </div>

                <div className="pb-[15px]">
                    <label htmlFor="fecha" className="block text-[#103778] uppercase font-bold">Fecha:</label>
                    <input
                        id="fecha"
                        type="date"
                        className="border-2 w-full p-2 mt-2 border-[#103778] rounded-md"
                        value={fechaTarea}
                        onChange={(e) => {setFechaTarea(e.target.value)}}>
                    </input>
                </div>

                <div className="pb-[10px]">
                    <label htmlFor="nota" className="block text-[#103778] uppercase font-bold">Notas:</label>
                    <textarea
                        id="nota"
                        className="border-2 w-full p-2 mt-2 border-[#103778] rounded-md"
                        value={notaTarea}
                        onChange={(e) => {setNotaTarea(e.target.value)}}>
                    </textarea>
                </div>

                <div>
                    <input
                        type="submit"
                        className="bg-[#103778] w-full p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-colors"
                        value= { tarea.id ? "Editar Tarea" : "Agregar Tarea"}
                        >
                        
                    </input>    
                </div>        
            </form>
        </div>
    )
}

export default FormTarea;