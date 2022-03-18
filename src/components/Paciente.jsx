const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const { nombre, propietario, email, date, texto, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar este paciente');

        if(respuesta){
            eliminarPaciente(id);
        }
    }

  return (
    <div className="bg-white shadow-md rounded-xl px-5 py-10 mb-5">
        <p className="font-bold mb-3 text-gray-600 uppercase">
                Nombre:
                <span className="font-normal">{nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-600 uppercase">
            Propietario:
            <span className="font-normal"> {propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-600 uppercase">
            Correo:
            <span className="font-normal"> {email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-600 uppercase">
            fecha alta:
            <span className="font-normal"> {date}</span>
        </p>
        <p className="font-bold mb-3 text-gray-600 uppercase">
            Sintomas:
            <span className="font-normal"> {texto}</span>
        </p>

        <div className="flex justify-between">
        <button 
        type="button" 
        className="py-2 px-10 bg-green-500 rounded-xl hover:bg-green-700 font-bold uppercase"
        onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button type="button" className="py-2 px-10 bg-red-500 rounded-xl hover:bg-red-700 font-bold uppercase"
            onClick={handleEliminar}
        >Eliminar</button>
        </div>
    </div>
  )
}

export default Paciente