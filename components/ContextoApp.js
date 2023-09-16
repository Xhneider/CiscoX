import { createContext,useState } from "react";

export const Contexto = createContext()
export const Dispositivo= createContext()
export const Datos = ({children})=>{
    const [hidden,setHidden]=useState(false)
    const [dispositivo,setDispositivo]=useState(0)
    return(
        <Contexto.Provider value={{hidden,setHidden}}>
            <Dispositivo.Provider value={{dispositivo,setDispositivo}}>
                {children}
            </Dispositivo.Provider>
        </Contexto.Provider>
    )
}