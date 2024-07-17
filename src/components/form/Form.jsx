import React from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Paper,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  IconButton,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from "react-hook-form";



const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
    "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

const Form = ({ApiFunction, onClose, title, data=""}) => {

  const { register, handleSubmit, control } = useForm();
  const onSubmit = async(data) => {
    console.log("submit button is fire")
    await ApiFunction(data)
  }
  return (
    <div className="new">
      <Paper
        elevation={4}
        sx={{ p: 3, borderRadius: 2, position: 'relative', maxWidth: "590px", margin: "auto" }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom sx={{ mb: 2, textAlign: "center" }}>
          {title}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                variant="outlined"
                required
                defaultValue={data.firstname}
                size="small"
                {...register("firstname")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                variant="outlined"
                required
                defaultValue={data.lastname}
                size="small"
                {...register("lastname")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                required
                defaultValue={data.email}
                size="small"
                {...register("email")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                variant="outlined"
                type="tel"
                required
                defaultValue={data.phoneNumber}   
                size="small"
                {...register("phoneNumber")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth size="small" variant="outlined" required>
                <InputLabel>Gender</InputLabel>
                <Controller
                  name="gender"
                  control={control}
                  defaultValue={data.gender}   
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Gender"
                    >
                      <MenuItem value="male">Male</MenuItem>
                      <MenuItem value="female">Female</MenuItem>
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Controller
                  name="dateOfBirth"
                  control={control}
                //   defaultValue={data.dateOfBirth}   
                  render={({ field }) => (
                    <DatePicker
                      {...field}
                      label="Date of Birth"
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          fullWidth
                          size="small"
                          InputLabelProps={{
                            style: { fontSize: 12 },
                          }}
                          inputProps={{
                            ...params.inputProps,
                            style: { height: 38, padding: '10px 14px' },
                          }}
                          required
                        />
                      )}
                    />
                  )}
                />
              </LocalizationProvider>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                variant="outlined"
                required
                defaultValue={data.address} 
                size="small"
                {...register("address")}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                variant="outlined"
                required
                defaultValue={data.city} 
                size="small"
                {...register("city")}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <FormControl fullWidth size="small" variant="outlined" required>
                <InputLabel>State</InputLabel>
                <Controller
                  name="state"
                  control={control}
                  defaultValue={data.state} 
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="State"
                    >
                      {states.map((state) => (
                        <MenuItem key={state} value={state}>
                          {state}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                fullWidth
                label="PIN Code"
                variant="outlined"
                type="number"
                required
                defaultValue={data.pinCode} 
                size="small"
                {...register("pinCode")}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Notes"
                variant="outlined"
                multiline
                defaultValue={data.note} 
                rows={4}
                size="small"
                {...register("note")}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  height: "fit-content",
                  padding: "6px 0",
                  fontSize: "13px",
                  textTransform: "capitalize",
                  backgroundColor: "#3f51b5",
                  "&:hover": {
                    backgroundColor: "#303f9f",
                  },
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  )
}

export default Form