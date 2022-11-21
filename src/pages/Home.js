import React, { useEffect, useState } from "react"
import { Navigate, useParams } from 'react-router-dom'
import { isAuthenticated } from "../services/auttentication"
import { getHemos, getHemosById } from "../services/crudHemos"

import UserPhoto from "../components/UserPhoto"
import MenuLeft from "../components/MenuLeft"
import Search from "../components/Search"
import Cards from "../components/Cards"
import Map from "../components/Map"

export default () => {
    const [listHemos, setListHemos] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const updateList = async () => {
                const hemo = await getHemosById(id)
                setListHemos([hemo])
            }
    
            updateList()
        } else {
            const updateList = async () => {
                const allHemos = await getHemos()
                setListHemos(allHemos.features)
            }
    
            updateList()
        }
        
        if (!isAuthenticated()) return <Navigate to="/login/" />
    }, [])

    const funcCenter = () => {
        const element = listHemos[0]
        if (element) {
            return {
                lat: element.geometry.coordinates[0],
                lng: element.geometry.coordinates[1]
            }
        }
    }
        
    return (
        <>
            <MenuLeft button_position={1} />
            <section className="w-full h-full p-[3.75rem] page-start">
                <div className="w-full mb-9 flex">
                    <Search />
                    <UserPhoto />
                </div>
                <Cards />
                <Map listHemos={listHemos} center={funcCenter()} />
            </section>
        </>
    )
}