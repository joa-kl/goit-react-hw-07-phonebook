import { createSlice } from "@reduxjs/toolkit";


const contactsFilterSlice = createSlice({
    name: "filter",
    initialState: "",
    reducers: {
        // filterContact: (_, action) => action.payload,
        setFilter: (state, action) => {
            return action.payload;
        },
    },
});

export const { setFilter } = contactsFilterSlice.actions;
export const filterReducer = contactsFilterSlice.reducer;




