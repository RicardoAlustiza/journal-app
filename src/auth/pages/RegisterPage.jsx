import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  email: '',
  password: '',
  displayName: '',
}

export const RegisterPage = () => {

  const {displayName, email, password, onInputChange, formState} = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
            <TextField 
              label="Name"
              type="text"
              placeholder="John Doe"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
            <TextField 
              label="Email"
              type="email"
              placeholder="test@test.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
            <TextField 
              label="password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid2>


          <Grid2 container spacing={2} size={{ xs: 12 }} sx={{ marginBottom: 2, marginTop: 3 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button type="submit" variant="contained" fullWidth>
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
