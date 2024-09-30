import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);
    contacts.pop();
    fs.writeFile(PATH_DB, JSON.stringify(contacts, undefined, 2));
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
