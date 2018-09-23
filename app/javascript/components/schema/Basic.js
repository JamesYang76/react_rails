import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import BasicSchema from "./BasicSchema"
import SimpleSchema from "./SimpleSchema"
import NestedSchema from "./NestedSchema"

const basePath = "/basic_schema";


const Basic = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to={`${basePath}`}>Basic Schema Form</Link>
        </li>
        <li>
          <Link to={`${basePath}/simple`}>Simple Schema Form</Link>
        </li>
        <li>
          <Link to={`${basePath}/nested`}>Nested Schema Form</Link>
        </li>
      </ul>

      <hr />

      <Route exact path={`${basePath}`} component={BasicSchema} />
      <Route path={`${basePath}/simple`} component={SimpleSchema} />
      <Route path={`${basePath}/nested`} component={NestedSchema} />
    </div>
  </Router>
);

export default Basic;