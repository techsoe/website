import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

// header color - #DAE1E7
// text color (header)/(body) - DD6B4D / DAE1E7
// section 1 - DD6B4D
// section 2 - 1C4B82
// section 3 - 183661

export const Contact = () => {
  
  const [name, setName,] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ji55rzl', 'template_tsvn6wi', form.current, 'BS4ElxLgjsGThaxat')
      .then((result) => {
          console.log(result.text);
          setName('')
          setEmail('')
          setMessage('')
          alert('Message sent!')
      }, (error) => {
          console.log(error.text);
      });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '600px',
    width: '400px',
    backgroundColor: '#DAE1E7'
  }

  const inputStyles = {
    width: '350px',
    margin: '0px 0px 10px 0px',
    height: '30px',
    padding: '5px',
    color: '#DD6B4D',
    border: 'solid 1px #DD6B4D',
    borderRadius: '5px'
  }

  const textStyles = {
    width: '350px',
    height: '400px',
    padding: '5px',
    color: '#DD6B4D',
    margin: '0px 0px 10px 0px',
    border: 'solid 1px #DD6B4D',
    borderRadius: '5px'
  }

  const buttonStyle = {
    height: '40px',
    width: '100px',
    borderRadius: '5px',
    color: '#183661',
    border: '1px solid white',
    backgroundColor: '#DD6B4D',
    transition: 'background-color 0.3 ease',
    cursor: 'pointer',
  }

  const headerStyle = {
    fontSize: '5vh',
    color: '#DD6B4D',
    margin: '0px 0px 10px 0px'
  }

  return (
    <div>
        <h1 style={headerStyle}>Get in touch with me..</h1>
        <form style={formStyle} ref={form} onSubmit={sendEmail}>
            <input value={name} onChange={handleName} style={inputStyles} type="text" name="from_name" placeholder='Name'/>
            <input value={email} onChange={handleEmail} style={inputStyles} type="email" name="from_email" placeholder='Email' />
            <textarea value={message} onChange={handleMessage} style={textStyles} name="message" placeholder='Message' />
            <button style={buttonStyle} type="submit" value="Send" >SUBMIT</button>
        </form>
    </div>

    
  );
};