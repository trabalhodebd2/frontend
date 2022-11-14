import React from "react"

import UserPhoto from "../components/UserPhoto"
import MenuLeft from "../components/MenuLeft"
import Search from "../components/Search"
import Cards from "../components/Cards"
import Map from "../components/Map"

export default () => (
    <main className="bg-white-100 content">
        <MenuLeft button_position={1} />
        <section className="w-full h-full p-[3.75rem]">
            <div className="w-full mb-9">
                <Search />
                {/* <UserPhoto /> */}
            </div>
            <Cards />
            <Map />
        </section>
    </main>
)