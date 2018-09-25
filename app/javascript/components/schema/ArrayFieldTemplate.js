import React from "react";
import Form from "react-jsonschema-form";

const schema = {
  "title": "Custom array of strings",
  "type": "object",
  "properties": {
    "phones": {
      "title": "Phone Number",
      "type": "array",
      "minItems": 1,
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name"
          },
          "phone_number": {
            "type": "string",
            "title": "Phone Number"
          }
        }

      }
    }
  }

};


const uiSchema = {
  "phones": {
    "items": {
      "ui:options":  {
        orderable: false
      },
      "name": {
        "ui:autofocus": true
      }
    }
  }
};


const log = (type) => console.log.bind(console, type);
const onSubmit = ({formData}) => console.log("Data submitted: ",  formData);
const onError = (errors) => console.log("I have", errors.length, "errors to fix");

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
              ADD
            </button>
          </p>
        </div>
      )}
    </div>
  );
}


class ArrayField extends React.Component {


  render () {
    return (
      <Form schema={schema}
            uiSchema={uiSchema}
            ArrayFieldTemplate={ArrayFieldTemplate}
            onChange={log("changed")}
            onSubmit={onSubmit}
            onError={onError} />
    );
  }
}

export default ArrayField
