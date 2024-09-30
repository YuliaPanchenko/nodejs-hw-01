import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    let contacts = JSON.parse(data);
    contacts = [];
    fs.writeFile(PATH_DB, JSON.stringify(contacts));
  } catch (error) {
    console.error(error);
  }
};

removeAllContacts();
