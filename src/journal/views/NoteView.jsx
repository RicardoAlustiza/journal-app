import { useEffect, useMemo, useRef } from 'react'
import { SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Grid2, Typography, Button, TextField, IconButton } from '@mui/material'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks'
import { useSelector, useDispatch } from 'react-redux'
import { setActiveNote, startSaveNote, startUploadingFiles } from '../../store/journal'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const NoteView = () => {

    const dispatch = useDispatch()
    const { activeNote, savedMessage, isSaving } = useSelector(state => state.journal)
    const { body, title, date, onInputChange, formState } = useForm(activeNote);

    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])

    useEffect(() => {
        if(savedMessage.length > 0) {
            Swal.fire('Saved!', savedMessage, 'success');
        }
    }, [savedMessage])

    const fileInputRef = useRef();

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const onFileInputChange = ({target}) => {
        
        if(target.files === 0) {
            return;
        }

        dispatch(startUploadingFiles(target.files));
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
            <input 
                type="file"
                multiple
                onChange={onFileInputChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />

            <IconButton
                onClick={() => fileInputRef.current.click()}
                color="primary"
                disabled={isSaving}
            >
                <UploadOutlined />
            </IconButton>

            <Button
                color="primary"
                sx={{ padding: 2 }}
                onClick={onSaveNote}
                disabled={isSaving}
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

        <ImageGallery images={activeNote.imageUrls}/>

    </Grid2>
    )
}
