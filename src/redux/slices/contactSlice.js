import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact } from "redux/operations";


// const initialContacts =
//     [
//         { id: "id-111", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-211", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-311", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-411", name: "Annie Copeland", number: "227-91-26" },
//     ];

const handlePending = state => {
    state.isLoading = true;
}

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}


export const contactsItemsSlice = createSlice({
    name: "items",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
        // JSON.parse(localStorage.getItem("contacts")) || initialContacts || [],
    },
    // reducers: {
    //     handleAddContact: (state, action) => [...state, action.payload],
    //     handleRemoveContact: (state, action) => state.filter(contact => contact.id !== action.payload),
    // },
    extraReducers: {
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload  
        },
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.items.splice(index, 1); 
        }

    }
});



export const contactsReducer = contactsItemsSlice.reducer;
// export const { addContact } = contactsItemsSlice.actions;

