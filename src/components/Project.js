import React from 'react'
import { Contact } from './Contact'
import pocket from './Picture/pocketherbs.png'
import numsum from './Picture/numsum.png'


// header color - #DAE1E7
// text color (header)/(body) - DD6B4D / DAE1E7
// section 1 - DD6B4D
// section 2 - 1C4B82
// section 3 - 183661

function Project() {

    const bodyStyles = {
        height: '100vh',
        backgroundColor: '#1C4B82',
        display: 'flex',
        flexDirection:'row'
    }

    const contentSpace = {
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }

    const itemStyle = {
      height: '30vh',
      width: '80vh',
      margin: '5px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      
      backgroundColor: '#183661'
    }

    const headerStyle = {
      fontSize: '15vh',
      color: '#183661'
    }

    const imgSize = {
      height: '20vh',
      backgroundColor: 'black 0.5'
    }

    const box = {
      height: '30vh',
      width: '30vh',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    const box1 = {
      height: '30vh',
      width: '50vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#DAE1E7'
    }

    const pStyle = {
      fontSize: '15px',
      textAlign: 'center'
    }

    const boxInside1 = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2vh',
      height: '20vh',
      width: '48vh',
    }

    const boxInside2 = {
      height: '8vh',
      width: '50vh',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center'
    }

    const listStyles = {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
      lineHeight: '8vh',
      justifyContent: 'end',

    }

    const listBox = {
      lineHeight: '3vh',
      padding: '5px',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      margin: '0 10px 0 0',
      borderRadius: '10px'
    }

    const progUsed = ['Android Studio', 'Java', 'XML']

    const used = progUsed.map(item => <li style={listBox}><p>{item}</p></li>)

  return (
    <div style={bodyStyles}>
      <div style={contentSpace}>
        <h1 style={headerStyle}>PROJECTS</h1>
        <div style={itemStyle}>
          <div style={box}>
            <img style={imgSize} src={pocket} />
          </div>
          <div style={box1}>
            <div style={boxInside1}>
              <h2>Pocket Herbs</h2>
              <p style={pStyle}>Android application that uses image recognition in determining herbal plants that can be used as an alternative medicince for cough and flu.</p>
            </div>
            <div style={boxInside2}>
              <ul style={listStyles}>
                {
                  used
                }
              </ul>
            </div>
          </div>
        </div>
        <div style={itemStyle}>
          <div style={box}>
            <img style={imgSize} src={numsum} />
          </div>
          <div style={box1}>
          <div style={boxInside1}>
              <h2>NumSum</h2>
              <p style={pStyle}>Android application that has two main functions. First is the IEEE converter that let's the user input any number and convert it into 32-bit and 64-bit binary. Last is the Root Finding that finds the root of the equation given by the user.</p>
            </div>
            <div style={boxInside2}>
              <ul style={listStyles}>
                {
                  used
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div style={contentSpace}>
        <Contact/>
      </div>
    </div>
  )
}

export default Project