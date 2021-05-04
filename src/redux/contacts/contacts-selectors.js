const getFilter = state => state.contacts.filter;
const getContacts = state => state.contacts.items;
const getLoading = state => state.contacts.loading;

// export const getVisibleContacts =

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getFilter,
  getContacts,
  getLoading,
};
