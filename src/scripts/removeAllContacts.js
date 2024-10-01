import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    let contacts = await readContacts();
    contacts = [];
    writeContacts(contacts);
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
