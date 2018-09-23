class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
  }

  deleteContact(index) {
    this.contacts.splice(index, 1);
  }

  getContact(index) {
    return this.contacts[index];
  }
}
