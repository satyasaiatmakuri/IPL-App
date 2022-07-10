import React from 'react'
import record from '../Records/matches.json'
import { useState } from 'react';
import {Card, Container, Button} from 'react-bootstrap'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../Styles/Team.css'

function Hyderabad() {

    const filtered = record.filter(item =>{
        return(
            item.team1 === "Sunrisers Hyderabad" ||item.team2 === "Sunrisers Hyderabad" )
    });
    const[expand, setExpand]=useState(false);
    const expandbtn=()=>{
        setExpand(!expand);
    };
  return (
    <div>
        {filtered.map(value =>{
            return(
            <div>
                <Container>
                <Card border="dark" style={{ width: '100%' }} className='mt-5 card' key={value.id}>
                    <Card.Body>
                      <Card.Title>{value.team1} vs {value.team2}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">Match Date: {value.date}</Card.Subtitle>
                      <Card.Subtitle>Winner : {value.winner}</Card.Subtitle>
                      <Card.Text>
                        Player of the Match : {value.player_of_match}
                        <br/>
                        Venue : {value.venue}, {value.city}
                      </Card.Text>
                    </Card.Body>
                    <div className='hidden-cont' id={expand?"open":"close"}>
                    <Card.Text>
                        <h5>{value.winner} Won by {value.win_by_runs} Runs and {value.win_by_wickets} Wickets</h5>
                       <div className='row'>
                            <div className='col-lg-6'>
                                Toss Winner : {value.toss_winner} <br/>
                                Toss Decision : {value.toss_decision}
                            </div>
                            <div className='col-lg-6'>
                                Umpire 1 : {value.umpire1}
                                <br/>
                                Umpire 2: {value.umpire2}
                            </div>
                       </div>
                    </Card.Text>
                    </div>
                    <div className='expand-btns'>
                    <Button variant='light' className='expand-btn ' onClick={expandbtn} id={expand?"uparrowclose":"uparrowopen"}><ExpandLessIcon /></Button>
                    <Button variant='light' className='expand-btn ' onClick={expandbtn} id={expand?"downarrowclose":"downarrowopen"}><ExpandMoreIcon /></Button>
                    </div>
                </Card>
                </Container>
            </div>
            )
        })}
    </div>
  )
}

export default Hyderabad