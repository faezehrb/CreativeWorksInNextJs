
'use client'
import { useState } from 'react'


const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     try {
//       await axios.post('/api/contact', formData)
//       console.log("hellooo")
//       alert('Message sent successfully!')
//     } catch (error) {
//       console.error('Error sending message:', error)
//       alert('An error occurred. Please try again later.')
//     }
//   }

  return (
    <div className='container min-h-screen grid place-items-center'>
      <form className="w-96">
      <div className="mb-4">
        <label htmlFor="name" className="block text-black">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          // value={formData.name}
          // onChange={handleChange}
          placeholder="Your Name"
          required
          className="mt-1 p-2 w-full text-black border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-black">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          // value={formData.email}
          // onChange={handleChange}
          placeholder="Your Email"
          required
          className="mt-1 p-2 w-full text-black border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-black">Message</label>
        <textarea
          id="message"
          name="message"
          // value={formData.message}
          // onChange={handleChange}
          placeholder="Your Message"
          rows={4}
          required
          className="mt-1 p-2 w-full text-black border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-black py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
      >
        Send Message
      </button>
      </form>
    </div>
  )
}

export default ContactForm
