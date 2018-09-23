import React, { Component } from "react";
import Form from "react-jsonschema-form";


const schema = {
  "title": "A registration form",
  "description": "A simple form example.",
  "type": "object",
  "required": [
    "firstName",
    "lastName"
  ],
  "properties": {
    "firstName": {
      "type": "string",
      "title": "First name"
    },
    "lastName": {
      "type": "string",
      "title": "Last name"
    },
    "age": {
      "type": "integer",
      "title": "Age"
    },
    "bio": {
      "type": "string",
      "title": "Bio"
    },
    "password": {
      "type": "string",
      "title": "Password",
      "minLength": 3
    },
    "telephone": {
      "type": "string",
      "title": "Telephone",
      "minLength": 10
    }
  }
};

const uiSchema= {
  "firstName": {
    "ui:autofocus": true,
    "ui:emptyValue": ""
  },
  "age": {
    "ui:widget": "updown",
    "ui:title": "Age of person",
    "ui:description": "(earthian year)"
  },
  "bio": {
    "ui:widget": "textarea"
  },
  "password": {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!"
  },
  "date": {
    "ui:widget": "alt-datetime"
  },
  "telephone": {
    "ui:options": {
      "inputType": "tel"
    }
  }
};

const formData = {
  "firstName": "aaa",
  "age": 75,
  "bio": "Roundhouse kicking asses since 1940",
  "password": "noneed"
}

const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

class SimpleSchema extends React.Component {
  render () {
    return (
      <Form schema={schema}
            uiSchema={uiSchema}
            formData={formData}
            onChange={log("changed")}
            onSubmit={onSubmit}
            onError={onError} />
    );
  }
}


export default SimpleSchema;