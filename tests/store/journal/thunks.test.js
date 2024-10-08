import { savingNewNote, addNewEmptyNote, setActiveNote } from "../../../src/store/journal/journalSlice";
import { startNewNote } from "../../../src/store/journal/thunks";
import { collection, deleteDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../../src/firebase/config";

describe('JournalThunks', () => {

    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should invoke startNewNote', async () => {

        const uid = 'TEST-UID';
        getState.mockReturnValue({ auth: { uid } });

        await startNewNote()(dispatch, getState);

        expect(dispatch).toHaveBeenCalledWith(savingNewNote())
        expect(dispatch).toHaveBeenCalledWith(addNewEmptyNote({
            title: '',
            body: '',
            id: expect.any(String),
            date: expect.any(Number)
        }));
        expect(dispatch).toHaveBeenCalledWith(setActiveNote({
            title: '',
            body: '',
            id: expect.any(String),
            date: expect.any(Number)
        }));

        // Erase from firebase
        const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
        const docs = await getDocs(collectionRef);

        const deletePRomises = [];

        //Uncomment to delete all notes ONLY IN TEST DATABASE
        // docs.forEach(doc => {
        //     deletePRomises.push(deleteDoc(doc.ref));
        // });

        // await Promise.all(deletePRomises);
    });
});