// import { contactsReducer } from "./slices/contactSlice";

import { combineReducers } from "@reduxjs/toolkit";
import { contactsFilterSlice } from "./slices/filterSlice";
import { contactsItemsSlice } from "./slices/contactSlice";

const contactsReducer = combineReducers({
    [contactsItemsSlice.name]: contactsItemsSlice.reducer,
    [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});

// export const reducer = {
//     contacts: contactsReducer,
// };

export default contactsReducer;

