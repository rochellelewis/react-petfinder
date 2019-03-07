//this file gets us bootstrapped to the client - for SSR
import React from "react";
import {hydrate} from "react-dom";
import App from "./App";

hydrate(<App/>, document.getElementById("root"));