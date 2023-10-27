import React from 'react'
import spinnerGIF from './images/spinner.gif'

function Spinner() {
  return (
    <div>
        <img src={spinnerGIF} style={{backgroundColor: "red"}} alt="error" />
    </div>
  )
}

export default Spinner