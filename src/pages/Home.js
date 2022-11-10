import React from "react";

import MenuLeft from "../components/MenuLeft";
import Cards from "../components/Cards";

export default () => (
    <main className="h-screen w-screen bg-white-100 flex">
        <MenuLeft button_position={1} />
        <section className="w-full p-[60px]">
            <Cards />
        </section>
    </main>
)