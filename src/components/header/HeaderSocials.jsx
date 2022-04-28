import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

export const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/japalid" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ddoz" target="_blank"><FaGithub/></a>
    </div>
  )
}
