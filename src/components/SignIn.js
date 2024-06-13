// SignIn.js
import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Form submitted:', formData);
    // Clear form fields after submission
    setFormData({
      email: '',
      password: '',
    });
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
          <Typography variant="h4" align="center" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <Button variant="contained" type="submit" fullWidth sx={{ marginTop: '20px' }}>
              Sign In
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignIn;
