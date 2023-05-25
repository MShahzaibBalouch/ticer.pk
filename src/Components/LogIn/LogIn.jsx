import React from 'react';
import { Container } from 'react-bootstrap';

export default function LogIn(props) {
  return (
    <div className='bg-White' style={{marginTop:'50px',fontSize:'20px'}}>
       <Container>
       <hr  style={{display:'inline-block',float:'left',width:'42%'}} />
        <h6 className="uk-heading-line uk-text-center uk-margin-small-bottom impx-text-dark" style={{textAlign:'center',display:'inline-block'}}><span style={{fontSize:'20px'}}>{props.Name}</span></h6>
        <hr style={{float:'right',paddingTop:'-500px',display:'inline-block',width:'42%'}} />
       </Container>
    </div>

  )
}
