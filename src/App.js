import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends React.Component {

  state ={

    contacts: []
  }
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
    
  }
  onDeleteContact= contact => {
      this.setState( state => ({
          contacts : state.contacts.filter((c) => c.id !== contact.id)
      }))
      ContactsAPI.remove(contact)
  }

  render() {
    return (
      <div>
        <ListContacts  onDeleteContact = {this.onDeleteContact} contacts={this.state.contacts}/>
      </div>
    )
  }
}

export default App;
