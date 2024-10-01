import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
       isSaving: true,
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
       },
       setActiveNote: (state, action) => {
       },
       setNotes: (state, action) => {
       },
       setSaving: (state) => {

       },
       updateNote: (state, action) => {

       },
       deleteNoteById: (state, action) => {

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
    deleteNoteById
} = journalSlice.actions;
