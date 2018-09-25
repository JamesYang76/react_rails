import React from "react";
import Form from "react-jsonschema-form";
import { BrowserRouter as Router, Route, Redirect, Link } from "react-router-dom";

const schema = {
  title: "Contact Form",
  type: "object",
  required: ["name_first"],
  properties: {
    name_first: {type: "string", title: "First Name"},
    name_last: {type: "string", title: "Last Name"},
    email: {type: "string", title: "Email"},
    phones: {
      title: "Phone Number",
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
            title: "Name"
          },
          phone_number: {
            type: "string",
            title: "Phone Number"
          }
        }
      }
    }
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
  },

};

function ArrayFieldTemplate(props) {
  return (
    <div className={props.className}>
      {props.items &&
      props.items.map(element => (
        <div key={element.index}>
          <div>{element.children}</div>
          {element.hasMoveDown && (
            <button
              onClick={element.onReorderClick(
                element.index,
                element.index + 1
              )}>
              Down
            </button>
          )}
          {element.hasMoveUp && (
            <button
              onClick={element.onReorderClick(
                element.index,
                element.index - 1
              )}>
              Up
            </button>
          )}
          <button onClick={element.onDropIndexClick(element.index)}>
            Delete
          </button>
          <hr />
        </div>
      ))}

      {props.canAdd && (
        <div className="row">
          <p className="col-xs-3 col-xs-offset-9 array-item-add text-right">
            <button onClick={props.onAddClick} type="button">
              ADD Phone
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

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

    formData.phones.forEach((phone) => {
      console.log(phone.name);
    });

    if ( this.props.match.params.id == undefined ) {
      fetch('/api/v2/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/vnd.api+json'
        },
        body: submitData,
      }).then((response) => {return response.json()})
        .then((response) => {
        console.log("response = ", response);

        //const basePath = "/basic_schema";
        //window.location.href =`${basePath}/contacts`;
        if(response.errors == undefined) {

          this.props.history.push("/basic_schema/contacts");
        }
      });
    }
    else {
      let fetch_url = `/api/v2/contacts/${this.props.match.params.id}`;
      let submitEditData =  JSON.stringify({
        data: {
          id: this.props.match.params.id,
          type: "contacts",
          attributes: {
            "name-first": formData.name_first,
            "name-last": formData.name_last,
            "email": formData.email
          }
        }
      });
      fetch(fetch_url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/vnd.api+json'
        },
        body: submitEditData,
      }).then((response) => {return response.json()})
        .then((responseData) => {
        const basePath = "/basic_schema";
        //window.location.href =`${basePath}/contacts`;
        console.log(responseData);
        this.props.history.push("/basic_schema/contacts");
      });
    }
  }


  render () {
    return (
      <Form schema={schema}
            uiSchema={uiSchema}
            formData={this.state.formData}
            ArrayFieldTemplate={ArrayFieldTemplate}
            onChange={log("changed")}
            onSubmit={this.onSubmit}
            onError={onError} />
    );
  }
}


export default ContactSchema;