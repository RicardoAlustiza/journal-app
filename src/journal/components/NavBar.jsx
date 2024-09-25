import { AppBar, IconButton, Toolbar, Grid2, Typography, Grid } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const NavBar = ({ drawerWith = 240 }) => {
  return (
    <AppBar 
        position='fixed'
        sx={{
            width: {sm: `calc(100% - ${drawerWith}px)`},
            ml: {sm: `${drawerWith}px`}
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                sx={{ marginRight: 2, display: { sm: 'none'} }}
            >
                <MenuOutlined />
            </IconButton>

            {/* Change for Grid2 */}
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant='h6' noWrap component='div'> JorunalApp </Typography>                    
                <IconButton color='error'>
                    <LogoutOutlined />
                </IconButton>                    
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
