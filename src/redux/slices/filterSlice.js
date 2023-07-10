import { createSlice } from "@reduxjs/toolkit";


const contactsFilterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        filterContact: (_, action) => action.payload,
    },
});

export const { filterContact } = contactsFilterSlice.actions;
export const filterReducer = contactsFilterSlice.reducer;




