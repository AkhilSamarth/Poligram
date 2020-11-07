import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import Socket from './Socket'

function Dictionary () {

    const [message, setMessage] = useState('')

    useEffect(() => {
        Socket.on('forward message', (data) => {
            setMessage(data)
        })
        return () => {
            window.removeEventListener("beforeunload", () => {
                Socket.close()
            })
        }
    }, [])

    function toggleParagraph() {
        if (message === '') {
            return null
        }
        return (
            <React.Fragment>
                <p className='definition'><strong>Definition: </strong>{message}</p>
            </React.Fragment>
        )
    }

    return (
        <div className='dictionary'>
            <SearchBar />
            <div>
                {toggleParagraph()}
            </div>
        </div>
    )
}

export default Dictionary