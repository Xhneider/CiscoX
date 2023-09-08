import { createContext,useState } from "react";

export const Contexto = createContext()

export const Datos = ({children})=>{
    const [hidden,setHidden]=useState(false)
    return(
        <Contexto.Provider value={{hidden,setHidden}}>
            {children}
        </Contexto.Provider>
    )
}