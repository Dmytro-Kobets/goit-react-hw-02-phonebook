import { Component } from 'react';

export class ContactList extends Component {
  render() {
    const { contacts, filter } = this.props;
    return (
      <ul>
        {contacts.map(contact => {
          return !filter === '' || contact.name.includes(filter) ? (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ) : null;
        })}
      </ul>
    );
  }
}
