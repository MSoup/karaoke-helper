import './Main.css';
import { Button, TextField, Box, Typography } from '@mui/material';
import { flexbox } from '@mui/system';
function SignIn() {
  return (
    <div className="sign-in">
      <Typography variant='h3'>Sign In</Typography>

      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
          display: 'flex',
          flexDirection: 'column',
        }}
        fullWidth
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          label="Email"
          id="email"
        />
        <TextField
          required
          label="Password"
          type="password"
          id="password"
          
        />
        <Button variant='contained'>Login</Button>
      </Box>
      <p>No account? Click here to register.</p>
    </div>
  );
}
  
export default SignIn;