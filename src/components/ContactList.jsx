import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts, filter, handleDelete } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return !filter === '' || contact.name.includes(filter) ? (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button onClick={handleDelete} id={contact.id}>
                Delete
              </button>
            </li>
          ) : null;
        })}
      </ul>
    );
  }
}
