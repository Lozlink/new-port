import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'

const ContactUs = () => {
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ekcj0qm','template_9tsmw4s', form.current, 'sMEn1MdPWC3oHYXc7')
      .then((result) => {
        console.log(result.text)
        setIsSubmitted(true)

        setTimeout( () => {
          setIsSubmitted(false)
          setName('')
          setEmail('')
          setMessage('')
        }, 5000)
      }, (error) => {
        console.log(error.text)
      })
  }
  
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work opportunities or questions by filling out the form below
              </p>
            <form ref={form} onSubmit={sendEmail} className='form' >
                <label htmlFor="" className='form-label'>Name:</label>
                <input type="text" placeholder='Name' name='user_name' value={name} onChange={e => setName(e.target.value)}/>

                <label htmlFor="" className='form-label'>Email:</label>
                <input type="text" placeholder='Email' name='user_email' value={email} onChange={e => setEmail(e.target.value)}/>
                
                <label htmlFor="" className='form-label'>Message:</label>
                <textarea name="message" id="" cols="30" rows="3" placeholder='Please enter your message here' value={message} onChange={e => setMessage(e.target.value)}/>

                <input type="submit" value="Send" className='submit-form'/>
                
              </form>
              {isSubmitted && (
                <div className='form-submission'>
                  <p>Form Successfully Submitted</p>
                </div>
              )}
            </div>
          </div>
          
        </section>
        );
}
export default ContactUs