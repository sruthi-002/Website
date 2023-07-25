import React from 'react'
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
  } from "@mui/material";
  import './home.css'
  import {Card,CardContent,CardActions} from '@mui/material';
  const images =[
    'elastic.png','looker.png','data.png','cloud.png','aws.png'
  ]
const HomePage = () => {
  return (
    <div style={{fontFamily:'Roboto'}}>
        <br></br>
        <br></br>
        <br></br>
        <div  style={{display:'flex', alignItems:'flex-start',justifyContent:'flex-start'}}>
            <div style={{width:'60%'}}>
             <img style={{zIndex:"initial"}}  height="auto" width="1000px" src='home.png'/></div>
             <div style={{margin:"auto",marginTop:"250px",width:"100%"}}>
                <Typography variant='h5' fontFamily={'Roboto'}>AI, ML, Data Engineering Data lakes, Advanced analytics </Typography>
                <br></br>
                <Typography variant="h6" fontFamily={'Roboto'} style={{marginLeft:'100px'}}>- We help you harness the power of your data.</Typography>
             </div>
        </div>
        <br></br>
        <div style={{background:'',display:'flex',justifyContent:'center',alignItems:"center"}}>
            <Typography style={{fontFamily:'Roboto'}} variant='h6'>Our Partnerships</Typography>
        </div>
        <br></br>
        <div style={{margin:'auto',marginLeft:"auto",backgroundColor:"lightyellow"}}>
            {images.map((img)=>
            {
                return(
                        <img style={{padding:'60px',paddingLeft:"auto"}} src={img}></img>
                )
            })}
        </div>
        <br></br>
        <div >
           <Typography style={{textAlign:'center'}} variant="h6" fontFamily={'Roboto'}>Work with us</Typography>
            <div className='row' style={{marginLeft:"100px",justifyContent:'space-around',display:'flex'}}>
                <div className='column'>
                    <div style={{alignItems:'center',flexDirection:'row',display:'flex'}}>
                    <img  src='design.png' style={{height:"200px",width:'250px',paddingLeft:"30px",padding:'5px'}}></img>
                    <img src='arrow.png'  style={{height:'100px',width:"150px",alignItems:'center',padding:'5px',paddingLeft:'30px'}}></img></div>
                    <Typography variant='h6' fontFamily={'Roboto'} style={{alignItems:"center",marginLeft:'60px'}}>Design</Typography>
                    <br></br>
                </div>
                <div className='column'>
                    <div style={{alignItems:'center',flexDirection:'row',display:'flex'}}>
                    <img  src='develop.png'style={{height:"200px",width:'250px',paddingLeft:"30px",padding:'5px'}}></img>
                    <img src='arrow.png' style={{height:'100px',width:"150px",alignItems:'center',padding:'5px',paddingLeft:'30px'}}></img></div>
                    <Typography variant='h6' fontFamily={'Roboto'} style={{alignItems:"center",marginLeft:'60px'}}>Develop</Typography>
                    <br></br>
                </div>
                <div className='column'>
                    <div style={{alignItems:'center',flexDirection:'row',display:"flex"}} >
                    <img src='devops.png'style={{height:"200px",width:'250px',paddingLeft:"30px",padding:'5px'}}></img></div>
                    <Typography variant='h6' fontFamily={'Roboto'} style={{alignItems:"center",marginLeft:'60px'}}>DevOps</Typography>
                    <br></br>
                </div>
            </div>
        </div>
        <br></br>
    </div>
  )
}

export default HomePage
