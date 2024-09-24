import { Grid2, TextField, Typography } from '@mui/material'

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
      <Grid2 item
        className="box-shadow"
        size={{ xs: 3 }}
        sx={{ bgcolor: 'white', borderRadius: 2, padding: 3 }}
      >
        <Typography variant='h5' sx={{ marginBottom: 1 }}>
          Log In
        </Typography>

        <form>
          <Grid2 container>
            <Grid2 item size={{ xs: 12 }} sx={{ marginTop: 2 }}>
              <TextField 
                label="Email"
                type="email"
                placeholder="test@test.com"
                fullWidth 
              />                   
            </Grid2>
            <Grid2 item size={{ xs: 12 }} sx={{ marginTop: 2 }}>
              <TextField 
                label="password"
                type="password"
                placeholder="Password"
                fullWidth 
              />              
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Grid2>
  )
}
