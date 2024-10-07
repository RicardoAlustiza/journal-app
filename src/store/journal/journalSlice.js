import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
       isSaving: false,
       savedMessage: '',
       notes: [],
       activeNote: null,
    //    activeNote: {
    //       id: ABC123,
    //       title: '',
    //       body: '',
    //       date: 12345,
    //       imageUrls: []
    //    },
    },
    reducers: {
       addNewEmptyNote: (state, action) => {
        state.notes.push(action.payload);
        state.isSaving = false;
       },
       setActiveNote: (state, action) => {
        state.activeNote = action.payload;
        state.savedMessage = '';
       },
       setNotes: (state, action) => {
        state.notes = action.payload;
       },
       setSaving: (state) => {
        state.isSaving = true;
        state.savedMessage = '';
       },
       updateNote: (state, action) => {
        state.isSaving = false;
        state.notes = state.notes.map(note => {
            if (note.id === action.payload.id) {
                return action.payload;
            }
            return note;
        });
        state.savedMessage = `${ action.payload.title } has been saved!`;
       },
       deleteNoteById: (state, action) => {

       },
       savingNewNote: (state) => {
        state.isSaving = true;
       },
       setPhotosToActiveNote: (state, action) => {
        state.activeNote.imageUrls = [...state.activeNote.imageUrls, ...action.payload];
        state.isSaving = false;
       }
   }
});


// Action creators are generated for each case reducer function
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    savingNewNote,
    setPhotosToActiveNote
} = journalSlice.actions;
