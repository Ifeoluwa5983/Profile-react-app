import React, {useState} from 'react'
import Users from "./components/Users"

import {AppContainer} from "./styles/app"

export default function App() {
    const [search, setSearch] = useState('')
    return (
        <AppContainer>
            <input onChange={(e)=>setSearch(e.target.value)} />
            <Users search={search} />
        </AppContainer>
    )
}
