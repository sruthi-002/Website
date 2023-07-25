import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@mui/material";
import {makeStyles} from '@mui/styles'
import { Link } from "react-router-dom";
import { alignProperty } from "@mui/material/styles/cssUtils";
import './navbar.css'
function Navbar() {

  return (
    <div style={{height:"auto" ,width:"auto",fontFamily:'Roboto'}}>
    <AppBar position="fixed" style={{backgroundColor:'#537c4a',color:'white'}}  >
      <CssBaseline />
      <Toolbar className="css-hyum1k-MuiToolbar-root" style={{backgroundColor:'#537c4a',color:'white'}}  >
        <img src="logo.png" style={{height:"70px" , width:"200px"}}></img>
          <div  style={{flexDirection:"row",display:'flex',margin:"auto",justifyContent:"flex-end",alignItems:'flex-end',cursor:'pointer'}}>
             <Link style={{textDecoration: 'none'}} to="/">
                <Typography fontFamily={'Roboto'} style={{marginLeft:"auto",padding:'10px',paddingLeft:'auto',color:'white',fontSize:"19px"}} gutterBottom>HOME</Typography>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/about" >
                 <Typography fontFamily={'Roboto'}  style={{marginLeft:"auto",padding:'10px',paddingLeft:'auto',color:'white',fontSize:"19px"}} gutterBottom >ABOUT</Typography>
              </Link>
              <Link style={{textDecoration: 'none'}} to="/careers" >
              <Typography fontFamily={'Roboto'}  style={{marginLeft:"auto",padding:'10px',paddingLeft:'auto',color:'white',fontSize:"19px"}} gutterBottom>CAREER</Typography>
              </Link>
              <Typography fontFamily={'Roboto'} style={{marginLeft:"auto",padding:'10px',paddingLeft:'auto',fontSize:"19px"}} gutterBottom>FAQ</Typography>
          </div>
          <br></br>
      </Toolbar>
    </AppBar>
    </div>
  );
}
export default Navbar;