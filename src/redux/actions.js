/* eslint-disable import/no-anonymous-default-export */
import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";

export const addContactsRequest = createAction("contacts/addContactsRequest");
export const addContactsSuccsess = createAction("contacts/addContactsSuccsess");
export const addContactsError = createAction("contacts/addContactsError");

export const deleteContactsRequest = createAction(
  "contacts/deleteContactsRequest"
);
export const deleteContactsSuccsess = createAction(
  "contacts/deleteContactsSuccsess"
);
export const deleteContactsError = createAction("contacts/deleteContactsError");

export const fetchContactsRequest = createAction(
  "contacts/fetchContactsRequest"
);
export const fetchContactsSuccsess = createAction(
  "contacts/fetchContactsSuccsess"
);
export const fetchContactsError = createAction("contacts/fetchContactsError");

export const changeFilter = createAction("contacts/changeFilter");





// const addContact = createAction("contact/add", (name, number) => ({
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// }));

// const deleteContact = createAction("contact/delete");

// const changeFilter = createAction("contact/changeFilter");

// export default { addContact, deleteContact, changeFilter };
