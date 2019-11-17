import {
  GET_CONTACTS,
  GET_CONTACT,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT
} from '../actions/types';
const initialState = {
  contacts: [],
  contact: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS: {
      return { ...state, contacts: action.payload };
    }

    case GET_CONTACT: {
      return { ...state, contact: action.payload };
    }

    case ADD_CONTACT: {
      return {
        ...state,
        contacts: [...state.contacts, action.payload.contact]
      };
    }
    case DELETE_CONTACT: {
      return {
        ...state,
        contacts: state.contacts.filter(contact => {
          return contact.id !== action.payload.id;
        })
      };
    }
    case EDIT_CONTACT: {
      console.log(action.payload);
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact.id === action.payload.contact.id
            ? (contact = action.payload.contact)
            : contact
        )
      };
    }
    default:
      return state;
  }
}
