import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "redux/operations";


const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const handlePending = state => {
    state.isLoading = true;
}


const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const handleFetchContactsSuccess = (state, action) => {
    return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleAddContactSuccess = (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
};

const handleDeleteContactSuccess = (state, action) => {
    state.isLoading = false;
    state.error = null;
    const index = state.items.findIndex(
        contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1); 
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [fetchContacts.fulfilled]: handleFetchContactsSuccess,
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [addContact.fulfilled]: handleAddContactSuccess,
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,
        [deleteContact.fulfilled]: handleDeleteContactSuccess,
    }
});



export const contactsReducer = contactsSlice.reducer;


