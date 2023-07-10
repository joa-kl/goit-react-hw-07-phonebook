import { createSlice } from "@reduxjs/toolkit";


export const contactsFilterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        filterContact: (_, action) => action.payload,
    },
});

export const { filterContact } = contactsFilterSlice.actions;
export default contactsFilterSlice.reducer;

