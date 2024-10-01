import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const docRef = doc(collection(FirebaseDB, `${uid}/journal/notes`))
        const setDocResp = await setDoc(docRef, newNote)

        console.log({ docRef, setDocResp })
    }
}