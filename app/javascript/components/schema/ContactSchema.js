import React from "react";
import Form from "react-jsonschema-form";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

const schema = {
  title: "Contact Form",
  type: "object",
  required: ["name_first","name_last"],
  properties: {
    name_first: {type: "string", title: "First Name"},
    name_last: {type: "string", title: "Last Name"},
    email: {type: "string", title: "Email"}

  }
};

const uiSchema= {
  "name_first": {
    "ui:autofocus": true,
    "ui:placeholder": "First Name"
  },
  "name_last": {
    "ui:placeholder": "Last Name"
  },
  "email": {
    "ui:options": {
      "inputType": "email"
    },
    "ui:placeholder": "emailaddrss@gmail.com"

  }
};



const log = (type) => console.log.bind(console, type);


const onError = (errors) => console.log("I have", errors.length, "errors to fix");

class ContactSchema extends React.Component {

  constructor(props) {
    super(props);
    console.log("ContactSchema constructor: prop = ", props);
    this.state = {
      formData: {}
    };
  }

  componentDidMount() {
    if (this.props.match.params.id == undefined) {
      return;
    }
    let fetch_url = `/api/v2/contacts/${this.props.match.params.id}`;

    fetch(fetch_url)
    .then((response) => {return response.json()})
    .then((responseData) => {
      console.log("responseData = ", responseData);
      this.setState({
        formData: {
          "name_first": responseData.data.attributes["name-first"],
          "name_last": responseData.data.attributes["name-last"],
          "email": responseData.data.attributes["email"]
        }
      });
    })
  }

  onSubmit = ({formData}) => {
    console.log("Data submitted ", formData);
    let submitData =  JSON.stringify({
      data: {
        type: "contacts",
        attributes: {
          "name-first": formData.name_first,
          "name-last": formData.name_last,
          "email": formData.email
        }
      }
    });

    fetch('/api/v2/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/vnd.api+json'
      },
      body: submitData,
    }).then((response) => {
      const basePath = "/basic_schema";
      //window.location.href =`${basePath}/contacts`;
      this.props.history.push("/basic_schema/contacts");
    });
  }


  render () {
    return (
      <Form schema={schema}
            uiSchema={uiSchema}
            formData={this.state.formData}
            onChange={log("changed")}
            onSubmit={this.onSubmit}
            onError={onError} />
    );
  }
}


export default ContactSchema;