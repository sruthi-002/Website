import { Grid, Typography } from '@mui/material'
import React from 'react'
const images = ['amazon.png','Standard.png','oracle.png','clear.png','we.png','lab.png','phone.png','edcast.png','mid.png','pand.png','slwwk.png'];
const About = () => {
  return (
    <div>
    <div style={{margin:'20px', marginTop:'100px'}}>
      <Typography variant='h5' style={{textAlign:"center"}} fontFamily={'Roboto'}>Our Mission</Typography>
      <Typography variant='h6' style={{marginTop:"10px",textAlign:"center"}} fontFamily={'Roboto'} >We aim to be the best & trusted partner for enterprise cloud adoption in the markets we operate.</Typography>
      <Typography variant='h6' style={{marginTop:"10px",textAlign:"center"}} fontFamily={'Roboto'}> With our customers, we’ll build a reputation for solving cloud challenges through excellence in technology, thought leadership and quality in execution.</Typography>
      <Typography variant='h6' style={{marginTop:"10px",textAlign:"center"}} gutterBottom fontFamily={'Roboto'}>To our employees, we’ll be a company that nurtures creativity & learning, fosters leadership & ownership at every level and provides a long term, rewarding career.</Typography></div>
      <div style={{backgroundColor:"lightyellow"}}>
        <br></br>
        <Typography variant='h5' fontFamily={'Roboto'} style={{textAlign:'center'}} gutterBottom >Our Leadership</Typography>
        <div style={{padding:"10px",paddingLeft:"300px",alignItems:"center",justifyContent:"center"}}>
        <img  style ={{borderRadius:"50%",justifyContent:"space-around",alignItems:"center",padding:"10px",paddingLeft:"5px"}} src='aanath.png'></img>
        <img  style ={{borderRadius:"50%",justifyContent:"space-around",alignItems:"center",padding:"10px",paddingLeft:"10px"}} src='venky.png'></img>
        <img  style ={{borderRadius:"50%",justifyContent:"space-around",alignItems:"center",padding:"10px",paddingLeft:"10px"}} src='elango.png'></img>
        <img  style ={{borderRadius:"50%",justifyContent:"space-around",alignItems:"center",padding:"10px",paddingLeft:"10px"}} src='stephen.png'></img>
        </div>
        <div style={{flexDirection:"row",display:"flex"}}>
            <Typography variant='h5' fontFamily={'Roboto'} style={{padding:"10px",paddingLeft:"360px"}} gutterBottom>Aanath</Typography>
            <Typography variant='h5' fontFamily={'Roboto'} style={{padding:"10px",paddingLeft:"129px"}} gutterBottom>Venky</Typography>
            <Typography variant='h5' fontFamily={'Roboto'} style={{padding:"10px",paddingLeft:"129px"}} gutterBottom>Elango</Typography>
            <Typography variant='h5' fontFamily={'Roboto'} style={{padding:"10px",paddingLeft:"120px"}} gutterBottom>Stephen</Typography>
        </div>
        <br></br>
      </div>
      <div>
        <br></br>
        <Typography gutterBottom></Typography>
            <Typography variant='h5' fontFamily={'Roboto'} style={{alignItems:"center",display:"flex",justifyContent:"center"}} gutterBottom>Past Work Experience & Clients</Typography>
            <Grid style={{padding:'10px',paddingLeft:'100px'}} >
            {images.map((img)=>
            {
                return (
                        <img style={{padding:'10px',paddingLeft:'100px',paddingRight:"10px"}} src={img}></img>
                )
            })}
            </Grid>
            <Typography gutterBottom></Typography>
        </div>
    </div>
  )
}

export default About
