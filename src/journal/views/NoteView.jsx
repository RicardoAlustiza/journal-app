import { useEffect, useMemo } from 'react'
import { SaveOutlined } from '@mui/icons-material'
import { Grid2, Typography, Button, TextField } from '@mui/material'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'
import { startSaveNote } from '../../store/journal/thunks'

export const NoteView = () => {

    const dispatch = useDispatch()
    const { activeNote } = useSelector(state => state.journal)
    const { body, title, date, onInputChange, formState } = useForm(activeNote);

    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

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
            <Typography variant="h5" fontSize={39} fontWeight="light">{dateString}</Typography>
        </Grid2>
        
        <Grid2>
            <Button
                color="primary"
                sx={{ padding: 2 }}
                onClick={onSaveNote}
            >
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
                sx={{ marginBottom: 1, border: 'none' }}
                name="title"
                value={title}
                onChange={onInputChange}
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
                name="body"
                value={body}
                onChange={onInputChange}
            />
        </Grid2>

        <ImageGallery />

    </Grid2>
    )
}
