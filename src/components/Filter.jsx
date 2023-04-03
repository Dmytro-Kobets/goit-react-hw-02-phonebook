import { Component } from 'react';

export class Filter extends Component {
  render() {
    const { filter, handleChange } = this.props;
    return (
      <input
        type=""
        name="filter"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
        value={filter}
      />
    );
  }
}
