// import { contactsReducer } from "./slices/contactSlice";

import { combineReducers } from "@reduxjs/toolkit";
import { contactsFilterSlice } from "./slices/filterSlice";
import { contactsSlice } from "./slices/contactSlice";

const contactsReducer = combineReducers({
    [contactsSlice.name]: contactsSlice.reducer,
    [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});

// export const reducer = {
//     contacts: contactsReducer,
// };

export default contactsReducer;

