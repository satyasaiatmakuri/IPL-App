import React from 'react'
import Table from 'react-bootstrap/Table'
import {Link} from 'react-router-dom'

function Teams(){
  return (
    <div>
        <Table striped bordered hover className='table'>
        <thead>
          <tr>
            <th>Team Name</th>
            <th>Years</th>
            <th>Seasons won</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Link to="/Rajasthan">Rajasthan Royals</Link></td>
            <td>2008-2017</td>
            <td>1</td>
          </tr>
          <tr>
            <td><Link to="/Punjab">Kings XI Punjab</Link></td>
            <td>2008-2017</td>
            <td>0</td>
          </tr>
          <tr>
            <td><Link to="/Chennai">Chennai Super Kings</Link></td>
            <td>2008-2015</td>
            <td>2</td>
          </tr>
          <tr>
            <td><Link to="/Delhi">Delhi Daredevils</Link></td>
            <td>2008-2017</td>
            <td>0</td>
          </tr>
          <tr>
            <td><Link to="/Mumbai">Mumbai Indians</Link></td>
            <td>2008-2017</td>
            <td>3</td>
          </tr>
          <tr>
            <td><Link to="/Bangalore">Royal Challengers Bangalore</Link></td>
            <td>2008-2017</td>
            <td>0</td>
          </tr>
          <tr>
            <td><Link to="Deccan">Deccan Chargers</Link></td>
            <td>2008-2012</td>
            <td>1</td>
          </tr>
          <tr>
            <td><Link to="/Kolkata">Kolkata Knight Riders</Link></td>
            <td>2009-2017</td>
            <td>2</td>
          </tr>
          <tr>
            <td><Link to="/Kochi">Kochi Tushkers Kerala</Link></td>
            <td>2011</td>
            <td>0</td>
          </tr>
          <tr>
            <td><Link to='/Pune'>Rising Pune Supergiants</Link></td>
            <td>2011-2013, 2017</td>
            <td>0</td>
          </tr>
          <tr>
            <td><Link to="/Hyderabad">Sunrisers Hyderabad</Link></td>
            <td>2013-2017</td>
            <td>1</td>
          </tr>
          <tr>
            <td><Link to="/Gujarat">Gujarat Lions</Link></td>
            <td>2016-2017</td>
            <td>0</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Teams