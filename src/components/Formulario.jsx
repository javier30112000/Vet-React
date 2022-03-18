import {useState, useEffect} from "react";
import Error from "./Error";

function Formulario ({pacientes, setPacientes, paciente, setPaciente}){

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [texto, setTexto] = useState('');

    const [error, setError] = useState(false);

    useEffect(()=>{
        if(Object.keys(paciente).length > 0){
            console.log(paciente);
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setDate(paciente.date);
            setTexto(paciente.texto);
        }
    },[paciente])

    const generarId = () =>{
        const random = Math.random().toString().substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre, propietario, email, date, texto].includes("")){
            //hay almenos un campo vacio
            setError(true);
        }else{
            //todos los campos estan llenos
            setError(false);

            const objetoPaciente = {
                nombre, 
                propietario, 
                email, 
                date, 
                texto
            }

            if(paciente.id){
                //editar 
                objetoPaciente.id = paciente.id;

                const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState) 

                setPacientes(pacientesActualizados);
                setPaciente({});
            }else{
                //nuevo registro
                objetoPaciente.id = generarId();
                setPacientes([...pacientes, objetoPaciente]);

            }

            
            setNombre("");
            setPropietario("");
            setEmail("");
            setDate("");
            setTexto("");
        }
    }

    return (
        <div className="w-1/2 lg:w-3/5">
            <h2 className="font-black text-3xl">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-center">
                Anade Pacientes
                <span className="text-indigo-500 font-bold"> y administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-10">
                {error && <Error mensaje="debes de completar todos los campos" />
                

                }
                <div className="text-center mb-5">
                    <label htmlFor="mascota" className="block text-gray-500">Nombre Mascota</label>
                    <input id="mascota"
                     type="text" 
                     value = {nombre} 
                     onChange={ (e) => setNombre(e.target.value)} 
                     
                     placeholder="Nombre de la mascota" 
                     className="border-2 w-full p-2 mt-2 placeholder-gray-800">
                     </input>
                </div>
                <div className="text-center mb-5">
                    <label htmlFor="propietario" className="block text-gray-500">Nombre propietario</label>
                    <input id="propietario" type="text" value = {propietario} onChange = {(e) => setPropietario(e.target.value)} placeholder="Nombre del propietario" className="border-2 w-full p-2 mt-2 placeholder-gray-800"></input>
                </div>
                <div className="text-center mb-5">
                    <label htmlFor="email" className="block text-gray-500">Email</label>
                    <input id="email" type="email" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder="Email" className="border-2 w-full p-2 mt-2 placeholder-gray-800"></input>
                </div>
                <div className="text-center mb-5">
                    <label htmlFor="date" className="block text-gray-500">Fecha</label>
                    <input id="date" type="date" value = {date} onChange = {(e) => setDate(e.target.value)}className="border-2 w-full p-2 mt-2 placeholder-gray-800"></input>
                </div>
                <div className="text-center mb-5">
                    <label htmlFor="texto" className="block text-gray-500">Descripcion</label>
                    <textarea id="texto" value = {texto} onChange = {(e) => setTexto(e.target.value)} placeholder="Descrive los sintomas" className="border-2 w-full p-2 mt-2 placeholder-gray-800"></textarea>
                </div>
                <input type="submit" value={paciente.id ? 'editar paciente' : 'agregar paciente'} className="bg-indigo-500 w-full rounded-xl text-white font-bold hover:bg-indigo-700 cursor-pointer transition-colors" />

            </form>
        </div>
    )
}

export default Formulario;