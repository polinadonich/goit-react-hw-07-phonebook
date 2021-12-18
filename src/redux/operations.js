/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import {
  addContactsRequest,
  addContactsSuccsess,
  addContactsError,
  deleteContactsRequest,
  deleteContactsSuccsess,
  deleteContactsError,
  fetchContactsRequest,
  fetchContactsSuccsess,
  fetchContactsError,
} from "./actions";

axios.defaults.baseURL = "https://61b6e883c95dd70017d410c9.mockapi.io/";

export const fetchContacts = () => async (dispatch) => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await axios.get("/contacts");
    dispatch(fetchContactsSuccsess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = (name, number) => async (dispatch) => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactsRequest());

  try {
    const { data } = await axios.post("/contacts", contact);
    dispatch(addContactsSuccsess(data));
  } catch (error) {
    dispatch(addContactsError(error));
  }

  //   axios
  //     .post("/contacts", contact)
  //     .then(({ data }) => dispatch(addContactsSuccsess(data)))
  //     .catch((error) => dispatch(addContactsError(error)));
};

export const deleteContact = (contactId) => async (dispatch) => {
  dispatch(deleteContactsRequest());

  try {
    axios.delete(`/contacts/${contactId}`);
    dispatch(deleteContactsSuccsess(contactId));
  } catch (error) {
    dispatch(deleteContactsError(error));
  }
};

// export default { addContact, fetchContacts, deleteContact };