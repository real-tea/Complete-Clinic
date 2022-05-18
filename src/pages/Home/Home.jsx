import React from 'react'
import {Grid, Box} from "@material-ui/core";
import useStyles from './styles';
import { CssBaseline } from '@material-ui/core';
import Login from "../../components/Login/login";

function Home() {
    const classes = useStyles();

  return (
    <>
    <CssBaseline/>
    <div className = {classes.root}>
        <Grid container component = "main" className = {classes.main} />
            <Grid item cs = {12}>
                <Login/>

            <Grid/>
            </Grid>
    </div>
    </>
  )
}

export default Home