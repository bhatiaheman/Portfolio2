"use client"

import React, { useRef, useState, Suspense } from 'react'
import emailjs from '@emailjs/browser';





 
const Contact = () => {

  const formRef = useRef(null);

  const [form, setForm] = useState({name: '', email: '', message:''})

  const [isLoading, setIsLoading] = useState(false);

  

  

  const handleChange = (e: { target: { name: any; value: any; }; }) => {

    setForm({...form, [e.target.name]: e.target.value});

  }

  const handleSubmit = (e: { preventDefault: () => void; }) => {

    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      process.env.EMAILJS_SERVICE_ID ?? '',
      process.env.EMAILJS_TEMPLATE_ID ?? '',
      {
        from_name: form.name,
        to_name: "Heman",
        from_email: form.email,
        to_email: 'bhatiaheman8@gmail.com',
        message: form.message
      },
      process.env.EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      

      setTimeout(() => {
        setForm({name: '', email: '', message: ''});
      }, 3000);
    }).catch((error) => {
      setIsLoading(false);
      console.error('EmailJS Error:', error);
      

    })


  };

  


  return (
    <section className='relative glex lg:flex-row flex col max-container'>


      
      

      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>

        <form className='w-full flex flex-col gap-7 mt-14'
          onSubmit={handleSubmit}
          ref={formRef}
        >



          <label className='text-black-500 font-semibold'>
            Name

            <input 
              type='text'
              name='name'
              className='input'
              placeholder='John'
              required
              value={form.name}
              onChange={handleChange}
              
            />

          </label>

          <label className='text-black-500 font-semibold'>
            Email

            <input 
              type='email'
              name='email'
              className='input'
              placeholder='John@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              
            />

          </label>

          <label className='text-black-500 font-semibold'>
            Your Message

            <textarea 
              
              name='message'
              rows={4}
              className='textarea'
              placeholder='Let me know how can i help you'
              required
              value={form.message}
              onChange={handleChange}
              
            />

          </label>

          <button
            type='submit'
            className='btn'
            disabled={isLoading}
            
          >

            {isLoading ? 'Sending...' : 'Send Message'}

          </button>
        </form>
      </div>


      
      
    </section>
  )
}

export default Contact