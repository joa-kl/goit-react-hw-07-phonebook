import { createSlice } from "@reduxjs/toolkit";


const contactsFilterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        setFilter: (state, action) => action.payload,
    },
});

export const { setFilter } = contactsFilterSlice.actions;
export const filterReducer = contactsFilterSlice.reducer;




