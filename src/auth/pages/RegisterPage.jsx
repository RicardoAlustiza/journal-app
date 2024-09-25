import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
            <TextField 
              label="Name"
              type="text"
              placeholder="John Doe"
              fullWidth 
            />                   
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
            <TextField 
              label="Email"
              type="email"
              placeholder="test@test.com"
              fullWidth 
            />                   
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
            <TextField 
              label="password"
              type="password"
              placeholder="Password"
              fullWidth 
            />              
          </Grid2>


          <Grid2 container spacing={2} size={{ xs: 12 }} sx={{ marginBottom: 2, marginTop: 3 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button variant="contained" fullWidth>
                Create Account
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container size={{ xs: 12 }} direction="row" justifyContent="end">
            <Typography sx={{ marginRight: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Log In
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLayout>
  )
}
