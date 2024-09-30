import { SaveOutlined } from '@mui/icons-material'
import { Grid2, Typography, Button, TextField } from '@mui/material'
import { ImageGallery } from '../components'

export const NoteView = () => {
  return (
    <Grid2
        className="animate__animated animate__fadeIn animate__faster"
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 1}}
    >
        
        <Grid2>
            <Typography variant="h5" fontSize={39} fontWeight="light">25 de Septiembre, 2024</Typography>
        </Grid2>
        
        <Grid2>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, marginRight: 1 }}/>
                Guardar
            </Button>
        </Grid2>

        <Grid2 container size={{ xs: 12 }}>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="An amazing title"
                label="Title"
                sx={{ marginBottom: 1, border: 'none' }}
            />
        </Grid2>
        <Grid2 container size={{ xs: 12 }}>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="What happened today?"
                minRows={5}
            />
        </Grid2>

        <ImageGallery />

    </Grid2>
  )
}
