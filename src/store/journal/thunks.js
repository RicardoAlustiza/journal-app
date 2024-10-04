import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote } from '../journal'
import { loadNotes } from '../../helpers'

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
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