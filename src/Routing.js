import {HashRouter as Router, Route, Routes} from 'react-router-dom'
import App from './App'
import React from 'react'


import {Card, CardHeader, Grid} from "@mui/material";
// import {Tours} from "./Tours";
// import {Tutoring} from "./Tutoring";
// import {Interviews} from "./Interviews";
// import {Contact} from "./Contact";
// import {About} from "./About";


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
            {/*<Route path="/tutoring" exact element={<Tutoring/>}/>*/}
            {/*<Route path="/tours" exact element={<Tours/>}/>*/}
            {/*<Route path="/interviews" exact element={<Interviews/>}/>*/}
            {/*<Route path="/about" exact element={<About/>}/>*/}
            {/*<Route path="/contact" exact element={<Contact/>}/>*/}
            <Route element={<SkeletonPage page='Not found'/>}/>
        </Routes>
    </Router>