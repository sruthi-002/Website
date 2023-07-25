import React from 'react'
import { Typography } from '@mui/material'
import './footer.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {Icon} from '@mui/material';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='row' style={{height:"auto",width:'auto',backgroundColor:'#537c4a',color:"white",fontFamily:'Roboto'}}>
        <br></br>
      <div className='column' style={{padding:'5px',paddingLeft:'150px'}}>
       <img  src='logo.png'></img>
        </div>
    <div className="column" style={{color:"white",justifyContent:'initial',padding:"5px",paddingLeft:'130px',flex:'1',fontFamily:"Roboto",alignItems:"initial",display:'flex',flexDirection:"column"}}>
       <Typography variant="h6" fontFamily={'Roboto'}>Data</Typography>
       <Typography variant="h6" fontFamily={'Roboto'}>Digital</Typography>
       <Typography variant="h6" fontFamily={'Roboto'}>ElasticSearch</Typography>
       <Typography variant="h6" fontFamily={'Roboto'}>Contact</Typography>
       <Typography variant="h6" fontFamily={'Roboto'}>AboutUs</Typography>
       <br></br>
      </div>
      <div className='row' style={{padding:'5px',paddingLeft:"200px"}}>
      <Typography variant="h6" fontFamily={'Roboto'}>© SquareShift Technologies Pte. Ltd.</Typography>
      <div style={{display:"flex",flexDirection:"row"}}>
        <Link to="https://in.linkedin.com/company/squareshift">
        <LinkedInIcon style={{color:"white"}} />
        </Link>
        <Typography variant="h6" fontFamily={'Roboto'}>Join SquareShift on LinkedIn</Typography>
      
      </div>
    </div>
    </div>
    
  )
}

export default Footer
