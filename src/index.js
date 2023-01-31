import React from "react";
import {createRoot} from "react-dom/client";
import App from "./components/App";


const container=document.getElementById("root");
const root=createRoot(container);
root.render(<App /> );

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events
