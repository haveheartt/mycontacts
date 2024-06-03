const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'guilherme',
    email: 'guilherme@gmail.com',
    phone: '234341423',
    category_id: uuid(),
  }
]

class ContactsRepository {
  findAll() {
    return new Promise((resolve, reject) =>  {
      resolve(contacts)
    });
  }

}

module.exports = new ContactsRepository();
