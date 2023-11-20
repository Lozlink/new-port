import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'

const ContactUs = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ekcj0qm','template_9tsmw4s', form.current, 'sMEn1MdPWC3oHYXc7')
      .then((result) => {
        console.log(result.text)
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
                <label htmlFor="">Name:</label>
                <input type="text" placeholder='Name' name='user_name'/>

                <label htmlFor="">Email:</label>
                <input type="text" placeholder='Email' name='user_email'/>
                
                <label htmlFor="">Message:</label>
                <textarea name="message" id="" cols="30" rows="3" placeholder='Please enter your message here'/>

                <input type="submit" value="Send" className='submit-form'/>
                
              </form>
            </div>
          </div>
          
        </section>
        );
}
export default ContactUs