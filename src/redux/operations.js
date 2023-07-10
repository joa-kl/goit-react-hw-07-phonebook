import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://64ab1da90c6d844abedf3127.mockapi.io/api/v1";

export const fetchContacts = createAsyncThunk("contacts/fetchContacts", async (arg, thunkAPI) => {
    try {
        const response = await axios.get("/contacts")
        return response.data;

    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
})

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (_, thunkAPI) => {
        try {
            const resposne = await axios.post("/contacts", _)
            return resposne.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const deleteContact = createAsyncThunk( 
    "contacts/deleteContact",
    async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)

export const filterContact = createAsyncThunk(
    ""
)