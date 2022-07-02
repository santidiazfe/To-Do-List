import React from 'react'
import { useEffect } from 'react'
import Tarea from './Tarea'

const ListadoTareas = ({tareas,setTarea, eliminarTarea}) => {

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {tareas && tareas.length  ? (
                <>
                <h2 className="font-semibold  text-[#103778] text-3xl text-center">Lista</h2>
                <p className="text-xl text-[#103778] mt-6 mb-10 text-center">
                Administra tus tareas    
                </p>
    
                {tareas.map((tarea) => {
                    return (
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                            setTarea={setTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                })}
                </>
            ) : (
                <>
                <h2 className="font-semibold text-[#103778] text-3xl text-center">No hay Tareas</h2>
                <p className="text-lg text-[#103778] mt-5 mb-10 text-center">
                Agrega tu primer tarea
                   
                </p>
                </>
            )}
        </div>
  )
}

export default ListadoTareas