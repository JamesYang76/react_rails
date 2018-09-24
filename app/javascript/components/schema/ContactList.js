import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const basePath = "/basic_schema";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
  }

  componentDidMount(){
    fetch('/api/v2/contacts')
      .then((response) => {return response.json()})
      .then((responseData) => {
          console.log("/api/v2/contacts = ", responseData);
          let contacts_arr =responseData.data.map(obj => ({
            id: obj.id,
            name_first: obj.attributes["name-first"],
            name_last: obj.attributes["name-last"],
            email:  obj.attributes["email"]
          }));
          this.setState({ contacts: contacts_arr })
        }
      )
  }

  render () {
    var contacts = this.state.contacts.map((contact) => {
      return(
        <tr key={contact.id}>
          <td>{contact.name_first}</td>
          <td>{contact.name_last}</td>
          <td>{contact.email}</td>
          <td></td>
        </tr>
      )
    });

    return (
      <div>
        <h1>ContactList</h1>
        <Link to={`${basePath}/contact/create`}>Create Contact</Link>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ContactList;