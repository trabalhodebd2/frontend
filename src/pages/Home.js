import React, { useEffect, useState } from "react"
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from "../services/auttentication"
import { getHemos } from "../services/crudHemos"

import UserPhoto from "../components/UserPhoto"
import MenuLeft from "../components/MenuLeft"
import Search from "../components/Search"
import Cards from "../components/Cards"
import Map from "../components/Map"

export default () => {
    const [listHemos, setListHemos] = useState([])
    
    const promise = new Promise((resolve) => resolve());

    useEffect(() => {
        promise.then(setListHemos(getHemos()))
            .then(console.log(listHemos))
        if (!isAuthenticated()) return <Navigate to="/login/" />
    }, [])
        
    return (
        <>
            <MenuLeft button_position={1} />
            <section className="w-full h-full p-[3.75rem] page-start">
                <div className="w-full mb-9 flex">
                    <Search />
                    <UserPhoto />
                </div>
                <Cards />
                <Map listHemos={listHemos} />
            </section>
        </>
    )
}