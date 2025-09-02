import React from 'react'
import Brokrege from './Brokrege'
import Hero from './Hero'
import Pages from './Pages'

function Equity() {
    return (
        <>
            <Hero />
            <Brokrege />
            <img
                src="/media/image/Screenshot%20(172).png"
                alt="Equity charges"
                style={{
                    display: "block",
                    margin: "20px auto",
                    maxWidth: "800px",
                    width: "100%",
                    borderRadius: "10px",
                }}
            />
            <Pages />
        </>
    )
}

export default Equity
