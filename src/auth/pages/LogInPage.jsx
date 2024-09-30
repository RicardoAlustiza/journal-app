import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography, Alert } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startGoogleSignIn } from '../../store/auth'
import { startLoginUserWithEmailPassword } from '../../store/auth'

export const LogInPage = () => {

  const dispatch = useDispatch()
  const { status, errorMessage } = useSelector(state => state.auth)

  const {email, password, onInputChange} = useForm({
    email: '',
    password: '',
  });

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(startLoginUserWithEmailPassword({ email, password }))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
  }

  return (
    <AuthLayout title="Log In">
      <form onSubmit={onSubmit}>
        <Grid2 container>
          <Grid2 size={{ xs: 12 }} sx={{ marginTop: 2 }}>
            <TextField 
              label="Email"
              type="email"
              placeholder="test@test.com"
              fullWidth
              name="email"
              value={email}
              onChange = {onInputChange}
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
              onChange = {onInputChange}
            />              
          </Grid2>

          <Grid2 
            container
            spacing={2}
            size={{ xs: 12 }}
            sx={{ marginBottom: 2, marginTop: 3 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Alert severity="error">
                Invalid credentials
              </Alert>
            </Grid2>
          </Grid2>

          <Grid2 container spacing={2} size={{ xs: 12 }} sx={{ marginBottom: 2, marginTop: 3 }}>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button type='submit' variant="contained" fullWidth disabled={isAuthenticating}>
                Log In
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 6 }}>
              <Button  onClick={onGoogleSignIn} variant="contained" fullWidth disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ marginLeft: 1 }}>Google</Typography>
              </Button>
            </Grid2>
          </Grid2>

          <Grid2 container size={{ xs: 12 }} direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Create an account
            </Link>
          </Grid2>

        </Grid2>
      </form>
    </AuthLayout>
  )
}
