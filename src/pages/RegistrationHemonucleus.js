import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from 'react-router-dom'
import { getValuesOfElement } from "../services/elements"
import { isAuthenticated } from "../services/auttentication"
import { postHemos } from "../services/crudHemos"

import UserPhoto from "../components/UserPhoto"
import DivButton from "../components/DivButton"
import MenuLeft from "../components/MenuLeft"
import Input from '../components/Input'
import Title from '../components/Title'
import Form from "../components/Form"
import Map from "../components/Map"

import { Marker } from "@react-google-maps/api"

export default () => {
    const navigate = useNavigate()

    const [marker, setMarker] = useState()

    useEffect(() => {
        if (!isAuthenticated()) return <Navigate to="/login/" />
    }, [])

    const registreHemo = async (event) => {
        event.preventDefault()

        const form = event.currentTarget
        const [name] = getValuesOfElement(form, "input")

        const objHemo = await postHemos(name, marker.props.position)

        if (objHemo.id) {
            navigate(`/home/${objHemo.id}`)
        } else {
            alert("Ocorreu um error ao registrar hemonucleo")
        }
    }

    const updateMarker = (event) => {
        setMarker(<Marker position={event.latLng}></Marker>)
        // console.log(event)
        // console.log(marker.props.position)
        // console.log(marker.props.position.lat([[Scopes]])[0].e)
    }

    return (
        <>
            <MenuLeft button_position={2} />
            <section className="w-full h-full p-[3.75rem] page-start">
                <div className="w-full mb-9 flex justify-end">
                    <UserPhoto />
                </div>
                
                <Form className="max-w-full items-start" callback={registreHemo}>
                    <Title text="Cadastrar um novo hemonúcleo" className="self-start" />

                    <Input title="Nome" placeholder=" " />

                    <Map 
                        elements={marker} 
                        onClick={updateMarker} 
                        height="27.9rem" 
                    />

                    <DivButton 
                        text="Cadastrar" 
                        className="w-[28.75rem] self-end" 
                        hrefCancel="/home" 
                    />
                </Form>
            </section>
        </>
    )
}