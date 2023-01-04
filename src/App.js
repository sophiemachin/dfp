import React, {useCallback, useEffect, useRef} from 'react';
import './App.css';

import {
  Alert,
  Button, Checkbox,
  Container, FormControlLabel, FormGroup, Snackbar, Stack,
  TextField,
  Typography as T,
} from "@mui/material";
import {StyledDiv} from "./common";

const textFieldStyle = {
  backgroundColor: 'white',
}


const containerStyle = {
    paddingTop: '100px',
    position: 'relative',
    textAlign: 'center',
    color: 'white',
}

const buttonStyle = {
  '&:hover': {
    backgroundColor: 'primary.darkOverlay',
  }
}

function App() {

   const form = useRef();
  const [contactInfo, setContactInfo] = React.useState({
    weight: "",
    total: "",
    email: "",
    message: "",
    tours: false,
    tuition: false,
    interviews: false,
  });

  const handleChange = (event) => {
    setContactInfo({...contactInfo, [event.target.name]: event.target.value});
  };

  const handleCheckboxChange = (event) => {
    setContactInfo({...contactInfo, [event.target.name]: !contactInfo[event.target.name]});
  };

  const sendEmail = (e) => {
  };

  return (


<StyledDiv>
    <Container maxWidth='xs'>
      <T variant='h1' sx={{marginBottom: '25px'}}>Dating for powerlifters: find hot singlets in your area</T>
      <form
        ref={form}
        onSubmit={sendEmail}
      >
        <Stack spacing={2}>
          <TextField required name="total" label="Total" variant="outlined" sx={textFieldStyle}
                     value={contactInfo.name}
                     onChange={handleChange}/>
          <TextField required name="weight" label="Bodyweight" variant="outlined" sx={textFieldStyle}
                     value={contactInfo.studentName} onChange={handleChange}/>

          <FormGroup>

            <T>I'm OK with</T>

            <FormControlLabel control={<Checkbox/>} label="Arching" name="tours" value={contactInfo.tours}
                              onChange={handleCheckboxChange}/>
            <FormControlLabel control={<Checkbox/>} label="Sumo" name="tuition"
                              value={contactInfo.tuition}
                              onChange={handleCheckboxChange}/>
            <FormControlLabel control={<Checkbox/>} label="Hookgrip" name="interviews"
                              value={contactInfo.interviews} onChange={handleCheckboxChange}/>
            <FormControlLabel control={<Checkbox/>} label="PEDs" name="interviews"
                              value={contactInfo.interviews} onChange={handleCheckboxChange}/>
          </FormGroup>
          <div style={{textAlign: 'center'}}>
            <Button variant="contained" sx={buttonStyle} type="submit" href='/#/lifters/1'>
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
