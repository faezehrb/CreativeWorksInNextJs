'use client'
import React, { createContext, useContext, useState } from "react"

const AppContext = createContext<any>(undefined)

export function AppWrapper({children} : { children: React.ReactNode }){

    let [ nightMode, setNightMode ] = useState<boolean>(false)

    return (
        <AppContext.Provider  value = {{ nightMode, setNightMode }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext () {

    return useContext(AppContext)

}