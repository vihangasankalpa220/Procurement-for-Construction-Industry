import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import VendorDashboard from "./asiri/pages/vendorDashboard";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

//Jest
it("Vendor dashboard test pass", () => {
  const testDiv = document.createElement("div");
  ReactDOM.render(<VendorDashboard />, testDiv);
});