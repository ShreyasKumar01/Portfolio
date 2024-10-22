import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <div className="border-t border-neutral-900 pt-10 mb-4">
        <h1 className='my-10 text-center text-4xl font-light'>Shreyas Kumar | Eleshrek</h1>
        <div className="text-center tracking-tighter">
          <p className="my-2">Rajajipuram, Lucknow, Uttar Pradesh.</p>
          <p className="my-2">+91 8318207952</p>
          <a href="">shreyaskumar0411@gmail.com</a>
          <div className="flex flex-row items-center justify-center pt-4 gap-4">
            <a href="/"><FaLinkedin/></a>
            <a href="/"><FaGithub/></a>
            <a href="/"><FaInstagram/></a>
            <a href="/"><FaFacebook/></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
