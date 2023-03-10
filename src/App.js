import React, {useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom'
// import './App.css';

import {
  Button, Checkbox,
  Container, FormControlLabel, FormGroup, Stack,
  TextField,
  Typography as T,
} from "@mui/material";
import {StyledDiv} from "./common";

const textFieldStyle = {
  backgroundColor: 'white',
}


// const containerStyle = {
//     paddingTop: '100px',
//     position: 'relative',
//     textAlign: 'center',
//     color: 'white',
// }

const buttonStyle = {
  '&:hover': {
    backgroundColor: 'primary.darkOverlay',
  }
}

function App() {

   const form = useRef();
   const navigate = useNavigate()
  const [contactInfo, setContactInfo] = React.useState({
    bodyweight: "",
    lifting_total: "",
    name: "",
    peds: false,
    sumo: false,
  });

  const handleChange = (event) => {
    setContactInfo({...contactInfo, [event.target.name]: event.target.value});
  };

  const handleCheckboxChange = (event) => {
    setContactInfo({...contactInfo, [event.target.name]: !contactInfo[event.target.name]});
  };

  const routeToFirstLifter = (response) => {
    console.log(response)
  };

  const onSubmit = (e) => {
    console.log('onsubmit')
    console.log(e)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactInfo)
    };
    fetch("http://127.0.0.1:5000/register", requestOptions)
          .then((res) => res.text())
          .then((json) => console.log(json))

    navigate('/lifters/1')

  };

  return (


<StyledDiv>
    <Container maxWidth='xs'>
      <T variant='h1' sx={{marginBottom: '25px'}}>Dating for powerlifters: find hot singlets in your area</T>
      <form
        ref={form}
        // onSubmit={onSubmit}
      >
        <Stack spacing={2}>
          <TextField required name="lifting_total" label="Total" variant="outlined" sx={textFieldStyle}
                     value={contactInfo.lifting_total}
                     onChange={handleChange}/>
          <TextField required name="name" label="Name" variant="outlined" sx={textFieldStyle}
                     value={contactInfo.name}
                     onChange={handleChange}/>
          <TextField required name="bodyweight" label="Bodyweight" variant="outlined" sx={textFieldStyle}
                     value={contactInfo.bodyweight} onChange={handleChange}/>

          <FormGroup>

            <T>I'm OK with</T>

            <FormControlLabel control={<Checkbox/>} label="Sumo" name="sumo"
                              value={contactInfo.sumo}
                              onChange={handleCheckboxChange}/>
            <FormControlLabel control={<Checkbox/>} label="PEDs" name="peds"
                              value={contactInfo.peds} onChange={handleCheckboxChange}/>
          </FormGroup>
          <div style={{textAlign: 'center'}}>
            <Button variant="contained" sx={buttonStyle} onClick={onSubmit}>
              I'm horny let's go
            </Button>
          </div>
        </Stack>
      </form>

    </Container>
  </StyledDiv>

  );
}

export default App;
