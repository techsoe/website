import React from 'react'
import myImg from './Picture/myImg.png'
import htmlPic from './Picture/html.png'
import cssPic from './Picture/css-3.png'
import jsPic from './Picture/java-script.png'
import reactPic from './Picture/react.png'
import javaPic from './Picture/java.png'
import androidPic from './Picture/android.png'
import xmlPic from './Picture/xml.png'
import resume from './Files/myResume.pdf'

// header color - #DAE1E7
// text color (header)/(body) - DD6B4D / DAE1E7
// section 1 - DD6B4D
// section 2 - 1C4B82
// section 3 - 183661

function About() {

    const bodyStyles = {
        height: '100vh',
        backgroundColor: '#DD6B4D',
        color: '#DAE1E7'
    }
    
    const mainStyle = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
    }

    const itemStyles = {
      display: 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center',
      width: '50%',
    }

    const footerStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      lineHeight: '10vh',
      margin: '40px'
    }

    const titleStyle = {
      fontSize: '9vh',
      marginRight: '25px'
    }

    const titleStyleColor = {
      fontSize: '9vh',
      color: '#183661'
    }

    const subTitleStyle = {
      fontStyle: 'italic',
      fontSize: '2vh',
      padding: '5px',
    }

    const listStyles = {
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'row',
      lineHeight: '10vh',
    }

    const imgStyle = {
      height: '80vh',
      borderRadius: '10px',
      alignItems: 'start'
    }
    
    const imgListStyle = {
      height: '7vh',
      marginLeft: '5px',
      padding: '15px'
    }

    const test = {
      margin: '40px'
    }

    const footerTitle = {
      fontSize: '8vh',
      marginBottom: '20px'
    }

    const row = {
      display: 'flex',
      flexDirection:'row'
    }

    const techItems1 = [htmlPic, cssPic, jsPic, reactPic, javaPic, androidPic, xmlPic]
    const tech1 = techItems1.map((pic, index) => 
        <li key={index}>
          <img src={pic} style={imgListStyle} />
        </li> 
      )

    const buttonStyle = {
      margin: '10px 0px 0px 5px',
      padding: '5px',
      height: '50px',
      width: '150px',
      borderRadius: '5px',
      border: 'solid 1px white',
      color: '#183661',
      fontWeight: 'bold',
      transition: 'background-color 0.3s ease'
    }

  return (
    <div style={bodyStyles}>
     
      <div style={mainStyle}>

        <div style={itemStyles}>
          <div style={test}>
            <div style={row}>
              <h1 style={titleStyle}>Hi! I'm</h1> <h1 style={titleStyleColor}>John David</h1>
            </div>
            <p style={subTitleStyle}>I am a recent graduate with a strong passion for web and mobile development. Having just completed my degree in Bachelor of Science in Computer Science, I am excited to embark on a career journey in the dynamic world of software development.</p>
            <a href={resume} download={"Resume"}>
              <button style={buttonStyle}>Download CV</button>
            </a>
          </div>
          <div style={footerStyle}>
            <h1 style={footerTitle}>Technical Background</h1>
            <ul style={listStyles}> {tech1} </ul>
          </div>
        </div>

        <div style={itemStyles}>
          <img src={myImg} alt="" style={imgStyle}/>
        </div>

      </div>
    </div>
  )
}

export default About