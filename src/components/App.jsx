import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';

const INITIAL_STATE = {
  contacts: [],
  name: '',
  number: '',
};
export class App extends Component {
  // state = {
  //   contacts: [],
  //   name: '',
  //   number: '',
  // };
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, contacts } = this.state;
    // let flag = false;

    // contacts.map(contact => {
    //   if (contact.name.includes(name)) {
    //     alert(`${name} is already in contacts`);
    //     flag = true;
    //   }
    // });
    // if (flag === false)
    const alreadyInContacts = contacts.find(contact => contact.name === name);
    console.log(alreadyInContacts);
    alreadyInContacts
      ? alert(`${name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, { id: nanoid(), name, number }],
          name: '',
        }));

    console.log(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
        />
      </div>
    );
  }
}
