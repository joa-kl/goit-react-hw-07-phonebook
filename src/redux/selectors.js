export const selectContacts = state => state.contacts.items;
// export const selectContacts = ({ contacts }) => contacts.items;
export const selectFilter = state => state.contacts.filter;
export const loadingSelector = state => state.contacts.isLoading;
export const errorSelector = state => state.contacts.error;

