import React from 'react'

import { testBackend } from '../utils/backend'

const HomePage = (props) => {

    return (
        <div>
            <header><h1>React-Node template!</h1></header>

            <h3>Infrastructure</h3>
            <ul>
                <li>Dockerfiles and composefile</li>
                <li>Nginx reverse proxy in front of containers (ports 80 & 443)</li>
            </ul>

            <h3>Frontend</h3>
            <ul>
                <li>Backend integration</li>
            </ul>

            <h3>Backend</h3>
            <ul>
                <li>BaseController</li>
            </ul>

            <button onClick={testBackend}>Test backend!</button>
        </div>
        )
}

export default HomePage