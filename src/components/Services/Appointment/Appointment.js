import { DateTimePicker, LocalizationProvider, MobileDateTimePicker } from '@mui/lab';
import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import swal from 'sweetalert';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import useAuth from '../../../Hooks/useAuth';
// import emailjs from '@emailjs/browser';

const Appointment = () => {
    const { user } = useAuth();

    const [clearedDate, setClearedDate] = React.useState(null);
    const [value, setValue] = React.useState(new Date());

    // doctor name function
    const [docName, setDocName] = React.useState('');

    const handleChange = (event) => {
        setDocName(event.target.value);
    };

    //swal alert
    const swalAlert = () => {

    //     emailjs.sendForm('service_0c1r10d', 'template_uj51d5t',  'ogvD00wKnhyyzBvGW')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });
  


        return swal("Your Appointment is Done You will Receive a mail ASAP.", {
            button: false,
            icon: "success"
        });
    }
    return (
        <Box id='appointment'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
            <Container maxWidth="xl">
                <Typography variant='h6' sx={{
                    mt: 5, mb: 5
                }}>Select your time and data for Appointment</Typography>


                {/* set doctor name */}
                <FormControl sx={{ mb: 5, minWidth: '50%' }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Select Doctor Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={docName}
                        onChange={handleChange}
                        autoWidth
                        label="Select Doctor Name"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Akash Singh</MenuItem>
                        <MenuItem value={11}>Siddharth Khatri</MenuItem>
                        <MenuItem value={12}>Saurabh Jain</MenuItem>
                        <MenuItem value={13}>Upamanyu Wable</MenuItem>
                        <MenuItem value={14}>Hetang Kothadia</MenuItem>
                        <MenuItem value={16}>Aditya Srivastava</MenuItem>
                        <MenuItem value={17}>Shanti Mishra</MenuItem>
                        <MenuItem value={18}>Shikhar Srivastava</MenuItem>
                        <MenuItem value={19}>Ujjas M Thakker</MenuItem>
                    </Select>
                </FormControl>
                <TextField sx={{ mb: 2 }} value={user.displayName} fullWidth label="Your Name" id="fullWidth" />
                <TextField sx={{ mb: 2 }} value={user.email} fullWidth label="Your Mail" id="fullWidth" />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <MobileDateTimePicker
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            label="Appointment Date"
                            onError={console.log}
                            minDate={new Date('2018-01-01T00:00')}
                            inputFormat="yyyy/MM/dd hh:mm a"
                            mask="___/__/__ __:__ _M"
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                </LocalizationProvider>

                <TextField sx={{ mt: 2, mb: 2 }} fullWidth label="Problem type" id="fullWidth" />

                <Button sx={{ p: 1, mt: 2, mb: 5 }} onClick={swalAlert} fullWidth
                    variant="contained"><AddCircleIcon /> Confirm</Button>
            </Container>
        </Box>
    );
};

export default Appointment;