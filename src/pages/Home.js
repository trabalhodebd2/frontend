import React from "react";

import UserPhoto from "../components/UserPhoto";
import MenuLeft from "../components/MenuLeft";
import Search from "../components/Search";
import Cards from "../components/Cards";

export default () => (
    <main className="h-screen w-screen bg-white-100 flex">
        <MenuLeft button_position={1} />
        <section className="w-full p-[60px]">
            <div className="w-full mb-9 temp">
                <Search />
                {/* <UserPhoto /> */}
            </div>
            <Cards />
        </section>
    </main>
)