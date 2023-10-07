import React, { createContext, useContext } from 'react'

const dataContext = createContext();

export function useDataShow({children}) {
    return useContext(dataContext)
}


function ContextShow() {



  return (
    <dataContext.Provider value={true}>
        {children}
    </dataContext.Provider>
  )
}

export default ContextShow