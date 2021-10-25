import React from "react";
import { mount } from "@cypress/react";
import Login from "./index";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Router } from "react-router-dom";
it("tests login", () => {
  mount(
    <Provider store={store}>
      <Login />
    </Provider>
  );
  cy.get("#email").type("test@gmail.com");
  cy.get("#password").type("testing@1234");
  cy.get("button").contains("login.submit").click();
});
