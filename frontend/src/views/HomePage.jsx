import React from 'react'

import { testBackend } from '../utils/backend'

const HomePage = (props) => {

    return (
        <div>
            <header><h1>React-Node template!</h1></header>

            <button onClick={testBackend}>Test backend!</button>
        </div>
        )
}

export default HomePage