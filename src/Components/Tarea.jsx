const Tarea = ({tarea,setTarea, eliminarTarea}) => {

    const {nombreTarea, fechaTarea, notaTarea, id } = tarea
    const handleEliminar = () => {
        const respuesta = confirm('Deseas elimnar esta tarea?');
        if (respuesta) {
            eliminarTarea(id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-[#F2D5D5] shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-[#103778] uppercase">Nombre: {''}
                <span className="font-normal text-black normal-case">{nombreTarea}</span>
            </p>

            <p className="font-bold mb-3 text-[#103778] uppercase">Fecha: {''}
                <span className="font-normal text-black normal-case">{fechaTarea}</span>
            </p>

            <p className="font-bold mb-3 text-[#103778] uppercase">Notas: {''}
                <span className="font-normal text-black normal-case">{notaTarea}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button 
                    type="button"
                    className="py-2 px-10 bg-[#103778] hover:bg-indigo-900 text-white font-bold uppercase rounded-lg"
                    onClick={() => setTarea(tarea)}
                >Editar</button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-700 hover:bg-red-500 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}

export default Tarea