import React from 'react'
import {Container} from 'react-bootstrap'
import '../Styles/Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
        <Container>
            <div className='row'>
                    <Link to="/Contact">Contact</Link>
            </div>
            <div className='text-center'>Copyright @ 2022 IPL Analyser. All rights reserved.</div>
        </Container>
    </div>
  )
}

export default Footer