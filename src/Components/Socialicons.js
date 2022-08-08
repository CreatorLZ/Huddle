import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { Styledsocialicons } from './Soicialiconsstyles'
const Socialicons = () => {
  return (
    <Styledsocialicons>
      <li>
        <a href='https://twitter.com'>
            <FaTwitter/>
        </a>
      </li>
      <li>
        <a href='https://twitter.com'>
            <FaFacebook/>
        </a>
      </li>
      <li>
        <a href='https://twitter.com'>
            <FaLinkedin/>
        </a>
      </li>
    </Styledsocialicons>
  )
}

export default Socialicons
