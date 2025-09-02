import React from 'react'
import Brokrege from './Brokrege'
import Hero from './Hero'
import Pages from './Pages'
function Commodity() {
    return (
        <>
            <Hero />
            <Brokrege />
            <img
                src="/media/image/Screenshot%20(174).png"
                alt="Currency charges"
                className="img-fluid rounded mx-auto d-block"
                style={{ maxWidth: '800px' }}
            />
            <Pages />
        </>

    )
}

export default Commodity