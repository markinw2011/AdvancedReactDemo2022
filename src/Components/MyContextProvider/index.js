import React, { useEffect, useState } from 'react'
import MyContext from '../../Context/my-context'

const MyContextProvider = ({ children }) => {

    const [name, setName] = useState(localStorage.getItem('name'))
    useEffect(() => {
        localStorage.setItem('name', name)
    }, [name])

    

    return (<MyContext.Provider value={{
        name,
        onChangeName: (value) => setName(value),
     }}>
            { children }
        </MyContext.Provider>)
}

export default MyContextProvider
