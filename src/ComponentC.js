import React from 'react'
import { Link } from 'react-router-dom'

const ComponentC = () => {
    return (
        < div >
            <div>
                ComponentC
        </div>

            <Link to="componentb" > ComponentBへ移動</Link>
        </div >

    )
}

export default ComponentC