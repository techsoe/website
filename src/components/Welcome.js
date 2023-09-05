import React, { useState } from 'react'
import './PseudoClass.css'

// header color - #DAE1E7
// text color (header)/(body) - DD6B4D / DAE1E7
// section 1 - DD6B4D
// section 2 - 1C4B82
// section 3 - 183661

function Welcome() {

    const aboutStyles = {
        height: '90vh',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    const welcomeStyle = {
      fontSize: '15vh',
      color: '#183661'
    }

    const userStyle = {
      fontSize: '10vh',
      color: '#DD6B4D'
    }

    const [name, setName] = useState('')

    const handleNameChange = (e) => {
      setName(e.target.value.toUpperCase())
    }
    
    const clearName = () => {
      setName("")
    }

    const headerStyle = {
      height: '10vh',
      backgroundColor: '#DAE1E7',
      color: '#DD6B4D',
      display: 'flex',
      justifyContent: 'center',
    }

    const formStyle = {
      lineHeight: '10vh'
    }

    const inputStyle = {
      padding: '5px',
      marginRight: '20px',
      borderRadius: '5px',
      color: '#DD6B4D',
      border: '1px solid white'
    }

    const buttonStyle = {
      height: '3vh',
      width: '10vh',
      borderRadius: '5px',
      color: '#DD6B4D',
      border: '1px solid white',
      transition: 'background-color 0.3s ease'
    }

  return (
    <div>
      <div style={headerStyle}>
        <form style={formStyle} >
          <input style={inputStyle} type='text' value={name} onChange={handleNameChange} placeholder='Enter your name' />
          <button style={buttonStyle} onClick={clearName}>clear</button>
        </form>
      </div>

      <div style={aboutStyles}>
      
        <h1 style={welcomeStyle} >Welcome</h1>
        {
          name === '' ? (
            <h1 style={userStyle} >GUEST</h1>
          ) : (
            <h1 style={userStyle} >{name}</h1>
          )
        }
        
      </div>

    </div>
  )
}

export default Welcome