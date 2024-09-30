import { CircularProgress, Grid2 } from '@mui/material';

export const CheckingAuth = () => {
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
            container
            direction="row"
            justifyContent='center'
        >
            <CircularProgress color='warning' />
        </Grid2>
    </Grid2>
  )
}
