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
       },
       setNotes: (state, action) => {
       },
       setSaving: (state) => {

       },
       updateNote: (state, action) => {

       },
       deleteNoteById: (state, action) => {

       },
       savingNewNote: (state) => {
        state.isSaving = true;
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
    savingNewNote
} = journalSlice.actions;
