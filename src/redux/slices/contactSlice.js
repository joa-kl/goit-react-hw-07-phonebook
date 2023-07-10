import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "redux/operations";


// const initialContacts =
//     [
//         { id: "id-111", name: "Rosie Simpson", number: "459-12-56" },
//         { id: "id-211", name: "Hermione Kline", number: "443-89-12" },
//         { id: "id-311", name: "Eden Clements", number: "645-17-79" },
//         { id: "id-411", name: "Annie Copeland", number: "227-91-26" },
//     ];
const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

// const handlePending = state => {
//     state.isLoading = true;
// }

const handlePending = state => {
    return {
        ...state,
        isLoading: true,
    };
};

// const handleRejected = (state, action) => {
//     state.isLoading = false;
//     state.error = action.payload;
// }

const handleRejected = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: action.payload,
    };
};


const handleFetchContactsSuccess = (state, action) => {
    return { ...state, isLoading: false, error: null, items: action.payload };
};

const handleAddContactSuccess = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: null,
        items: [action.payload, ...state.items],
    };
};

const handleDeleteContactSuccess = (state, action) => {
    return {
        ...state,
        isLoading: false,
        error: null,
        items: state.items.filter(item => item.id !== action.payload.id),
    };
};

export const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState,
        
        // JSON.parse(localStorage.getItem("contacts")) || initialContacts || [],
  
    // reducers: {
    //     handleAddContact: (state, action) => [...state, action.payload],
    //     handleRemoveContact: (state, action) => state.filter(contact => contact.id !== action.payload),
    // },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [fetchContacts.fulfilled]: handleFetchContactsSuccess,
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [addContact.fulfilled]: handleAddContactSuccess,
        // [addContact.fulfilled](state, action) {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.items.push(action.payload);
        // },
        [deleteContact.pending]: handlePending,
        [deleteContact.rejected]: handleRejected,
        [deleteContact.fulfilled]: handleDeleteContactSuccess,
        // [deleteContact.fulfilled](state, action) {
        //     state.isLoading = false;
        //     state.error = null;
        //     const index = state.items.findIndex(
        //         contact => contact.id === action.payload.id
        //     );
        //     state.items.splice(index, 1); 
        // }

    }
});



export const contactsReducer = contactsSlice.reducer;
// export const { addContact } = contactsItemsSlice.actions;

