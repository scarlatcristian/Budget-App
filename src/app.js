import ReactDom from "react-dom";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const root = document.querySelector("#app");

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);

const AddExpensePage = () => <div>This is from my add expense component</div>;

const EditExpensePage = () => <div>This is my edit espense page</div>;

const HelpPage = () => <div>This is my help page</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
    </div>
  </BrowserRouter>
);

ReactDom.render(routes, root);
