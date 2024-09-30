import { TurnedInNot } from "@mui/icons-material"
import { Drawer, Box, Toolbar, Typography, Divider, Grid2, List, ListItem, ListItemText, ListItemButton, ListItemIcon } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth)

  return (
    <Box 
        component="nav"
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0} }}
    >

        <Drawer
            variant="permanent"
            open
            sx={{
                display: {xs: 'none', sm: 'block'},
                '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
            }}
        >

            <Toolbar>
                <Typography variant="h6" noWrap component="div">{displayName}</Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo', 'Abril'].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid2 container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={"Subtitle or description text for the list item"} />
                                </Grid2>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    
    </Box>
  )
}
