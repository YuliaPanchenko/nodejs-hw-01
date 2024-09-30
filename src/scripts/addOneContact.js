import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.push(createFakeContact());
    const newContact = JSON.stringify(contacts, undefined, 2);
    fs.writeFile(PATH_DB, newContact, 'utf-8');
  } catch (error) {
    console.error(error);
  }
};

addOneContact();
