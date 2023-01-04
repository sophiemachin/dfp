import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App'
import React from 'react'


import {Card, CardHeader, Grid} from "@mui/material";
import {Lifters} from "./Lifters";
import {Match} from "./Match";


function SkeletonPage({page}) {
    return <div style={{paddingTop: '100px'}}>
        <Card>
            <CardHeader title={page}/>
            <Grid container justify="center" alignItems="center">
            </Grid>
        </Card>
    </div>
}


export const Routing = (props) =>
    <Router>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/lifters/:id" exact element={<Lifters/>}/>
            <Route path="/match/:id" exact element={<Match/>}/>
            <Route element={<SkeletonPage page='Not found'/>}/>
        </Routes>
    </Router>