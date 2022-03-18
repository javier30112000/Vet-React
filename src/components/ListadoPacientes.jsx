import {useState, useEffect} from "react";
import Paciente from "./Paciente";

function Listado ({paciente, setPaciente,eliminarPaciente}){

    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5  md:h-screen overflow-y-scroll">

            {paciente.length === 0 ? (
                <>
                    <h1 className="font-black text-3xl text-center">
                    Listado Pacientes
                </h1>

                <p className="text-xl mt-5 text-center">
                    No hay <span className="text-indigo-600 font-bold"> pacientes</span>
                </p>

                </>
            ) : (
                <>
                    <h1 className="font-black text-3xl text-center">
                    Listado Pacientes
                </h1>

                <p className="text-xl mt-5 text-center">
                    Administra tus <span className="text-indigo-600 font-bold"> pacientes y citas</span>
                </p>

                {paciente.map( (it) =>{
                    return(
                        <Paciente key={it.id} paciente= {it} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                    )
                })}
                </>
            )}
            
            
            
        </div>
    )
}

export default Listado;