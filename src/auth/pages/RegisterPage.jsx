import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography, Alert } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { startCreatingUserWithEmailPassword } from '../../store/auth'

const formData = {
  email: '',
  password: '',
  displayName: '',
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Email must contain @'],
  password: [(value) => value.length >= 6, 'Password must be at least 6 characters'],
  displayName: [(value) => value.length > 0, 'Name is required'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth)
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const {displayName, email, password, onInputChange, formState,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return

    dispatch(startCreatingUserWithEmailPassword(formState))
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
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
              error = { !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
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
              error = { !!emailValid && formSubmitted }
              helperText={ emailValid }
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
              error = { !!passwordValid && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid2>

          <Grid2 
            container
            spacing={2}
            size={{ xs: 12 }}
            sx={{ marginBottom: 2, marginTop: 3 }}
            display={!!errorMessage ? '' : 'none'}
          >
            <Grid2 size={{ xs: 12 }}>
              <Alert severity="error">
                {errorMessage}
              </Alert>
            </Grid2>
          </Grid2>

          <Grid2 container spacing={2} size={{ xs: 12 }} sx={{ marginBottom: 2, marginTop: 3 }}>
            <Grid2 size={{ xs: 12 }}>
              <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
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
