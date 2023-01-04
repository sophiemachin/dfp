import React from 'react';
import {Box, Button, Card, CardContent, Container, Grid, Link, Typography as T,} from "@mui/material";
import {lifter_data} from './lifter_data.js'
import { useParams } from "react-router-dom";
import {StyledDiv} from "./common";


const paperStyles = {
    padding: '20px',
    margin: '15px',
    display: "flex",
    flexDirection: "column",
}

const StyledInnerBox = {
    position: 'relative',
    top: '0px',
    left: '-50px',
    width: '200px',
    backgroundColor: "secondary.light",
    textAlign: 'center',
    marginLeft: '-20px',
    transform: 'rotate(-30deg)',
}


const buttonGroup = {
    display: 'flex',
    justifyContent: "float-right",
}


export function Match() {
    const { id } = useParams();

    let idAsInt = parseInt("id");
    return <StyledDiv>

        <Grid container>
            <Container maxWidth='xs'>
                <Grid item xs={11} sm={11} component={Card} sx={paperStyles}>
                    <CardContent>
                        <T variant="h2">It's a match!</T>
                        <T variant="h3">{lifter_data[id]["name"]}</T>
                        <T variant="body1">Total: {lifter_data[id]["total"]} kg</T>
                        <T variant="body1">Bodyweight: {lifter_data[id]["bodyweight"]} kg</T>
                        {/*<Link href={lifter_data[id]["link"]}/>*/}
                        {lifter_data[id]["link"]}
                    </CardContent>
                </Grid>

                <div style={buttonGroup}>
                    {/*<Button variant="contained" color="secondary" >Message</Button>*/}
                    <Button variant="contained" href="/#/lifters/2">Keep playing</Button>
                </div>
            </Container>
        </Grid>
    </StyledDiv>
}


const DataBoxContainer = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // top: '20vh',
    position: 'relative'
}

const StyledOuterBox = {
    position: 'absolute',
    width: 50,
    height: 25,
    backgroundColor: "gray"
}


function DataBox() {
    return (
        <div style={DataBoxContainer}>
            <Box sx={StyledInnerBox}/>
        </div>
    );
}
