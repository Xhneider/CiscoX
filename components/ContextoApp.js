import { createContext,useState } from "react";

export const Contexto = createContext()
export const Dispositivo= createContext()
export const Buscador=createContext()


export const Datos = ({children})=>{
    const [hidden,setHidden]=useState(false)
    const [dispositivo,setDispositivo]=useState(0)
    const [valor,Buscar]=useState('')
    return(
        <Contexto.Provider value={{hidden,setHidden}}>
            <Dispositivo.Provider value={{dispositivo,setDispositivo}}>
                <Buscador.Provider value={{valor,Buscar}}>
                    {children}
                </Buscador.Provider>
            </Dispositivo.Provider>
        </Contexto.Provider>
    )
}