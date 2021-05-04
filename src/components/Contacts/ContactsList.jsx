import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.scss';
import {
  getContacts,
  deleteContact,
} from '../../redux/contacts/contacts-operations';

export class ContactsList extends Component {
  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    const { contacts, onDelete } = this.props;

    return (
      <ul className={styles.contacts}>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id} className={styles.contact}>
              <span>{name}</span>
              <span>{number}</span>
              <button className={styles.button} onClick={() => onDelete(id)}>
                X
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ contacts }) => ({
  contacts: contacts.items.filter(
    ({ name, number }) =>
      name.toLowerCase().includes(contacts.filter.toLowerCase()) ||
      number.includes(contacts.filter),
  ),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
  getContacts: () => dispatch(getContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
