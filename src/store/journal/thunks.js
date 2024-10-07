import { collection, doc, setDoc, deleteDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from '../journal'
import { loadNotes, fileUpload } from '../../helpers'

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime()
        }

        const docRef = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        await setDoc(docRef, newNote)

        newNote.id = docRef.id

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        if (!uid) throw new Error('No uid found')

        const notes = await loadNotes(uid)
        dispatch(setNotes(notes))
    }
}

export const startSaveNote = () => {
    return async(dispatch, getState) => {

        dispatch(setSaving())

        const { uid } = getState().auth
        const { activeNote } = getState().journal

        const noteToFireStore = { ...activeNote }
        delete noteToFireStore.id

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)
        await setDoc(docRef, noteToFireStore, { merge: true })

        dispatch(updateNote(activeNote))
    }
}

export const startUploadingFiles = (files = []) => {
    return async(dispatch) => {

        dispatch(setSaving())

        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push(fileUpload(file));
        }
        const photosUrls = await Promise.all(fileUploadPromises);
        
        dispatch(setPhotosToActiveNote(photosUrls));
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth
        const { activeNote } = getState().journal

        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)
        await deleteDoc(docRef);

        dispatch(deleteNoteById(activeNote.id))
    }
}