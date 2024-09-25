import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid2, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'

export const LogInPage = () => {
  return (
    <Grid2 
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', bgcolor: 'primary.main', padding: 4 }}
    >
      <Grid2
        className="box-shadow"
        size={{ xs: 12, md: 3 }}
        sx={{ bgcolor: 'white', borderRadius: 2, padding: 3 }}
      >
        <Typography variant='h5' sx={{ marginBottom: 1 }}>
          Log In
        </Typography>

        <form>
          <Grid2 container>
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


            <Grid2 container spacing={ 2 } size={{ xs: 12 }} sx={{ marginBottom: 2, marginTop: 1 }}>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth>
                  Log In
                </Button>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <Button variant="contained" fullWidth>
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
      </Grid2>
    </Grid2>
  )
}
