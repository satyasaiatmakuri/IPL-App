import React from 'react'
import {Form} from 'react-bootstrap'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

function Contact() {
  const divStyle = {
    padding :"20px"
  }
  return (
    <div className='container' style={divStyle}>
      <h1>Give us Your valuable Feedback</h1>

    <Form>
      <Form.Group className="mb-3" controlId="Form.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <div className='row'>
      <Form.Group controlId="Form.ControlInput2" className='col-lg-6'>
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
          />
        </Form.Group>
        <Form.Group controlId="Form.ControlInput3" className='col-lg-6'>
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
          />
        </Form.Group>
        </div>
      <Form.Group className="mb-3" controlId="Form.ControlInput4">
        <Form.Label>Your Experience</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Comments" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="Form.ControlInput5">
        <Form.Label>Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Feedback" />
      </Form.Group>
    </Form>
    <div className="col-12 col-lg">
      <h3>Follow Us</h3>
      <div className="row">
        <div className="col-3 mx-auto">
            <FacebookIcon fontSize="large"/>
        </div>
        <div className="col-3 mx-auto">
            <InstagramIcon fontSize="large"/>
        </div>
        <div className="col-3 mx-auto">
            <YouTubeIcon fontSize="large"/>
        </div>
        <div className="col-3 mx-auto">
            <TwitterIcon fontSize="large"/>
        </div>
      </div>
    </div>
    

    </div>
  )
}

export default Contact