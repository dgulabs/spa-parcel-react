import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";

const rootComponent = () => {
  return <div>Hello World from React!!</div>;
};

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent,
});

export const { bootstrap, mount, unmount } = lifecycles;
