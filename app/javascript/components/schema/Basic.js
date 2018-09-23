import React, { Component } from "react";
import Form from "react-jsonschema-form";


const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: {type: "string", title: "Title", default: "A new task"},
    done: {type: "boolean", title: "Done?", default: false}
  }
};

const formData = {
  title: "First task",
  done: true
};

const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

class Basic extends React.Component {
  render () {
    return (
        <Form schema={schema}
              formData={formData}
              onChange={log("changed")}
              onSubmit={onSubmit}
              onError={onError} />
    );
  }
}


export default Basic
