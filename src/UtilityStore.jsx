import React from "react";

import applications from "./data/applications.json";
import { Title, Application } from "./components";

export default function UtilityStore() {
  return (
    <div className="container">
      <p className="title">Herramientas para la papelería</p>
      <Title text="Aplicaciones básicas" />
      <div className="applicationsContainer">
        {applications.map((application, index) => (
          <Application key={index} {...application} />
        ))}
      </div>
    </div>
  );
}
