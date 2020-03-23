import React from "react"
import { Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCode, faCodeBranch, faHeart, faJedi, faKiwiBird,
  faLaptop, faPeace, faRobot, faSitemap, faYinYang } from '@fortawesome/free-solid-svg-icons'

const Footer = () => (
  <>
    <Navbar fixed={'bottom'} className={'justify-content-center'}>
      <Navbar.Text>Created with <RandomIcon /> using&nbsp;
        <a href={'https://www.gatsbyjs.org/'}>GatsbyJS</a> during extended Spring Break 2020</Navbar.Text>
    </Navbar>
  </>
)

function RandomIcon() {
  const faArray = [faCoffee, faCode, faCodeBranch, faHeart, faJedi, faKiwiBird, faLaptop, faPeace,
  faRobot, faSitemap, faYinYang];
  return (
    <FontAwesomeIcon className='hover-red' icon={faArray[Math.floor(Math.random() * faArray.length)]} />
  )
}

export default Footer
