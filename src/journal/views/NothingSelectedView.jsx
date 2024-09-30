import { StarOutline } from '@mui/icons-material';
import { Grid2, Typography } from '@mui/material';

export const NothingSelectedView = () => {
  return (
    <Grid2
      className="animate__animated animate__fadeIn animate__faster"
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', bgcolor: 'primary.main', borderRadius: '3px' }}
    >
        <Grid2 size={{ xs: 12 }} display="flex" justifyContent="center" alignItems="center">
            <StarOutline sx={{ fontSize: 100, color: 'white' }} />
        </Grid2>

        <Grid2 size={{ xs: 12 }} display="flex" justifyContent="center" alignItems="center">
            <Typography color="white" variant="h5">Create a new entry</Typography>
        </Grid2>
        
    </Grid2>
  )
}
