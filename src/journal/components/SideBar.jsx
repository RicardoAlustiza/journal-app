import { Drawer, Box, Toolbar, Typography, Divider, Grid2, List } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarNoteItem } from "./"

export const SideBar = ({ drawerWidth }) => {

    const { displayName } = useSelector(state => state.auth)
    const { notes } = useSelector(state => state.journal)

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
                    notes.map((note, index) => (
                        <SideBarNoteItem key={note.id} {...note} />
                    ))
                }
            </List>

        </Drawer>
    
    </Box>
  )
}
