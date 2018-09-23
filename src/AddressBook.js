class AddressBook {
  constructor() {
    this.contacts = [];
    this.initialComplete = false;
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
  // asynchronous code
  getInitialContacts(cb) {
    setTimeout(() => {
      this.initialComplete = true;
      if (cb) return cb();
    }, 3);
  }
}
