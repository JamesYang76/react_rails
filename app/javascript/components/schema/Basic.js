import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BasicSchema from "./BasicSchema"
import SimpleSchema from "./SimpleSchema"
import NestedSchema from "./NestedSchema"
import ContactList from "./ContactList";
import ContactSchema from "./ContactSchema";
import ArrayField from "./ArrayFieldTemplate";
import CounterContainer from "../redux/CounterContainer";

const basePath = "/basic_schema";


const Basic = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to={`${basePath}/contacts`}>Contract</Link>
        </li>

        <li>
          <Link to={`${basePath}`}>Basic Schema Form</Link>
        </li>

        <li>
          <Link to={`${basePath}/simple`}>Simple Schema Form</Link>
        </li>

        <li>
          <Link to={`${basePath}/nested`}>Nested Schema Form</Link>
        </li>

        <li>
          <Link to={`${basePath}/arraytmp`}>Array Schema Form</Link>
        </li>

        <li>
          <Link to={`${basePath}/counter`}>Redux Counter</Link>
        </li>
      </ul>

      <hr />

      <Route exact path={`${basePath}`} component={BasicSchema} />
      <Route path={`${basePath}/simple`} component={SimpleSchema} />
      <Route path={`${basePath}/nested`} component={NestedSchema} />
      <Route exact path={`${basePath}/contacts`} component={ContactList} />
      <Route exact path={`${basePath}/contacts/new`} component={ContactSchema} />
      <Route path={`${basePath}/contacts/:id/edit`} component={ContactSchema} />
      <Route path={`${basePath}/arraytmp`} component={ArrayField} />
      <Route path={`${basePath}/counter`} component={CounterContainer} />
    </div>
  </Router>
);

export default Basic;