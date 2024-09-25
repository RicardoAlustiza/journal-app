import { Grid2, Typography } from "@mui/material"

export const AuthLayout = ({children, title = ''}) => {
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
            sx={{ bgcolor: 'white', borderRadius: 2, padding: 3, width: { md: 450 } }}
        >
            <Typography variant='h5' sx={{ marginBottom: 1 }}>{title}</Typography>

            {children}

        </Grid2>
    </Grid2>
  )
}
