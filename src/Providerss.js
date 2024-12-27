import { createContext } from "react";
import { useState } from "react";
import React from 'react';

export const Contextuse = createContext()

export default function Providerss(props) {
    let [lists, setLists] = useState([])


    let data = { lists, setLists }

    return (
        <Contextuse.Provider value={data}>
            {props.children}
        </Contextuse.Provider>
    )
}
